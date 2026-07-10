---
title: zerp/google-meet
sidebar_position: 10
---

# `zerp/google-meet`

Google Meet integration module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 15

## Models

### `GoogleMeeting`

Eloquent model — 12 fillable fields, relations: host.

## Controllers

### `GoogleMeetController`

HTTP controller — actions: index, store, update, destroy, updateStatus.

### `GoogleMeetSettingsController`

HTTP controller — actions: update.

## Events

### `CreateGoogleMeeting`

Domain event.

### `DestroyGoogleMeeting`

Domain event.

### `UpdateGoogleMeeting`

Domain event.

## Listeners

### `GiveRoleToPermission`

Event listener.

## Requests

### `StoreGoogleMeetingRequest`

Form request — validation rules for StoreGoogleMeeting.

### `UpdateGoogleMeetingRequest`

Form request — validation rules for UpdateGoogleMeeting.

## Providers

### `EventServiceProvider`

Service provider.

### `GoogleMeetServiceProvider`

Service provider.

## Seeders

### `DemoGoogleMeetingSeeder`

Database seeder.

### `GoogleMeetDatabaseSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

