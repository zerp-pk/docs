---
title: zerp/taskly
sidebar_position: 27
---

# `zerp/taskly`

Project management module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 72

## Models

### `ActivityLog`

Eloquent model — 5 fillable fields, relations: user.

### `BugComment`

Eloquent model — 3 fillable fields, relations: bug, user.

### `BugStage`

Eloquent model — 6 fillable fields.

### `Project`

Eloquent model — 8 fillable fields, relations: teamMembers, clients, milestones, tasks, bugs, activityLogs, files.

### `ProjectBug`

Eloquent model — 8 fillable fields, relations: project, bugStage, assignedUser, comments.

### `ProjectClient`

Eloquent model — 2 fillable fields.

### `ProjectFile`

Eloquent model — 4 fillable fields, relations: project, media.

### `ProjectMilestone`

Eloquent model — 8 fillable fields, relations: project.

### `ProjectTask`

Eloquent model — 10 fillable fields, relations: project, milestone, taskStage, assignedUser, comments, subtasks.

### `ProjectUser`

Eloquent model — 2 fillable fields.

### `TaskComment`

Eloquent model — 3 fillable fields, relations: task, user.

### `TaskStage`

Eloquent model — 6 fillable fields.

### `TaskSubtask`

Eloquent model — 5 fillable fields, relations: task, user.

## Controllers

### `BugStageController`

HTTP controller — actions: index, store, update, destroy, reorder.

### `DashboardController`

HTTP controller — actions: index.

### `ProjectBugController`

HTTP controller — actions: index, kanban, store, show, update, destroy, move, getBugs, getComments, storeComment, destroyComment.

### `ProjectController`

HTTP controller — actions: index, store, show, edit, update, destroy, duplicate, invite, deleteMember, inviteClient, deleteClient, storeMilestone, updateMilestone, deleteMilestone, storeFiles, deleteFile, apiIndex.

### `ProjectReportController`

HTTP controller — actions: index, show.

### `ProjectTaskController`

HTTP controller — actions: index, store, kanban, calendar, move, update, getTasks, show, destroy, getComments, storeComment, destroyComment, getSubtasks, storeSubtask, toggleSubtask, apiTasks.

### `TaskStageController`

HTTP controller — actions: index, store, update, destroy, reorder.

## API Controllers

### `DashboardApiController`

HTTP controller — actions: index.

### `ProjectApiController`

HTTP controller — actions: index, projectCreateAndUpdate, getUsers, destroyProject, projectDetails, projectStatusUpdate, projectActivity, projectFileUpload.

### `TaskApiController`

HTTP controller — actions: index, taskCreateAndUpdate, taskDelete, taskDetails, taskStageUpdate, taskboard.

## Events

### `CreateBugComment`

Domain event.

### `CreateBugStage`

Domain event.

### `CreateProject`

Domain event.

### `CreateProjectBug`

Domain event.

### `CreateProjectMilestone`

Domain event.

### `CreateProjectTask`

Domain event.

### `CreateTaskComment`

Domain event.

### `CreateTaskStage`

Domain event.

### `CreateTaskSubtask`

Domain event.

### `DestroyBugComment`

Domain event.

### `DestroyBugStage`

Domain event.

### `DestroyProject`

Domain event.

### `DestroyProjectBug`

Domain event.

### `DestroyProjectMilestone`

Domain event.

### `DestroyProjectTask`

Domain event.

### `DestroyTaskComment`

Domain event.

### `DestroyTaskStage`

Domain event.

### `ProjectDeleteClient`

Domain event.

### `ProjectDeleteShareToClient`

Domain event.

### `ProjectInviteMember`

Domain event.

### `ProjectShareToClient`

Domain event.

### `UpdateBugStage`

Domain event.

### `UpdateProject`

Domain event.

### `UpdateProjectBug`

Domain event.

### `UpdateProjectBugStage`

Domain event.

### `UpdateProjectMilestone`

Domain event.

### `UpdateProjectTask`

Domain event.

### `UpdateProjectTaskStage`

Domain event.

### `UpdateTaskStage`

Domain event.

## Listeners

### `DataDefault`

Event listener.

### `GiveRoleToPermission`

Event listener.

## Requests

### `StoreMilestoneRequest`

Form request — validation rules for StoreMilestone.

### `StoreProjectBugRequest`

Form request — validation rules for StoreProjectBug.

### `StoreProjectRequest`

Form request — validation rules for StoreProject.

### `StoreProjectTaskRequest`

Form request — validation rules for StoreProjectTask.

### `UpdateMilestoneRequest`

Form request — validation rules for UpdateMilestone.

### `UpdateProjectBugRequest`

Form request — validation rules for UpdateProjectBug.

### `UpdateProjectRequest`

Form request — validation rules for UpdateProject.

### `UpdateProjectTaskRequest`

Form request — validation rules for UpdateProjectTask.

## Providers

### `EventServiceProvider`

Service provider.

### `TasklyServiceProvider`

Service provider.

## Seeders

### `DemoActivityLogSeeder`

Database seeder.

### `DemoProjectBugSeeder`

Database seeder.

### `DemoProjectMilestoneSeeder`

Database seeder.

### `DemoProjectSeeder`

Database seeder.

### `DemoProjectTaskSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `TasklyDatabaseSeeder`

Database seeder.

