---
title: zerp/real-estate
sidebar_position: 21
---

# `zerp/real-estate`

Real Estate Brokerage module for Zerp — property/listing management and viewings

**Module version:** 1

**Classes documented:** 22

## Models

### `Amenity`

Eloquent model — 2 fillable fields, relations: properties.

### `Property`

Eloquent model — 24 fillable fields, relations: type, agent, amenities, images, viewings.

### `PropertyImage`

Eloquent model — 5 fillable fields, relations: property, media.

### `PropertyType`

Eloquent model — 3 fillable fields, relations: properties.

### `PropertyViewing`

Eloquent model — 8 fillable fields, relations: property, agent.

## Controllers

### `AmenityController`

HTTP controller — actions: index, store, update, destroy.

### `DashboardController`

HTTP controller — actions: index.

### `PropertyController`

HTTP controller — actions: index, create, store, show, edit, update, destroy.

### `PropertyTypeController`

HTTP controller — actions: index, store, update, destroy.

### `PropertyViewingController`

HTTP controller — actions: index, store, update, destroy.

## Requests

### `StorePropertyRequest`

Form request — validation rules for StoreProperty.

### `StorePropertyViewingRequest`

Form request — validation rules for StorePropertyViewing.

### `UpdatePropertyRequest`

Form request — validation rules for UpdateProperty.

## Providers

### `EventServiceProvider`

Service provider.

### `RealEstateServiceProvider`

Service provider.

## Seeders

### `DemoAmenitySeeder`

Database seeder.

### `DemoPropertySeeder`

Database seeder.

### `DemoPropertyTypeSeeder`

Database seeder.

### `DemoPropertyViewingSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `RealEstateDatabaseSeeder`

Database seeder.

