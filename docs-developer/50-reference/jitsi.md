---
title: zerp/jitsi
sidebar_position: 12
---

# `zerp/jitsi`

Jitsi Meet integration module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 15

## Models

### `JitsiMeeting`

Eloquent model — 12 fillable fields, relations: host.

## Controllers

### `JitsiController`

HTTP controller — actions: index, store, update, destroy, updateStatus.

### `JitsiSettingsController`

HTTP controller — actions: update.

## Events

### `CreateJitsiMeeting`

Domain event.

### `DestroyJitsiMeeting`

Domain event.

### `UpdateJitsiMeeting`

Domain event.

## Listeners

### `GiveRoleToPermission`

Event listener.

## Requests

### `StoreJitsiMeetingRequest`

Form request — validation rules for StoreJitsiMeeting.

### `UpdateJitsiMeetingRequest`

Form request — validation rules for UpdateJitsiMeeting.

## Providers

### `EventServiceProvider`

Service provider.

### `JitsiServiceProvider`

Service provider.

## Seeders

### `DemoJitsiMeetingSeeder`

Database seeder.

### `JitsiDatabaseSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

