---
title: Contributing
sidebar_position: 7
---

Zerp is a multi-repo project - the core app and each module are separate
repositories under [zerp-pk](https://github.com/orgs/zerp-pk/repositories).
Full contribution guidelines, including which repo a given change belongs
in, live in the core app:

- [CONTRIBUTING.md](https://github.com/zerp-pk/zerp/blob/main/CONTRIBUTING.md)
- [SECURITY.md](https://github.com/zerp-pk/zerp/blob/main/SECURITY.md) - how to report a vulnerability
- [CODE_OF_CONDUCT.md](https://github.com/zerp-pk/zerp/blob/main/CODE_OF_CONDUCT.md)

Quick pointers specific to working on the codebase:

- A change to a feature module (HRM, CRM, Accounting, ...) belongs in that
  module's own repo, not the core app.
- A change to auth, tenancy, billing, the Media Library, or the module
  loader belongs in the core app.
- See [Getting Started](../10-getting-started/getting-started.md) for local setup and
  [Module Development](../20-architecture/module-development.md) before adding a new module or
  changing how modules integrate.

This docs site itself ([zerp-pk/docs](https://github.com/zerp-pk/docs)) is
also open to PRs - fixes to unclear wording, missing steps, or outdated
screenshots are always welcome.
