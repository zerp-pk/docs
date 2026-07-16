---
title: Getting Started
sidebar_position: 2
---

This is a condensed walkthrough. The
[`zerp-pk/zerp` README](https://github.com/zerp-pk/zerp#readme) is the
source of truth - check it if anything here goes stale.

## Prerequisites

- PHP 8.2+ with `pdo_mysql` enabled
- Composer
- Node.js + npm
- A MySQL/MariaDB server

## 1. Clone the core app and its modules as siblings

Every module lives in its own repo and must be checked out **next to** the
core app, matching what `composer.json`'s path repositories expect:

```
some-folder/
├── zerp/            # core app - github.com/zerp-pk/zerp
└── ZerpPackages/
    ├── hrm/          # github.com/zerp-pk/hrm
    ├── account/      # github.com/zerp-pk/account
    ├── pos/          # github.com/zerp-pk/pos
    └── ...           # one directory per module you need
```

The full module → repository table is in the core app's README. You don't
need every module for local development - only clone the ones you're
working on or testing against; `composer install` just won't symlink the
ones that are missing.

## 2. Install and configure

```bash
cd zerp
composer install
npm install
cp .env.example .env
php artisan key:generate
```

Set `DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` in `.env`.

## 3. Install the app

```bash
php artisan app:install --force
php artisan storage:link
```

This runs `migrate:fresh` (drops all tables) then prompts for a module
preset - `Full Suite`, `HR Only`, `Sales & CRM`, or a `Custom selection`
picker (see `config/module-presets.php` in the core app). Every module
found under `vendor/zerp/*` still gets registered into the `add_ons`
table via `PackageSeeder`, but only the ones you select are enabled and
seeded with demo data. For non-interactive installs, pass
`--preset=<name>` or `--modules=account,hrm,pos` instead of answering the
prompt. Only run this against a disposable database.

## 4. Run it

```bash
php artisan serve --port=8000
npm run dev
```

Visit `http://localhost:8000`, log in with the seeded super-admin
(`company@example.com` / `1234`).

## Module images are symlinks - know this before you debug them

Each module ships its own images (favicon, and for the Landing Page module the
hero/gallery/module art). They are **not copied** into `public/`. At module
install time, `Module::publishAssets()` (`app/Classes/Module.php`) creates
symlinks under `public/packages/local/<Module>/`:

```
public/packages/local/LandingPage/favicon.png            -> ../../../../vendor/zerp/landing-page/favicon.png
public/packages/local/LandingPage/src/Resources/assets   -> ../../../../../../vendor/zerp/landing-page/src/Resources/assets
```

Those symlinks are **committed to the repo**, and `vendor/zerp/<pkg>` is itself
a Composer path-repository symlink into your sibling `ZerpPackages/` checkout.
So a working image URL depends on a two-hop symlink chain. Two consequences:

- **Targets are relative on purpose.** They used to be absolute, which meant a
  fresh clone inherited symlinks pointing at the original author's home
  directory, and *every module image 404'd*. If you ever see links like
  `/home/someone/...` in `public/packages`, your checkout predates the fix.
- **A module you didn't clone leaves a dangling link.** That's harmless - only
  that module's images 404.

Images not loading? Check for dangling links first, then republish:

```bash
find public/packages -xtype l          # any output = broken links
php artisan tinker --execute="
  \$m = new \App\Classes\Module();
  foreach (\App\Models\AddOn::pluck('module') as \$mod) { \$m->publishAssets(\$mod); }
"
find public/packages -xtype l          # should now print nothing
```

`publishAssets()` replaces links that are broken or absolute, so this is safe to
re-run. Note it only runs on install, so nothing repairs these automatically.

Two related traps:

- `php artisan storage:link` covers `public/storage` (uploaded media, served via
  `imageUrlPrefix`). That's a **separate** link from the ones above - having one
  working tells you nothing about the other.
- **On Windows**, git only materialises real symlinks with Developer Mode or an
  elevated shell; otherwise it checks them out as small text files containing the
  target path, and every module image 404s. Enable Developer Mode, set
  `git config core.symlinks true`, and re-checkout.

## Prefer Docker?

`docker compose up -d --build` from the core app repo works the same way,
see [Docker & CI](../30-guides/docker-and-ci.md). The sibling `ZerpPackages/` checkout is
still required either way, since the Docker build context is the **parent**
directory of `zerp/`.
