---
title: Getting Started
sidebar_position: 2
---

This is a condensed walkthrough. The
[`zerp-pk/zerp` README](https://github.com/zerp-pk/zerp#readme) is the
source of truth — check it if anything here goes stale.

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
├── zerp/            # core app — github.com/zerp-pk/zerp
└── ZerpPackages/
    ├── hrm/          # github.com/zerp-pk/hrm
    ├── account/      # github.com/zerp-pk/account
    ├── pos/          # github.com/zerp-pk/pos
    └── ...           # one directory per module you need
```

The full module → repository table is in the core app's README. You don't
need every module for local development — only clone the ones you're
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

This runs `migrate:fresh` (drops all tables) then seeds the database,
registering every module found under `vendor/zerp/*` into the `add_ons`
table via `PackageSeeder`. Only run it against a disposable database.

## 4. Run it

```bash
php artisan serve --port=8000
npm run dev
```

Visit `http://localhost:8000`, log in with the seeded super-admin
(`company@example.com` / `1234`).

## Prefer Docker?

`docker compose up -d --build` from the core app repo works the same way —
see [Docker & CI](./docker-and-ci). The sibling `ZerpPackages/` checkout is
still required either way, since the Docker build context is the **parent**
directory of `zerp/`.
