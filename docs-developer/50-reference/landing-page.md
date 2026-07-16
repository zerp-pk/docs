---
title: zerp/landing-page
sidebar_position: 13
---

# `zerp/landing-page`

Landing page, CMS, and marketplace module for the Zerp ERP platform

**Module version:** 1

**Classes documented:** 19

## Models

### `CustomPage`

Eloquent model - 7 fillable fields.

### `LandingPageSetting`

Eloquent model - 5 fillable fields.

### `MarketplaceSetting`

Eloquent model - 4 fillable fields.

### `NewsletterSubscriber`

Eloquent model - 16 fillable fields.

## Controllers

### `CustomPageController`

HTTP controller - actions: index, create, store, edit, update, destroy, show.

### `LandingPageController`

HTTP controller - actions: index, pricing, contact, submitContact, settings, store.

### `MarketplaceController`

HTTP controller - actions: index, settings, storeSettings.

### `NewsletterSubscriberController`

HTTP controller - actions: index, store, destroy, export.

## Events

### `CreateNewsletterSubscriber`

Domain event.

### `DestroyNewsletterSubscriber`

Domain event.

## Requests

### `StoreContactMessageRequest`

Form request - validation rules for StoreContactMessage.

### `StoreNewsletterSubscriberRequest`

Form request - validation rules for StoreNewsletterSubscriber.

## Providers

### `LandingPageServiceProvider`

Service provider.

## Seeders

### `CustomPageSeeder`

Database seeder.

### `DemoNewsletterSubscriberSeeder`

Database seeder.

### `LandingPageDatabaseSeeder`

Database seeder.

### `LandingPageSettingSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

