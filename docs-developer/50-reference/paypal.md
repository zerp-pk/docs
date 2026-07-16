---
title: zerp/paypal
sidebar_position: 16
---

# `zerp/paypal`

PayPal payment gateway integration module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 12

## Controllers

### `PaypalController`

HTTP controller - actions: planPayWithPaypal, planGetPaypalStatus, bookingPayWithPaypal, bookingGetPaypalStatus, beautySpaPayWithPaypal, beautySpaGetPaypalStatus, lmsPayWithPaypal, lmsGetPaypalStatus, parkingPayWithPaypal, parkingGetPaypalStatus, laundryPayWithPaypal, laundryGetPaypalStatus, eventsPayWithPaypal, eventsGetPaypalStatus.

### `PaypalSettingsController`

HTTP controller - actions: update.

## Events

### `BeautyBookingPaymentPaypal`

Domain event.

### `LaundryBookingPaymentPaypal`

Domain event.

### `ParkingBookingPaymentPaypal`

Domain event.

### `PaypalPaymentStatus`

Domain event.

## Requests

### `UpdatePaypalSettingsRequest`

Form request - validation rules for UpdatePaypalSettings.

## Providers

### `EventServiceProvider`

Service provider.

### `PaypalServiceProvider`

Service provider.

## Seeders

### `MarketplaceSettingSeeder`

Database seeder.

### `PaypalDatabaseSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

