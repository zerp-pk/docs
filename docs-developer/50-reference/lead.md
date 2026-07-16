---
title: zerp/lead
sidebar_position: 14
---

# `zerp/lead`

CRM and lead management module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 162

## Models

### `ClientDeal`

Eloquent model - 2 fillable fields, relations: deal, client.

### `ClientPermission`

Eloquent model - 3 fillable fields, relations: client, deal.

### `Deal`

Eloquent model - 16 fillable fields, relations: pipeline, stage, lostReason, creator, userDeals, users, tasks, emails, discussions, calls, activities, complete_tasks, clientDeals, files.

### `DealActivityLog`

Eloquent model - 4 fillable fields, relations: user, deal.

### `DealCall`

Eloquent model - 7 fillable fields, relations: deal, user, assignee.

### `DealDiscussion`

Eloquent model - 4 fillable fields, relations: deal, creator.

### `DealEmail`

Eloquent model - 4 fillable fields, relations: deal.

### `DealFile`

Eloquent model - 4 fillable fields, relations: deal, media.

### `DealStage`

Eloquent model - 6 fillable fields, relations: pipeline.

### `DealTask`

Eloquent model - 9 fillable fields, relations: deal.

### `Label`

Eloquent model - 5 fillable fields, relations: pipeline.

### `Lead`

Eloquent model - 20 fillable fields, relations: stage, user, userLeads, tasks, complete_tasks, emails, discussions, files, calls, activities, pipeline, sources, products.

### `LeadActivityLog`

Eloquent model - 4 fillable fields, relations: user, lead.

### `LeadCall`

Eloquent model - 7 fillable fields, relations: lead, user, assignee.

### `LeadDiscussion`

Eloquent model - 4 fillable fields, relations: lead, creator.

### `LeadEmail`

Eloquent model - 4 fillable fields, relations: lead.

### `LeadFile`

Eloquent model - 4 fillable fields, relations: lead, media.

### `LeadScoreRule`

Eloquent model - 8 fillable fields.

### `LeadStage`

Eloquent model - 6 fillable fields, relations: pipeline.

### `LeadTask`

Eloquent model - 9 fillable fields, relations: lead.

### `LeadUtility`

Eloquent model - 0 fillable fields.

### `LostReason`

Eloquent model - 3 fillable fields.

### `Pipeline`

Eloquent model - 3 fillable fields.

### `Source`

Eloquent model - 3 fillable fields.

### `User`

Eloquent model - 0 fillable fields, relations: deals, leads, clientDeals, clientEstimations, clientContracts.

### `UserDeal`

Eloquent model - 2 fillable fields, relations: user, deal.

### `UserLead`

Eloquent model - 2 fillable fields, relations: user, lead.

## Controllers

### `ActivityController`

HTTP controller - actions: index.

### `DashboardController`

HTTP controller - actions: index.

### `DealController`

HTTP controller - actions: index, store, show, update, destroy, updateLabels, assignUsers, removeUser, assignProducts, removeProduct, assignSources, removeSource, storeEmail, storeDiscussion, assignClients, removeClient, callStore, callUpdate, callDestroy, storeFile, deleteFile, order, changeStatus, markWon, markLost.

### `DealStageController`

HTTP controller - actions: index, store, update, destroy, updateOrder.

### `DealTaskController`

HTTP controller - actions: index, store, update, destroy.

### `LabelController`

HTTP controller - actions: index, store, update, destroy.

### `LeadController`

HTTP controller - actions: index, store, show, edit, update, destroy, getStagesByPipeline, updateLabels, getAvailableUsers, assignUsers, removeUser, getAvailableProducts, assignProducts, removeProduct, getAvailableSources, assignSources, removeSource, storeEmail, storeDiscussion, storeFile, deleteFile, callStore, callUpdate, callDestroy, order, getExistingClients, convertToDeal.

### `LeadScoreRuleController`

HTTP controller - actions: index, store, update, destroy.

### `LeadStageController`

HTTP controller - actions: index, store, update, destroy, updateOrder.

### `LeadTaskController`

HTTP controller - actions: index, store, update, destroy.

### `LostReasonController`

HTTP controller - actions: index, store, update, destroy.

### `PipelineController`

HTTP controller - actions: index, store, update, destroy.

### `ReportController`

HTTP controller - actions: index, leadReports, dealReports.

### `SourceController`

HTTP controller - actions: index, store, update, destroy.

## API Controllers

### `DashboardApiController`

HTTP controller - actions: index, chartData.

### `LeadApiController`

HTTP controller - actions: index, leadCreateAndUpdate, createLead, updateLead, leadStageUpdate, leadDetails, destroy, getUsers, getRequestData.

### `LeadStageApiController`

HTTP controller - actions: index, leadstageCreateAndUpdate, createLeadstage, updateLeadstage.

### `PipelineApiController`

HTTP controller - actions: index, pipelineCreateAndUpdate.

## Events

### `CreateDeal`

Domain event.

### `CreateDealStage`

Domain event.

### `CreateDealTask`

Domain event.

### `CreateLabel`

Domain event.

### `CreateLead`

Domain event.

### `CreateLeadStage`

Domain event.

### `CreateLeadTask`

Domain event.

### `CreatePipeline`

Domain event.

### `CreateSource`

Domain event.

### `DealAddCall`

Domain event.

### `DealAddClient`

Domain event.

### `DealAddDiscussion`

Domain event.

### `DealAddEmail`

Domain event.

### `DealAddProduct`

Domain event.

### `DealAddUser`

Domain event.

### `DealCallUpdate`

Domain event.

### `DealMoved`

Domain event.

### `DealSourceUpdate`

Domain event.

### `DealUploadFile`

Domain event.

### `DestroyDeal`

Domain event.

### `DestroyDealCall`

Domain event.

### `DestroyDealClient`

Domain event.

### `DestroyDealFile`

Domain event.

### `DestroyDealProduct`

Domain event.

### `DestroyDealSource`

Domain event.

### `DestroyDealStage`

Domain event.

### `DestroyDealTask`

Domain event.

### `DestroyLabel`

Domain event.

### `DestroyLead`

Domain event.

### `DestroyLeadCall`

Domain event.

### `DestroyLeadFile`

Domain event.

### `DestroyLeadProduct`

Domain event.

### `DestroyLeadSource`

Domain event.

### `DestroyLeadStage`

Domain event.

### `DestroyLeadTask`

Domain event.

### `DestroyPipeline`

Domain event.

### `DestroySource`

Domain event.

### `DestroyUserDeal`

Domain event.

### `DestroyUserLead`

Domain event.

### `LeadAddCall`

Domain event.

### `LeadAddDiscussion`

Domain event.

### `LeadAddEmail`

Domain event.

### `LeadAddProduct`

Domain event.

### `LeadAddUser`

Domain event.

### `LeadCallUpdate`

Domain event.

### `LeadConvertDeal`

Domain event.

### `LeadMoved`

Domain event.

### `LeadSourceUpdate`

Domain event.

### `LeadUploadFile`

Domain event.

### `StatusChangeDealTask`

Domain event.

### `UpdateDeal`

Domain event.

### `UpdateDealStage`

Domain event.

### `UpdateDealTask`

Domain event.

### `UpdateLabel`

Domain event.

### `UpdateLead`

Domain event.

### `UpdateLeadStage`

Domain event.

### `UpdateLeadTask`

Domain event.

### `UpdatePipeline`

Domain event.

### `UpdateSource`

Domain event.

## Listeners

### `DataDefault`

Event listener.

### `GiveRoleToPermission`

Event listener.

## Requests

### `AssignUsersRequest`

Form request - validation rules for AssignUsers.

### `ConvertToDealRequest`

Form request - validation rules for ConvertToDeal.

### `StoreDealCallRequest`

Form request - validation rules for StoreDealCall.

### `StoreDealDiscussionRequest`

Form request - validation rules for StoreDealDiscussion.

### `StoreDealEmailRequest`

Form request - validation rules for StoreDealEmail.

### `StoreDealRequest`

Form request - validation rules for StoreDeal.

### `StoreDealStageRequest`

Form request - validation rules for StoreDealStage.

### `StoreDealTaskRequest`

Form request - validation rules for StoreDealTask.

### `StoreLabelRequest`

Form request - validation rules for StoreLabel.

### `StoreLeadCallRequest`

Form request - validation rules for StoreLeadCall.

### `StoreLeadDiscussionRequest`

Form request - validation rules for StoreLeadDiscussion.

### `StoreLeadEmailRequest`

Form request - validation rules for StoreLeadEmail.

### `StoreLeadRequest`

Form request - validation rules for StoreLead.

### `StoreLeadStageRequest`

Form request - validation rules for StoreLeadStage.

### `StoreLeadTaskRequest`

Form request - validation rules for StoreLeadTask.

### `StorePipelineRequest`

Form request - validation rules for StorePipeline.

### `StoreSourceRequest`

Form request - validation rules for StoreSource.

### `UpdateDealCallRequest`

Form request - validation rules for UpdateDealCall.

### `UpdateDealRequest`

Form request - validation rules for UpdateDeal.

### `UpdateDealStageRequest`

Form request - validation rules for UpdateDealStage.

### `UpdateDealTaskRequest`

Form request - validation rules for UpdateDealTask.

### `UpdateLabelRequest`

Form request - validation rules for UpdateLabel.

### `UpdateLeadCallRequest`

Form request - validation rules for UpdateLeadCall.

### `UpdateLeadRequest`

Form request - validation rules for UpdateLead.

### `UpdateLeadStageRequest`

Form request - validation rules for UpdateLeadStage.

### `UpdateLeadTaskRequest`

Form request - validation rules for UpdateLeadTask.

### `UpdatePipelineRequest`

Form request - validation rules for UpdatePipeline.

### `UpdateSourceRequest`

Form request - validation rules for UpdateSource.

## Providers

### `EventServiceProvider`

Service provider.

### `LeadServiceProvider`

Service provider.

## Support

### `Activities`

Support class - methods: none.

### `LeadScoring`

Support class - methods: none.

## Seeders

### `DemoCallActivitySeeder`

Database seeder.

### `DemoClientDealSeeder`

Database seeder.

### `DemoDealCallSeeder`

Database seeder.

### `DemoDealEmailDiscussionSeeder`

Database seeder.

### `DemoDealProductSourceSeeder`

Database seeder.

### `DemoDealSeeder`

Database seeder.

### `DemoDealStageSeeder`

Database seeder.

### `DemoDealTaskSeeder`

Database seeder.

### `DemoLabelSeeder`

Database seeder.

### `DemoLeadCallSeeder`

Database seeder.

### `DemoLeadEmailDiscussionSeeder`

Database seeder.

### `DemoLeadProductSourceSeeder`

Database seeder.

### `DemoLeadSeeder`

Database seeder.

### `DemoLeadStageSeeder`

Database seeder.

### `DemoLeadTaskSeeder`

Database seeder.

### `DemoPipelineSeeder`

Database seeder.

### `DemoSourceSeeder`

Database seeder.

### `DemoUserDealSeeder`

Database seeder.

### `DemoUserLeadSeeder`

Database seeder.

### `EmailTemplatesSeeder`

Database seeder.

### `LeadDatabaseSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `NotificationsTableSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

