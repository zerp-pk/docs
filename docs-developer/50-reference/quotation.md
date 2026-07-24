---
title: zerp/quotation
sidebar_position: 20
---

# `zerp/quotation`

Sales quotation module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 22

## Models

### `SalesQuotation`

Eloquent model - 18 fillable fields, relations: customer, items, warehouse, customerDetails, parentQuotation, revisions.

### `SalesQuotationItem`

Eloquent model - 11 fillable fields, relations: quotation, product, taxes.

### `SalesQuotationItemTax`

Eloquent model - 5 fillable fields, relations: item.

## Controllers

### `QuotationController`

HTTP controller - actions: index, create, store, show, edit, update, destroy, sent, approve, reject, print, createRevision, duplicate, convertToInvoice, getWarehouseProducts.

## API Controllers

### `DashboardApiController`

HTTP controller - actions: index.

### `QuotationApiController`

HTTP controller - actions: index, store, show, update, destroy, sent, approve, reject.

## Events

### `AcceptSalesQuotation`

Domain event.

### `ConvertSalesQuotation`

Domain event.

### `CreateQuotation`

Domain event.

### `DestroyQuotation`

Domain event.

### `RejectSalesQuotation`

Domain event.

### `SentSalesQuotation`

Domain event.

### `UpdateQuotation`

Domain event.

## Listeners

### `GiveRoleToPermission`

Event listener.

## Requests

### `StoreQuotationRequest`

Form request - validation rules for StoreQuotation.

### `UpdateQuotationRequest`

Form request - validation rules for UpdateQuotation.

## Providers

### `EventServiceProvider`

Service provider.

### `QuotationServiceProvider`

Service provider.

## Seeders

### `DemoQuotationSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `QuotationDatabaseSeeder`

Database seeder.

