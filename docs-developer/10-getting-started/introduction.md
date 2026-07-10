---
title: Introduction & Architecture
sidebar_position: 1
---

Zerp is a Laravel 12 + Inertia.js + React (TypeScript) ERP/SaaS platform. The
[main app](https://github.com/zerp-pk/zerp) is a thin core (auth, tenancy,
billing, the Media Library, module loader) — almost every business feature
(HRM, CRM, Accounting, POS, Support Ticket, ...) ships as a separate,
independently versioned Composer package under the
[`zerp-pk`](https://github.com/orgs/zerp-pk/repositories) GitHub org.

## Why packages, not a monolith

Each module is a real Composer package (`zerp/<module>`) with its own
repository, its own Packagist-style version tags, and its own
`composer.json`. This means:

- Modules can be developed, versioned, and released independently.
- The core app only depends on the modules it actually needs.
- Contributors can work on one module without checking out the entire
  platform.

## How modules attach to the core app

In local development, the core app's `composer.json` points at module
packages via **local path repositories**, resolved against a sibling
directory (commonly checked out as `ZerpPackages/` next to `zerp/`):

```json
{
  "repositories": [
    {"type": "path", "url": "../ZerpPackages/product-service", "options": {"symlink": true}}
  ],
  "require": {
    "zerp/product-service": "@dev"
  }
}
```

Composer symlinks each package into `vendor/zerp/<module>`. In production,
the same `require` line instead resolves against the module's real tagged
release on Packagist/VCS — no path repository needed.

## Where things live

| Concern | Location |
|---|---|
| Core app (auth, tenancy, billing, Media Library, module loader) | `zerp-pk/zerp` |
| Feature modules | `zerp-pk/<module>` (e.g. `zerp-pk/product-service`, `zerp-pk/hrm`) |
| This docs site | `zerp-pk/docs` |

See [Getting Started](./getting-started.md) to set up all of the above locally,
[Module Development](../20-architecture/module-development.md) for how a module is structured,
and [The Media Library](../20-architecture/media-library.md) for the shared file-storage system
every module builds on.
