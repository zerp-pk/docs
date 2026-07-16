---
title: zerp/budget-planner
sidebar_position: 3
---

# `zerp/budget-planner`

Budget planning module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 39

## Models

### `Budget`

Eloquent model - 8 fillable fields, relations: budgetPeriod, approvedBy, allocations.

### `BudgetAllocation`

Eloquent model - 7 fillable fields, relations: budget, account.

### `BudgetMonitoring`

Eloquent model - 9 fillable fields, relations: budget.

### `BudgetPeriod`

Eloquent model - 8 fillable fields, relations: approvedBy, budgets.

## Controllers

### `BudgetAllocationController`

HTTP controller - actions: index, store, update, destroy.

### `BudgetController`

HTTP controller - actions: index, store, update, approve, active, close, destroy.

### `BudgetMonitoringController`

HTTP controller - actions: index.

### `BudgetPeriodController`

HTTP controller - actions: index, store, update, approve, active, close, destroy.

## Events

### `ActiveBudget`

Domain event.

### `ActiveBudgetPeriod`

Domain event.

### `ApproveBudget`

Domain event.

### `ApproveBudgetPeriod`

Domain event.

### `CloseBudget`

Domain event.

### `CloseBudgetPeriod`

Domain event.

### `CreateBudget`

Domain event.

### `CreateBudgetAllocation`

Domain event.

### `CreateBudgetPeriod`

Domain event.

### `DestroyBudget`

Domain event.

### `DestroyBudgetAllocation`

Domain event.

### `DestroyBudgetPeriod`

Domain event.

### `UpdateBudget`

Domain event.

### `UpdateBudgetAllocation`

Domain event.

### `UpdateBudgetPeriod`

Domain event.

## Listeners

### `UpdateBudgetSpendingLis`

Event listener.

## Requests

### `StoreBudgetAllocationRequest`

Form request - validation rules for StoreBudgetAllocation.

### `StoreBudgetPeriodRequest`

Form request - validation rules for StoreBudgetPeriod.

### `StoreBudgetRequest`

Form request - validation rules for StoreBudget.

### `UpdateBudgetAllocationRequest`

Form request - validation rules for UpdateBudgetAllocation.

### `UpdateBudgetPeriodRequest`

Form request - validation rules for UpdateBudgetPeriod.

### `UpdateBudgetRequest`

Form request - validation rules for UpdateBudget.

## Providers

### `BudgetPlannerServiceProvider`

Service provider.

### `EventServiceProvider`

Service provider.

## Seeders

### `BudgetPlannerDatabaseSeeder`

Database seeder.

### `DemoBudgetAllocationSeeder`

Database seeder.

### `DemoBudgetMonitoringSeeder`

Database seeder.

### `DemoBudgetPeriodSeeder`

Database seeder.

### `DemoBudgetSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

