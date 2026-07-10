---
title: Module Development Guide
sidebar_position: 3
---

A module is a standalone Composer package that plugs into the core app.
This page covers the shape a module needs and how it hooks into the rest
of the platform.

## Package layout

```
ZerpPackages/product-service/
├── composer.json
├── module.json
└── src/
    ├── Providers/
    │   ├── ProductServiceServiceProvider.php
    │   └── EventServiceProvider.php
    ├── Listeners/
    ├── Http/Controllers/
    └── ...
```

`composer.json` — standard Composer package metadata, PSR-4 autoload, and a
Laravel `extra.laravel.providers` entry so the core app auto-discovers the
service provider:

```json
{
    "name": "zerp/product-service",
    "type": "library",
    "autoload": {
        "psr-4": {"Zerp\\ProductService\\": "src/"}
    },
    "extra": {
        "laravel": {
            "providers": ["Zerp\\ProductService\\Providers\\ProductServiceServiceProvider"]
        }
    }
}
```

`module.json` — metadata the core app reads at seed/runtime (not a Laravel
convention, a Zerp-specific file `App\Classes\Module` and `PackageSeeder`
look for):

```json
{
    "name": "ProductService",
    "alias": "Product & Service",
    "priority": 0,
    "version": 5.0,
    "monthly_price": 0,
    "yearly_price": 0,
    "display": false,
    "package_name": "product-service"
}
```

## How a module gets registered

`database/seeders/PackageSeeder.php` (core app) scans `vendor/zerp/*` (and
the legacy in-repo `packages/local/*` path) for a `module.json` in each
directory, and for every one it finds:

1. Creates an `AddOn` row (module, price, priority) if one doesn't exist —
   `is_enable` is set based on whether the module was selected during
   `app:install` (see below); every discovered module gets a row either
   way, enabled or not.
2. If enabled: activates it for the seeded user via `UserActiveModule`.
3. If enabled: runs `php artisan package:seed <ModuleName>` if the module
   defines one.

This runs automatically as part of `php artisan app:install`, which
prompts for which modules to enable (a preset bundle or a custom
selection) — see [Getting Started](../10-getting-started/getting-started.md).

## Cross-module integration: events, not direct calls

Modules never call into each other directly. The core app fires domain
events (`app/Events/*.php` — `CreatePurchaseInvoice`, `CreateSalesInvoice`,
`CreateUser`, `CreateWarehouse`, etc.) and modules that care register a
listener via their own `EventServiceProvider`:

```php
// ZerpPackages/product-service/src/Providers/EventServiceProvider.php
protected $listen = [
    PostPurchaseInvoice::class => [
        PostPurchaseInvoiceListener::class,
    ],
];
```

```php
// ZerpPackages/product-service/src/Listeners/PostPurchaseInvoiceListener.php
class PostPurchaseInvoiceListener
{
    public function handle(PostPurchaseInvoice $event)
    {
        // e.g. adjust WarehouseStock based on the posted invoice
    }
}
```

This is how `product-service` adjusts warehouse stock when an invoice is
posted, how `calendar`/`slack`/`telegram` react to the same invoice events
to create calendar entries or send notifications, and so on — check
`app/Events/` in the core app for the full list of events you can listen
for before adding a new one.

## Permissions and plan gating

Zerp uses [Spatie's laravel-permission](https://spatie.be/docs/laravel-permission)
for roles/permissions, plus a plan/module-enable layer on top:

- `AddOn` + `UserActiveModule` (seeded by `PackageSeeder`, see above)
  determine whether a module is enabled for a given company at all.
- `App\Classes\Module::isEnabled($name)` / `allEnabled()` check this at
  runtime — gate any module-specific route/controller/view behind it if the
  module can be toggled off.
- Regular Spatie roles/permissions (`client`, `staff`, custom roles) then
  control what an individual *user* can do within an enabled module.

## Publishing your module

Once a module works locally against its path repository, cut a tagged
release so the core app (and anyone else) can depend on a real version
instead of a local symlink — see
[Publishing a Module Package](../30-guides/publishing-a-package.md).

Every class in every module is catalogued in the
[Package Reference](../50-reference/index.md).
