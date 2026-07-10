---
title: zerp/pos
sidebar_position: 18
---

# `zerp/pos`

Point of Sale module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 14

## Models

### `Pos`

Eloquent model — 7 fillable fields, relations: customer, warehouse, items, payment.

### `PosItem`

Eloquent model — 10 fillable fields, relations: sale, product.

### `PosPayment`

Eloquent model — 6 fillable fields, relations: sale.

## Controllers

### `DashboardController`

HTTP controller — actions: index.

### `PosController`

HTTP controller — actions: index, create, getProducts, store, show, barcode, printBarcode, print, getNextPosNumber.

### `PosReportController`

HTTP controller — actions: sales, products, customers.

## Events

### `CreatePos`

Domain event.

## Requests

### `StorePosRequest`

Form request — validation rules for StorePos.

## Providers

### `EventServiceProvider`

Service provider.

### `PosServiceProvider`

Service provider.

## Seeders

### `DemoPosSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `PosDatabaseSeeder`

Database seeder.

