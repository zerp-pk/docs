---
title: Building a module REST API
sidebar_position: 3
---

Modules expose a JSON REST API for the mobile app and third-party clients.
This guide walks through the pattern using the HRM module as the worked
example. Once your endpoints exist, the [API Documentation
(Swagger)](./api-documentation) guide covers viewing and exporting the
generated spec.

Several modules already ship an API you can read alongside this guide: HRM,
Timesheet, Quotation, Accounting, Restaurant, Real Estate, and Recruitment.

## Where the code lives

A module's API is two directories plus one route file, all under the
package's `src/`:

```
src/
  Http/
    Controllers/Api/        # *ApiController.php - one per resource
    Requests/Api/           # FormRequests for endpoints that take a body
  Routes/api.php            # the API routes, loaded by the ServiceProvider
```

Keep the API controllers in their own `Api/` namespace so they never get
confused with the web (Inertia) controllers, which return pages, not JSON.

## Routes

`src/Routes/api.php` registers every endpoint. The outer group applies the
`api.json` middleware; the inner group adds Sanctum auth and the module's URL
prefix:

```php
use Illuminate\Support\Facades\Route;
use Zerp\Hrm\Http\Controllers\Api\LeaveApiController;

Route::prefix('api')->middleware(['api.json'])->group(function () {
    Route::group(['middleware' => ['auth:sanctum'], 'prefix' => 'hrm'], function () {
        Route::get('get-leaves', [LeaveApiController::class, 'index']);
        Route::post('leave-request', [LeaveApiController::class, 'store']);
    });
});
```

`api.json` is the app's `ApiForceJson` middleware: it forces a JSON response
even when the client forgets the `Accept: application/json` header, so a
validation error or a 404 comes back as JSON instead of an HTML error page.

### Two things that will bite you

**1. `api.json` is not Laravel's `api` group.** It is a single force-JSON
middleware, so Laravel's `SubstituteBindings` does **not** run on these
routes. That means route-model binding is dead here: a type-hinted
`LeaveApplication $leave` argument arrives **empty**, not resolved from the
URL. Take the raw id and query it yourself, scoped to the tenant:

```php
// Do NOT do this on a module API route - $leave is empty:
public function show(LeaveApplication $leave) { ... }

// Do this - take the id and query with the tenant scope:
public function show($id)
{
    $leave = LeaveApplication::where('id', $id)
        ->where('created_by', creatorId())
        ->first();

    if (!$leave) {
        return $this->errorResponse('Not found', null, 404);
    }
    // ...
}
```

**2. `apiResource` route names collide.** If you use
`Route::apiResource('leaves', ...)`, it auto-generates route names
(`leaves.index`, `leaves.store`, ...) that clash with the module's web
`Route::resource('leaves', ...)` names, or with a core app route. Duplicate
names make `php artisan route:cache` throw, and that step runs on the server
deploy but **not** on the local `artisan serve` dev server, so live testing
passes while the deploy fails. Give the API group its own name prefix so the
names can never collide:

```php
Route::group([
    'middleware' => ['auth:sanctum'],
    'prefix' => 'restaurant',
    'as' => 'api.restaurant.',
], function () {
    Route::apiResource('menu-items', MenuItemApiController::class);
});
```

HRM's routes use explicit `get`/`post` with no names, so they need no `as`
prefix - but any module using `apiResource` does. Either way, run
`php artisan route:cache` locally after changing routes (see [Verifying](#verifying)).

## Controllers

An API controller extends the app's base `Controller` and uses
`App\Traits\ApiResponseTrait`, which gives every response the same envelope:

| Method | Envelope | Default status |
|---|---|---|
| `successResponse($data, $message, $status)` | `{success: true, message, data}` | 200 |
| `errorResponse($message, $errors, $status)` | `{success: false, message, errors}` | 400 |
| `validationErrorResponse($errors, $message)` | `{success: false, message, errors}` | 422 |
| `paginatedResponse($items, $message)` | data plus pagination meta | 200 |

Every query is **scoped to the tenant** and gated by the same permissions as
the web screens. `creatorId()` returns the company the authenticated user
belongs to; `Auth::user()->can(...)` checks the module permission:

```php
class LeaveApiController extends Controller
{
    use ApiResponseTrait;

    public function index(Request $request)
    {
        if (!Auth::user()->can('manage-leave-applications')) {
            return $this->errorResponse('Permission denied', null, 403);
        }

        $leaves = LeaveApplication::where('created_by', creatorId())
            ->when($request->reason, fn ($q) =>
                $q->where('reason', 'like', '%' . $request->reason . '%'))
            ->latest()
            ->paginate($request->get('per_page', 10))
            ->withQueryString();

        return $this->paginatedResponse($leaves, 'Leave applications retrieved successfully');
    }
}
```

The tenant scope is not optional. It is the only thing standing between one
company's data and another's, since the id in the URL is guessable. Every
`find`, `where`, and cross-table `whereHas` on a module API route must carry
`->where('created_by', creatorId())` (or the equivalent scope for the model).

## Request validation

For any endpoint that takes a body, use a FormRequest that extends
`App\Http\Requests\ApiFormRequest`. The base overrides `failedValidation()`
so a validation error returns the shared `{success, message, errors}` 422
envelope instead of Laravel's default redirect or HTML. It also lets Scramble
read the rules and publish a real request-body schema.

```php
namespace Zerp\Hrm\Http\Requests\Api;

use App\Http\Requests\ApiFormRequest;

class StoreLeaveRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'leave_type_id' => 'required|exists:leave_types,id,created_by,' . creatorId(),
            'start_date'    => 'required|date',
            'end_date'      => 'required|date|after_or_equal:start_date',
            'reason'        => 'required|string',
            'attachment'    => 'nullable|file',
        ];
    }
}
```

Write the rules as literal arrays (use `required_if` rather than closures) so
Scramble can read them. Do **not** call `$request->validate()` inline inside
a controller `try/catch`: the `ValidationException` gets swallowed into a 500,
and the client sees "Something went wrong" instead of the field errors. The
FormRequest keeps validation outside the `try`, where it belongs.

## Scoped Swagger docs

Register a scoped Scramble docs page in the module's ServiceProvider `boot()`,
guarded so the package still installs when the host app has no Scramble:

```php
if (class_exists(\Dedoc\Scramble\Scramble::class)) {
    \Dedoc\Scramble\Scramble::registerApi('hrm', [
        'api_path' => 'api/hrm',
        'info' => ['version' => \Composer\InstalledVersions::getPrettyVersion('zerp/hrm') ?? '1.0.0'],
        'ui' => ['title' => 'Zerp HRM API'],
    ])->expose(ui: '/docs/hrm', document: '/docs/hrm.json');
}
```

`api_path` must match the route prefix from `api.php` (`api/hrm` here). This
publishes the module's page at `/docs/hrm`, and it also folds into the
combined `/docs/api` page automatically. Keeping the registration in the
provider means the docs travel with the package.

## Verifying

Before you tag the package, run two checks locally:

```bash
# 1. The scoped spec builds without a browser
php artisan scramble:analyze --api=hrm

# 2. Route names do not collide (catches the apiResource trap above)
php artisan route:cache && php artisan route:clear
```

`route:cache` validates every module's routes at once, so one run covers the
whole app. Then start the app (`php artisan serve`) and call your endpoints
with a Sanctum bearer token - confirm the tenant scope holds by requesting a
record that belongs to another company and getting a 404, not its data.

## Checklist

- [ ] Controllers in `src/Http/Controllers/Api/`, routes in `src/Routes/api.php`
- [ ] Outer group `api.json`, inner group `auth:sanctum` + module prefix
- [ ] Take an `$id` and query manually - route-model binding does not work here
- [ ] Every query scoped with `->where('created_by', creatorId())` and permission-gated
- [ ] Responses through `ApiResponseTrait`; bodies validated by an `ApiFormRequest`
- [ ] `apiResource` groups given an `'as' => 'api.<slug>.'` name prefix
- [ ] `Scramble::registerApi(...)` in the ServiceProvider, guarded by `class_exists`
- [ ] `php artisan scramble:analyze` and `php artisan route:cache` both pass
