---
title: zerp/stripe
sidebar_position: 25
---

# `zerp/stripe`

Stripe payment gateway integration module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 12

## Controllers

### `StripeController`

HTTP controller — actions: planPayWithStripe, planGetStripeStatus, bookingPayWithStripe, bookingGetStripeStatus, beautySpaPayWithStripe, beautySpaGetStripeStatus, lmsPayWithStripe, lmsGetStripeStatus, laundryPayWithStripe, laundryGetStripeStatus, parkingPayWithStripe, parkingGetStripeStatus, eventsPayWithStripe, eventsGetStripeStatus.

### `StripeSettingsController`

HTTP controller — actions: update.

## Events

### `BeautyBookingPaymentStripe`

Domain event.

### `LaundryBookingPaymentStripe`

Domain event.

### `ParkingBookingPaymentStripe`

Domain event.

### `StripePaymentStatus`

Domain event.

## Requests

### `UpdateStripeSettingsRequest`

Form request — validation rules for UpdateStripeSettings.

## Providers

### `EventServiceProvider`

Service provider.

### `StripeServiceProvider`

Service provider.

## Seeders

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `StripeDatabaseSeeder`

Database seeder.

