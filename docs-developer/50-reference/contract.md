---
title: zerp/contract
sidebar_position: 5
---

# `zerp/contract`

Contract management module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 38

## Models

### `Contract`

Eloquent model - 13 fillable fields, relations: user, contractType, attachments, comments, notes, renewals, signatures.

### `ContractAttachment`

Eloquent model - 7 fillable fields, relations: contract, uploader, media.

### `ContractComment`

Eloquent model - 6 fillable fields, relations: contract, user.

### `ContractNote`

Eloquent model - 6 fillable fields, relations: contract, user.

### `ContractRenewal`

Eloquent model - 8 fillable fields, relations: contract, creator.

### `ContractSignature`

Eloquent model - 7 fillable fields, relations: contract, user, creator.

### `ContractType`

Eloquent model - 4 fillable fields, relations: contracts.

### `ContractUtility`

Eloquent model - 0 fillable fields.

## Controllers

### `ContractAttachmentController`

HTTP controller - actions: store, destroy.

### `ContractCommentController`

HTTP controller - actions: store, update, destroy.

### `ContractController`

HTTP controller - actions: index, store, update, updateStatus, destroy, show, preview, duplicate.

### `ContractNoteController`

HTTP controller - actions: store, update, destroy.

### `ContractRenewalController`

HTTP controller - actions: store, update, destroy.

### `ContractSettingsController`

HTTP controller - actions: store.

### `ContractSignatureController`

HTTP controller - actions: store.

### `ContractTypeController`

HTTP controller - actions: index, store, update, destroy.

## Events

### `CreateContract`

Domain event.

### `DestroyContract`

Domain event.

### `StatusChangeContract`

Domain event.

### `UpdateContract`

Domain event.

## Listeners

### `DataDefault`

Event listener.

### `GiveRoleToPermission`

Event listener.

## Requests

### `DuplicateContractRequest`

Form request - validation rules for DuplicateContract.

### `StoreContractRenewalRequest`

Form request - validation rules for StoreContractRenewal.

### `StoreContractRequest`

Form request - validation rules for StoreContract.

### `StoreContractSignatureRequest`

Form request - validation rules for StoreContractSignature.

### `StoreContractTypeRequest`

Form request - validation rules for StoreContractType.

### `UpdateContractRenewalRequest`

Form request - validation rules for UpdateContractRenewal.

### `UpdateContractRequest`

Form request - validation rules for UpdateContract.

### `UpdateContractTypeRequest`

Form request - validation rules for UpdateContractType.

## Providers

### `ContractServiceProvider`

Service provider.

### `EventServiceProvider`

Service provider.

### `RouteServiceProvider`

Service provider.

## Seeders

### `ContractDatabaseSeeder`

Database seeder.

### `DemoContractSeeder`

Database seeder.

### `DemoContractTypeSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

