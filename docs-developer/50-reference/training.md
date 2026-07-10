---
title: zerp/training
sidebar_position: 30
---

# `zerp/training`

Employee training management module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 42

## Models

### `Trainer`

Eloquent model — 10 fillable fields, relations: branch, department.

### `Training`

Eloquent model — 16 fillable fields, relations: trainingType, trainer, branch, department, tasks.

### `TrainingFeedback`

Eloquent model — 6 fillable fields, relations: trainingTask, user.

### `TrainingTask`

Eloquent model — 8 fillable fields, relations: training, assignedUser, feedbacks.

### `TrainingType`

Eloquent model — 6 fillable fields, relations: branch, department.

## Controllers

### `TrainerController`

HTTP controller — actions: index, store, update, destroy.

### `TrainingController`

HTTP controller — actions: index, store, update, destroy.

### `TrainingFeedbackController`

HTTP controller — actions: index, store.

### `TrainingTaskController`

HTTP controller — actions: index, store, update, complete, destroy.

### `TrainingTypeController`

HTTP controller — actions: index, store, update, destroy.

## Events

### `CreateTrainer`

Domain event.

### `CreateTraining`

Domain event.

### `CreateTrainingFeedback`

Domain event.

### `CreateTrainingTask`

Domain event.

### `CreateTrainingType`

Domain event.

### `DestroyTrainer`

Domain event.

### `DestroyTraining`

Domain event.

### `DestroyTrainingTask`

Domain event.

### `DestroyTrainingType`

Domain event.

### `UpdateTrainer`

Domain event.

### `UpdateTraining`

Domain event.

### `UpdateTrainingTask`

Domain event.

### `UpdateTrainingType`

Domain event.

## Requests

### `StoreTrainerRequest`

Form request — validation rules for StoreTrainer.

### `StoreTrainingFeedbackRequest`

Form request — validation rules for StoreTrainingFeedback.

### `StoreTrainingRequest`

Form request — validation rules for StoreTraining.

### `StoreTrainingTaskRequest`

Form request — validation rules for StoreTrainingTask.

### `StoreTrainingTypeRequest`

Form request — validation rules for StoreTrainingType.

### `UpdateTrainerRequest`

Form request — validation rules for UpdateTrainer.

### `UpdateTrainingRequest`

Form request — validation rules for UpdateTraining.

### `UpdateTrainingTaskRequest`

Form request — validation rules for UpdateTrainingTask.

### `UpdateTrainingTypeRequest`

Form request — validation rules for UpdateTrainingType.

## Providers

### `EventServiceProvider`

Service provider.

### `TrainingServiceProvider`

Service provider.

## Seeders

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `TrainerDemoSeeder`

Database seeder.

### `TrainingDatabaseSeeder`

Database seeder.

### `TrainingDemoSeeder`

Database seeder.

### `TrainingFeedbackDemoSeeder`

Database seeder.

### `TrainingTaskDemoSeeder`

Database seeder.

### `TrainingTypeDemoSeeder`

Database seeder.

