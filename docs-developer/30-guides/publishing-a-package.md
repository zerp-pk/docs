---
title: Publishing a Module Package
sidebar_position: 6
---

Once a module works locally against a `path` repository, tag a release so
other installs can depend on a real version.

## Version tags are immutable

**Never re-tag a version that's already been published.** If `v1.0.1` is
already out and you need to fix something in it, cut `v1.0.2` - don't
force-push over the existing tag. Anyone who already resolved `v1.0.1` (a
lockfile, a deployed environment) would silently get different code under
the same version number, which is exactly the class of bug semantic
versioning exists to prevent.

```bash
git tag v1.0.2
git push origin v1.0.2
```

## Steps

1. Make sure `composer.json`'s `autoload` and `extra.laravel.providers`
   are correct and `module.json` metadata (`name`, `alias`, `package_name`,
   pricing) matches what you want the core app to seed.
2. Commit and push to the module's own repo (`zerp-pk/<module>`).
3. Tag a new version (patch/minor/major per semver - a bug fix is a patch,
   a new feature is a minor, a breaking change to the module's public
   API/events is a major).
4. If the core app's `composer.json` should track the new version instead
   of `@dev`, update the `require` constraint there in a separate commit.

## Local dev vs. published

Local development uses the `path` repository + `@dev` so changes are
picked up immediately via the `vendor/zerp/<module>` symlink, without
needing a tag for every iteration. Only cut a real tag when the change is
ready to be depended on by something outside your own working copy.
