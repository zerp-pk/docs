---
title: zerp/zoom-meeting
sidebar_position: 33
---

# `zerp/zoom-meeting`

Zoom meeting integration module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 15

## Models

### `ZoomMeeting`

Eloquent model — 17 fillable fields, relations: host.

## Controllers

### `ZoomMeetingController`

HTTP controller — actions: index, store, update, destroy, updateStatus.

### `ZoomMeetingSettingsController`

HTTP controller — actions: update.

## Events

### `CreateZoomMeeting`

Domain event.

### `DestroyZoomMeeting`

Domain event.

### `UpdateZoomMeeting`

Domain event.

## Listeners

### `GiveRoleToPermission`

Event listener.

## Requests

### `StoreZoomMeetingRequest`

Form request — validation rules for StoreZoomMeeting.

### `UpdateZoomMeetingRequest`

Form request — validation rules for UpdateZoomMeeting.

## Providers

### `EventServiceProvider`

Service provider.

### `ZoomMeetingServiceProvider`

Service provider.

## Seeders

### `DemoZoomMeetingSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `ZoomMeetingDatabaseSeeder`

Database seeder.

