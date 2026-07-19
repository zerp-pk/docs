---
title: API Documentation (Swagger)
sidebar_position: 4
---

Zerp's REST API is documented with [Scramble](https://scramble.dedoc.co/),
which generates an OpenAPI (Swagger) spec straight from the controllers'
type hints, form requests, and API resources. There are no annotations to
write or keep in sync - the docs follow the code.

## Viewing the docs

Start the app (`php artisan serve --port=8000`) and open the interactive
Swagger UI in a browser:

| URL | Scope |
|---|---|
| `/docs/api` | Everything - core auth plus every module's API |
| `/docs/hrm` | HRM module only |
| `/docs/support-ticket` | Support Ticket module only |
| `/docs/taskly` | Project (Taskly) module only |

The combined `/docs/api` page is the one to use for a full picture. The
per-module pages exist only for the modules that ship an API today (HRM,
Support Ticket, Taskly) and are handy when you are working inside a single
package. More appear as other modules gain API routes.

## Using the spec

- **Try endpoints live.** Routes behind `auth:*` show an **Authorize**
  button - paste a Sanctum bearer token and call them from the page.
- **Export the raw OpenAPI JSON** from the **Download** link on any page, or
  fetch it directly (`/docs/api.json`, `/docs/hrm.json`, ...). Import it
  into Postman, Insomnia, or a client generator - this is how the Flutter
  app and other API consumers stay in sync.

## Access is local-only

`/docs/*` is gated by Scramble's `RestrictedDocsAccess` middleware, so it is
available in the `local` environment and returns **403 in production**. To
expose it on a hosted demo, either define a `viewApiDocs` gate or adjust the
`middleware` list in `config/scramble.php`.

Verify a spec builds without opening a browser:

```bash
php artisan scramble:analyze --api=hrm
```

## Adding docs to a new module

A module gets its own scoped page by registering it in the module's service
provider `boot()`, guarded so the package still works when Scramble is not
installed:

```php
if (class_exists(\Dedoc\Scramble\Scramble::class)) {
    \Dedoc\Scramble\Scramble::registerApi('yourmodule', [
        'api_path' => 'api/yourprefix',
        'info' => ['version' => '1.0.0'],
        'ui' => ['title' => 'Your Module API'],
    ])->expose(ui: '/docs/yourmodule', document: '/docs/yourmodule.json');
}
```

Registering inside the provider keeps the docs travelling with the package.
The richer your controllers' typed form requests, API resources, and return
types, the richer the generated spec.
