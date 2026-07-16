---
title: The Media Library
sidebar_position: 4
---

Every file a business uploads in Zerp - employee documents, contract
attachments, project files, lead/deal files, candidate resumes, support
ticket attachments, avatars - goes through one shared system: the Media
Library, backed by `App\Services\MediaAttachmentService`.

## Why one shared service

Before this existed, each module handled its own uploads with slightly
different conventions (different disks, different path shapes, inconsistent
delete-on-remove behavior, some modules silently never deleting old files
at all). `MediaAttachmentService` gives every module the same four
operations instead of reinventing upload/delete per feature:

```php
App\Services\MediaAttachmentService::upload(...)
App\Services\MediaAttachmentService::resolveOrBackfill(...)
App\Services\MediaAttachmentService::ensureDirectory(...)
App\Services\MediaAttachmentService::deleteMedia(...)
```

- **`upload()`** - stores an `UploadedFile`, creates a `Media` row, links it
  to a directory/collection/owner.
- **`resolveOrBackfill()`** - idempotent link-or-create: given an existing
  path-based reference (from before a table had a `media_id` column), finds
  or creates the matching `Media` row without duplicating it on repeat
  runs. Used by the backfill command below.
- **`ensureDirectory()`** - gets-or-creates a `MediaDirectory` (e.g. one
  per module/collection) to keep the library organized.
- **`deleteMedia()`** - deletes both the `Media` row and the underlying
  file.

## Storage layout is deliberately flat

Files are stored flat - `media/{file_name}`, occasionally with one extra
subpath segment (e.g. `employee_documents/xxx.pdf`) - rather than using
Spatie Media Library's default per-model/per-collection nested directory
structure. This is intentional: 35+ `MediaPicker` frontend consumers across
every module reconstruct file URLs assuming this flat shape. Spatie's real
`addMedia()` pipeline and conversions, and the registered `MediaPathGenerator`
class, exist in the dependency tree but are **not used** - don't wire a new
feature directly against Spatie's native API, go through
`MediaAttachmentService` instead so URL construction stays consistent.

## Migrating an existing table to the Media Library

If you're touching a table that stores a raw file path (or a JSON array of
paths) instead of a `media_id` foreign key:

1. Add a `media_id` (or `{field}_media_id`) column + relation to the model.
2. Wire the controller's store/update/destroy to call
   `MediaAttachmentService::upload()` / `deleteMedia()`.
3. Backfill existing rows with `php artisan media:backfill <source>` (see
   `app/Console/Commands/BackfillMediaAttachments.php`) - it's idempotent
   and supports `--dry-run`, and has a declarative `sources()` map you add
   an entry to (path-column sources) or `jsonArraySources()` (for a column
   storing a JSON array of paths, e.g. support-ticket attachments).

## A caveat if you're touching JSON array attachment columns

At least one pre-existing module (support-ticket) casts an `attachments`
column as `'array'` in Eloquent but its controllers were calling
`json_encode()` on the value before passing it to `create()`/`update()`,
double-encoding it. If you add code that reads that column back through the
model's cast accessor, check for this rather than assuming the column is
clean JSON; linking through `MediaAttachmentService` from the pre-encode
PHP array already in scope at the call site avoids the corrupted cast
value entirely.
