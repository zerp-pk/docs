---
title: zerp/form-builder
sidebar_position: 7
---

# `zerp/form-builder`

Custom form builder module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 23

## Models

### `Form`

Eloquent model - 7 fillable fields, relations: fields, responses, conversion.

### `FormBuilderUtility`

Eloquent model - 0 fillable fields.

### `FormConversion`

Eloquent model - 7 fillable fields, relations: form.

### `FormField`

Eloquent model - 9 fillable fields, relations: form.

### `FormResponse`

Eloquent model - 4 fillable fields, relations: form.

## Controllers

### `FormController`

HTTP controller - actions: index, create, store, update, destroy, edit, responses, destroyResponse, updateFields, destroyField, updateConversion, getConversionData, conversion.

### `PublicFormController`

HTTP controller - actions: show, submit.

## Events

### `CreateForm`

Domain event.

### `DestroyForm`

Domain event.

### `FormConverted`

Domain event.

### `UpdateForm`

Domain event.

### `ViewForm`

Domain event.

## Listeners

### `GiveRoleToPermission`

Event listener.

## Requests

### `FormFieldRequest`

Form request - validation rules for FormField.

### `StoreFormConversionRequest`

Form request - validation rules for StoreFormConversion.

### `StoreFormRequest`

Form request - validation rules for StoreForm.

### `UpdateFormRequest`

Form request - validation rules for UpdateForm.

## Providers

### `EventServiceProvider`

Service provider.

### `FormBuilderServiceProvider`

Service provider.

## Seeders

### `FormBuilderDatabaseSeeder`

Database seeder.

### `FormDataSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

