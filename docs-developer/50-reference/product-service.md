---
title: zerp/product-service
sidebar_position: 19
---

# `zerp/product-service`

Product and service catalog module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 37

## Models

### `ProductServiceCategory`

Eloquent model — 4 fillable fields.

### `ProductServiceItem`

Eloquent model — 14 fillable fields, relations: category, unitRelation, warehouseStocks.

### `ProductServiceTax`

Eloquent model — 4 fillable fields.

### `ProductServiceUnit`

Eloquent model — 3 fillable fields.

### `WarehouseStock`

Eloquent model — 3 fillable fields, relations: product, warehouse.

## Controllers

### `CategoryController`

HTTP controller — actions: index, store, update, destroy.

### `ProductServiceItemController`

HTTP controller — actions: index, create, store, show, edit, update, destroy, stockIndex, apiIndex, stockStore.

### `TaxController`

HTTP controller — actions: index, store, update, destroy.

### `UnitController`

HTTP controller — actions: index, store, update, destroy.

## Events

### `CreateProductServiceCategory`

Domain event.

### `CreateProductServiceItem`

Domain event.

### `CreateProductServiceTax`

Domain event.

### `CreateProductServiceUnit`

Domain event.

### `DestroyProductServiceCategory`

Domain event.

### `DestroyProductServiceItem`

Domain event.

### `DestroyProductServiceTax`

Domain event.

### `DestroyProductServiceUnit`

Domain event.

### `UpdateProductServiceCategory`

Domain event.

### `UpdateProductServiceItem`

Domain event.

### `UpdateProductServiceTax`

Domain event.

### `UpdateProductServiceUnit`

Domain event.

## Listeners

### `ApprovePurchaseReturnListener`

Event listener.

### `CompleteSalesReturnListener`

Event listener.

### `PosCreateListener`

Event listener.

### `PostPurchaseInvoiceListener`

Event listener.

### `PostPurchaseInvoiceListener`

Event listener.

### `PostSalesInvoiceListener`

Event listener.

## Requests

### `StoreProductServiceItemRequest`

Form request — validation rules for StoreProductServiceItem.

### `UpdateProductServiceItemRequest`

Form request — validation rules for UpdateProductServiceItem.

## Providers

### `EventServiceProvider`

Service provider.

### `ProductServiceServiceProvider`

Service provider.

## Seeders

### `DemoCategorySeeder`

Database seeder.

### `DemoProductServiceItemSeeder`

Database seeder.

### `DemoTaxSeeder`

Database seeder.

### `DemoUnitSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `ProductServiceDatabaseSeeder`

Database seeder.

