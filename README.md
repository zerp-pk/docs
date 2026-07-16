# Zerp Docs

User and developer documentation for [Zerp](https://github.com/zerp-pk/zerp), built with [Docusaurus](https://docusaurus.io/).

Two doc sets live side by side:

- `docs-user/` - User Docs (served at `/docs`)
- `docs-developer/` - Developer Docs (served at `/developer`)

## Local development

```bash
npm install
npm start
```

Starts a local dev server with live reload.

## Build

```bash
npm run build
```

Generates static content into `build/`, served by `npm run serve`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and deploys it to GitHub Pages automatically.
