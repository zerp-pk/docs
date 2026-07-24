---
title: zerp/restaurant
sidebar_position: 23
---

# `zerp/restaurant`

Restaurant management module for Zerp - menu, orders and kitchen

**Module version:** 1

**Classes documented:** 56

## Models

### `Area`

Eloquent model - 5 fillable fields, relations: tables.

### `KitchenStation`

Eloquent model - 5 fillable fields.

### `MenuCategory`

Eloquent model - 7 fillable fields, relations: items.

### `MenuItem`

Eloquent model - 11 fillable fields, relations: category, station, variations, recipe, modifierGroups.

### `MenuItemVariation`

Eloquent model - 4 fillable fields, relations: item.

### `ModifierGroup`

Eloquent model - 7 fillable fields, relations: options.

### `ModifierOption`

Eloquent model - 4 fillable fields, relations: group.

### `Order`

Eloquent model - 17 fillable fields, relations: items, table.

### `OrderItem`

Eloquent model - 9 fillable fields, relations: order, menuItem, modifiers.

### `OrderItemModifier`

Eloquent model - 4 fillable fields, relations: orderItem.

### `Recipe`

Eloquent model - 4 fillable fields, relations: menuItem.

### `Reservation`

Eloquent model - 9 fillable fields, relations: table.

### `RestaurantTable`

Eloquent model - 12 fillable fields, relations: area, waiter, mergedInto, mergedTables.

## Controllers

### `AreaController`

HTTP controller - actions: store, update, destroy.

### `FloorController`

HTTP controller - actions: index.

### `KitchenController`

HTTP controller - actions: index, itemStatus, orderReady.

### `KitchenStationController`

HTTP controller - actions: index, store, update, destroy.

### `MenuCategoryController`

HTTP controller - actions: store, update, destroy.

### `MenuController`

HTTP controller - actions: index.

### `MenuItemController`

HTTP controller - actions: store, update, destroy, syncRecipe, toggleAvailability.

### `ModifierGroupController`

HTTP controller - actions: index, store, update, destroy.

### `OrderController`

HTTP controller - actions: pos, index, store, update, settle, cancel.

### `ReservationController`

HTTP controller - actions: index, store, update, destroy, seat, cancel, noShow.

### `RestaurantTableController`

HTTP controller - actions: store, update, destroy, setStatus, assignWaiter, position, merge, split.

## API Controllers

### `DashboardApiController`

HTTP controller - actions: index.

### `KitchenTicketApiController`

HTTP controller - actions: index, updateStatus.

### `MenuItemApiController`

HTTP controller - actions: index, store, show, update, destroy.

### `OrderApiController`

HTTP controller - actions: index, store, show, update, destroy.

### `RestaurantTableApiController`

HTTP controller - actions: index, store, show, update, destroy.

## Requests

### `SettleOrderRequest`

Form request - validation rules for SettleOrder.

### `StoreAreaRequest`

Form request - validation rules for StoreArea.

### `StoreKitchenStationRequest`

Form request - validation rules for StoreKitchenStation.

### `StoreMenuCategoryRequest`

Form request - validation rules for StoreMenuCategory.

### `StoreMenuItemRequest`

Form request - validation rules for StoreMenuItem.

### `StoreModifierGroupRequest`

Form request - validation rules for StoreModifierGroup.

### `StoreOrderRequest`

Form request - validation rules for StoreOrder.

### `StoreReservationRequest`

Form request - validation rules for StoreReservation.

### `StoreTableRequest`

Form request - validation rules for StoreTable.

### `UpdateAreaRequest`

Form request - validation rules for UpdateArea.

### `UpdateKitchenStationRequest`

Form request - validation rules for UpdateKitchenStation.

### `UpdateMenuCategoryRequest`

Form request - validation rules for UpdateMenuCategory.

### `UpdateMenuItemRequest`

Form request - validation rules for UpdateMenuItem.

### `UpdateModifierGroupRequest`

Form request - validation rules for UpdateModifierGroup.

### `UpdateOrderRequest`

Form request - validation rules for UpdateOrder.

### `UpdateReservationRequest`

Form request - validation rules for UpdateReservation.

### `UpdateTableRequest`

Form request - validation rules for UpdateTable.

## Providers

### `EventServiceProvider`

Service provider.

### `RestaurantServiceProvider`

Service provider.

## Support

### `OrderBuilder`

Support class - methods: none.

### `RevenuePoster`

Support class - methods: none.

### `StockDeductor`

Support class - methods: none.

## Seeders

### `DemoFloorSeeder`

Database seeder.

### `DemoKitchenSeeder`

Database seeder.

### `DemoMenuSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `RestaurantDatabaseSeeder`

Database seeder.

