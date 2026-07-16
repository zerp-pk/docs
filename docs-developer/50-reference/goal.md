---
title: zerp/goal
sidebar_position: 8
---

# `zerp/goal`

Financial goal tracking module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 46

## Models

### `Goal`

Eloquent model - 13 fillable fields, relations: category, account, milestones, contributions, tracking.

### `GoalCategory`

Eloquent model - 6 fillable fields, relations: goals.

### `GoalContribution`

Eloquent model - 9 fillable fields, relations: goal.

### `GoalMilestone`

Eloquent model - 10 fillable fields, relations: goal.

### `GoalTracking`

Eloquent model - 11 fillable fields, relations: goal.

## Controllers

### `GoalCategoryController`

HTTP controller - actions: index, store, update, destroy.

### `GoalContributionController`

HTTP controller - actions: index, store, update, destroy.

### `GoalController`

HTTP controller - actions: index, store, update, show, active, destroy.

### `GoalMilestoneController`

HTTP controller - actions: index, store, update, show, destroy.

### `GoalTrackingController`

HTTP controller - actions: index, store, update, show, destroy.

## Events

### `CreateGoal`

Domain event.

### `CreateGoalCategory`

Domain event.

### `CreateGoalContribution`

Domain event.

### `CreateGoalMilestone`

Domain event.

### `CreateGoalTracking`

Domain event.

### `DestroyGoal`

Domain event.

### `DestroyGoalCategory`

Domain event.

### `DestroyGoalContribution`

Domain event.

### `DestroyGoalMilestone`

Domain event.

### `DestroyGoalTracking`

Domain event.

### `UpdateGoal`

Domain event.

### `UpdateGoalCategory`

Domain event.

### `UpdateGoalContribution`

Domain event.

### `UpdateGoalMilestone`

Domain event.

### `UpdateGoalTracking`

Domain event.

## Listeners

### `UpdateBudgetSpendingLis`

Event listener.

## Requests

### `StoreCategoryRequest`

Form request - validation rules for StoreCategory.

### `StoreContributionRequest`

Form request - validation rules for StoreContribution.

### `StoreGoalRequest`

Form request - validation rules for StoreGoal.

### `StoreMilestoneRequest`

Form request - validation rules for StoreMilestone.

### `StoreTrackingRequest`

Form request - validation rules for StoreTracking.

### `UpdateCategoryRequest`

Form request - validation rules for UpdateCategory.

### `UpdateContributionRequest`

Form request - validation rules for UpdateContribution.

### `UpdateGoalRequest`

Form request - validation rules for UpdateGoal.

### `UpdateMilestoneRequest`

Form request - validation rules for UpdateMilestone.

### `UpdateTrackingRequest`

Form request - validation rules for UpdateTracking.

## Providers

### `EventServiceProvider`

Service provider.

### `GoalServiceProvider`

Service provider.

## Seeders

### `DemoCategorySeeder`

Database seeder.

### `DemoContributionSeeder`

Database seeder.

### `DemoGoalSeeder`

Database seeder.

### `DemoMilestoneSeeder`

Database seeder.

### `DemoTrackingSeeder`

Database seeder.

### `GoalDatabaseSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

