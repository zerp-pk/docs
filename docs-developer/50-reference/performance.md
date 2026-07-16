---
title: zerp/performance
sidebar_position: 17
---

# `zerp/performance`

Employee performance review module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 69

## Models

### `PerformanceEmployeeGoal`

Eloquent model - 11 fillable fields, relations: employee, goalType, creator, createdBy.

### `PerformanceEmployeeReview`

Eloquent model - 11 fillable fields, relations: user, reviewer, reviewCycle, creator, createdBy.

### `PerformanceGoalType`

Eloquent model - 5 fillable fields, relations: employeeGoals, creator, createdBy.

### `PerformanceIndicator`

Eloquent model - 8 fillable fields, relations: category, creator, createdBy.

### `PerformanceIndicatorCategory`

Eloquent model - 5 fillable fields, relations: indicators, creator, createdBy.

### `PerformanceReviewCycle`

Eloquent model - 6 fillable fields, relations: employeeReviews, creator, createdBy.

### `PerformanceUtility`

Eloquent model - 0 fillable fields.

## Controllers

### `EmployeeGoalController`

HTTP controller - actions: index, store, update, destroy.

### `EmployeeReviewController`

HTTP controller - actions: index, store, update, show, destroy, conduct, conductStore.

### `GoalTypeController`

HTTP controller - actions: index, store, update, destroy.

### `PerformanceIndicatorCategoryController`

HTTP controller - actions: index, store, update, destroy.

### `PerformanceIndicatorController`

HTTP controller - actions: index, store, update, destroy.

### `ReviewCycleController`

HTTP controller - actions: index, store, update, show, destroy.

## Events

### `CreateEmployeeGoal`

Domain event.

### `CreateEmployeeReview`

Domain event.

### `CreateGoalType`

Domain event.

### `CreatePerformanceIndicator`

Domain event.

### `CreatePerformanceIndicatorCategory`

Domain event.

### `CreateReviewCycle`

Domain event.

### `DestroyEmployeeGoal`

Domain event.

### `DestroyEmployeeReview`

Domain event.

### `DestroyGoalType`

Domain event.

### `DestroyPerformanceIndicator`

Domain event.

### `DestroyPerformanceIndicatorCategory`

Domain event.

### `DestroyReviewCycle`

Domain event.

### `UpdateEmployeeGoal`

Domain event.

### `UpdateEmployeeReview`

Domain event.

### `UpdateGoalType`

Domain event.

### `UpdatePerformanceIndicator`

Domain event.

### `UpdatePerformanceIndicatorCategory`

Domain event.

### `UpdateReviewCycle`

Domain event.

## Listeners

### `GiveRoleToPermission`

Event listener.

## Requests

### `StoreCompetencyCategoryRequest`

Form request - validation rules for StoreCompetencyCategory.

### `StoreCompetencyRequest`

Form request - validation rules for StoreCompetency.

### `StoreEmployeeCompetencyRequest`

Form request - validation rules for StoreEmployeeCompetency.

### `StoreEmployeeFeedbackRequest`

Form request - validation rules for StoreEmployeeFeedback.

### `StoreEmployeeGoalRequest`

Form request - validation rules for StoreEmployeeGoal.

### `StoreEmployeeReviewRequest`

Form request - validation rules for StoreEmployeeReview.

### `StoreFeedbackTypeRequest`

Form request - validation rules for StoreFeedbackType.

### `StoreGoalTypeRequest`

Form request - validation rules for StoreGoalType.

### `StorePerformanceIndicatorCategoryRequest`

Form request - validation rules for StorePerformanceIndicatorCategory.

### `StorePerformanceIndicatorRequest`

Form request - validation rules for StorePerformanceIndicator.

### `StorePerformanceItemRequest`

Form request - validation rules for StorePerformanceItem.

### `StoreReviewCycleRequest`

Form request - validation rules for StoreReviewCycle.

### `StoreReviewTemplateRequest`

Form request - validation rules for StoreReviewTemplate.

### `UpdateCompetencyCategoryRequest`

Form request - validation rules for UpdateCompetencyCategory.

### `UpdateCompetencyRequest`

Form request - validation rules for UpdateCompetency.

### `UpdateEmployeeCompetencyRequest`

Form request - validation rules for UpdateEmployeeCompetency.

### `UpdateEmployeeFeedbackRequest`

Form request - validation rules for UpdateEmployeeFeedback.

### `UpdateEmployeeGoalRequest`

Form request - validation rules for UpdateEmployeeGoal.

### `UpdateEmployeeReviewRequest`

Form request - validation rules for UpdateEmployeeReview.

### `UpdateFeedbackTypeRequest`

Form request - validation rules for UpdateFeedbackType.

### `UpdateGoalTypeRequest`

Form request - validation rules for UpdateGoalType.

### `UpdatePerformanceIndicatorCategoryRequest`

Form request - validation rules for UpdatePerformanceIndicatorCategory.

### `UpdatePerformanceIndicatorRequest`

Form request - validation rules for UpdatePerformanceIndicator.

### `UpdatePerformanceItemRequest`

Form request - validation rules for UpdatePerformanceItem.

### `UpdateReviewCycleRequest`

Form request - validation rules for UpdateReviewCycle.

### `UpdateReviewTemplateRequest`

Form request - validation rules for UpdateReviewTemplate.

## Providers

### `EventServiceProvider`

Service provider.

### `PerformanceServiceProvider`

Service provider.

## Seeders

### `DemoPerformanceEmployeeGoalSeeder`

Database seeder.

### `DemoPerformanceEmployeeReviewSeeder`

Database seeder.

### `DemoPerformanceGoalTypeSeeder`

Database seeder.

### `DemoPerformanceIndicatorCategorySeeder`

Database seeder.

### `DemoPerformanceIndicatorSeeder`

Database seeder.

### `DemoPerformanceReviewCycleSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PerformanceDatabaseSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

