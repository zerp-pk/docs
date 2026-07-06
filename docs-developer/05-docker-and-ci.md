---
title: Docker & CI
sidebar_position: 5
---

## Docker

The core app's `Dockerfile` is a 3-stage build (`composer:2` vendor stage,
`node:20-slim` asset build stage, `php:8.2-apache` runtime stage).

The build context is the **parent** directory of the `zerp/` repo, not
`zerp/` itself:

```yaml
# docker-compose.yml
build:
  context: ..
  dockerfile: zerp/Dockerfile
```

This is required because `vendor/zerp/*` is a set of symlinks pointing at
the sibling `ZerpPackages/<module>` directories — if the build context were
just `zerp/`, those directories wouldn't be visible to Docker at all and
every module symlink would point at nothing. Every build stage that runs
`composer install` or otherwise touches `vendor/zerp/*` also does
`COPY ZerpPackages /ZerpPackages` first.

`docker-compose.yml` runs three services: `app` (the built image, port
`8000:80`), `db` (`mysql:8`), `redis` (`redis:7`) — `.env`'s `DB_HOST`/
`REDIS_HOST` are overridden to the service names (`db`/`redis`) so the app
container can reach them.

```bash
cp .env.example .env
docker compose up -d --build
docker compose exec app php artisan app:install --force
docker compose exec app php artisan storage:link
```

## CI

`.github/workflows/ci.yml` runs on every push/PR to `main`. It's
deliberately narrow: `composer validate`, a PHP lint pass over `app/`, and
an `npm run build` of the **core app only** — it does not run
`composer install`, PHPUnit, or anything that needs a module package
present.

Why: this repo's `composer.json` path repositories point at a sibling
`../ZerpPackages/*` directory that simply doesn't exist in an isolated
GitHub Actions checkout of just this one repo. CI is scoped to what can
actually run without it. If you need to test against real modules, do that
locally (see [Getting Started](./getting-started)).

Two smaller things worth knowing if you touch the workflow:

- No `cache: "npm"` on `actions/setup-node` — that requires a committed
  `package-lock.json`, which this repo doesn't commit.
- `npm install`, not `npm ci` — same reason, `npm ci` requires an existing
  lock file.

## Known limitation

`npm run build` fails if `vendor/zerp/*` module packages **are** present
locally, due to a Vite/Rollup module-resolution issue with symlinked
packages outside the project root (imports like `@inertiajs/react` from
inside a symlinked module fail to resolve). This doesn't affect CI (which
never has `vendor/zerp/*` populated) but is worth knowing if a local build
fails after `composer install` pulls in modules — not yet fixed, tracked as
a follow-up.
