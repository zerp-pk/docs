---
title: zerp/support-ticket
sidebar_position: 26
---

# `zerp/support-ticket`

Support ticket and helpdesk module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 104

## Models

### `Contact`

Eloquent model - 8 fillable fields.

### `Conversion`

Eloquent model - 6 fillable fields, relations: ticket.

### `Faq`

Eloquent model - 4 fillable fields.

### `KnowledgeBase`

Eloquent model - 6 fillable fields, relations: category.

### `KnowledgeBaseCategory`

Eloquent model - 3 fillable fields, relations: knowledgeBases.

### `QuickLink`

Eloquent model - 6 fillable fields.

### `SupportTicketCustomPage`

Eloquent model - 7 fillable fields.

### `SupportTicketSetting`

Eloquent model - 4 fillable fields.

### `SupporUtility`

Eloquent model - 0 fillable fields.

### `Ticket`

Eloquent model - 13 fillable fields, relations: conversions, tcategory.

### `TicketCategory`

Eloquent model - 4 fillable fields, relations: tickets.

### `TicketField`

Eloquent model - 10 fillable fields.

### `TicketFieldValue`

Eloquent model - 3 fillable fields, relations: field, ticket.

## Controllers

### `ContactController`

HTTP controller - actions: index, store, show, destroy.

### `ContactInformationController`

HTTP controller - actions: index, store.

### `ConversationController`

HTTP controller - actions: store, sendEmail, replyEmail.

### `CtaSectionController`

HTTP controller - actions: index, store.

### `CustomPageController`

HTTP controller - actions: index, store, update, destroy.

### `DashboardController`

HTTP controller - actions: index, clientDashboard, vendorDashboard, staffDashboard.

### `FaqController`

HTTP controller - actions: index, store, update, destroy, fileImportExport, fileImport, faqImportdata.

### `FrontendController`

HTTP controller - actions: index, create, store, search, searchTicket, knowledge, faq, knowledgeArticle, contact, storeContact, showByTicketId, customPage, privacyPolicy, termsConditions, storeReply, show.

### `KnowledgebaseCategoryController`

HTTP controller - actions: index, store, update, destroy.

### `KnowledgeController`

HTTP controller - actions: index, store, update, destroy, fileImportExport, fileImport, knowledgeImportdata.

### `QuickLinkController`

HTTP controller - actions: index, store, update, destroy.

### `SupportInformationController`

HTTP controller - actions: index, store.

### `SupportTicketController`

HTTP controller - actions: index, create, store, edit, update, destroy, destroyAttachment, getUserData, storeNote, storeCustomFields, storeconverison, editReply, updateReply, deleteReply, downloadAttachment, grid.

### `SupportTicketSettingController`

HTTP controller - actions: brandSettings, updateBrandSettings.

### `TicketCategoryController`

HTTP controller - actions: index, store, update, destroy, supportCategories.

### `TitleSectionController`

HTTP controller - actions: index, store.

## API Controllers

### `DashboardApiController`

HTTP controller - actions: index, clientDashboard, vendorDashboard, staffDashboard.

### `FaqApiController`

HTTP controller - actions: index, store, update, destroy.

### `KnowledgeApiController`

HTTP controller - actions: index, store, update, destroy.

### `TicketApiContollerController`

HTTP controller - actions: index, getRequestData, store, update, destroy, storeNote, addReply.

## Events

### `CreateContact`

Domain event.

### `CreateContactInformation`

Domain event.

### `CreateCtaSection`

Domain event.

### `CreateCustomPage`

Domain event.

### `CreateKnowledgeBase`

Domain event.

### `CreateKnowledgeBaseCategory`

Domain event.

### `CreatePublicTicket`

Domain event.

### `CreateQuickLink`

Domain event.

### `CreateSupportInformation`

Domain event.

### `CreateTicket`

Domain event.

### `CreateTicketConversion`

Domain event.

### `CreateTitleSection`

Domain event.

### `DestroyContact`

Domain event.

### `DestroyCustomPage`

Domain event.

### `DestroyKnowledgeBase`

Domain event.

### `DestroyKnowledgeBaseCategory`

Domain event.

### `DestroyQuickLink`

Domain event.

### `DestroyTicket`

Domain event.

### `ReplyTicket`

Domain event.

### `UpdateBrandSettings`

Domain event.

### `UpdateCustomPage`

Domain event.

### `UpdateKnowledgeBaseCategory`

Domain event.

### `UpdateQuickLink`

Domain event.

### `UpdateTicket`

Domain event.

## Listeners

### `DataDefault`

Event listener.

### `GiveRoleToPermission`

Event listener.

### `SendPublicTicketCreatedEmail`

Event listener.

### `SendTicketCreatedEmail`

Event listener.

### `SendTicketReplyEmail`

Event listener.

## Requests

### `ReplyEmailRequest`

Form request - validation rules for ReplyEmail.

### `StoreBrandSettingsRequest`

Form request - validation rules for StoreBrandSettings.

### `StoreContactInformationRequest`

Form request - validation rules for StoreContactInformation.

### `StoreContactRequest`

Form request - validation rules for StoreContact.

### `StoreConversationRequest`

Form request - validation rules for StoreConversation.

### `StoreConversionRequest`

Form request - validation rules for StoreConversion.

### `StoreCtaSectionRequest`

Form request - validation rules for StoreCtaSection.

### `StoreCustomPageRequest`

Form request - validation rules for StoreCustomPage.

### `StoreFaqRequest`

Form request - validation rules for StoreFaq.

### `StoreFrontendContactRequest`

Form request - validation rules for StoreFrontendContact.

### `StoreFrontendTicketRequest`

Form request - validation rules for StoreFrontendTicket.

### `StoreKnowledgeBaseCategoryRequest`

Form request - validation rules for StoreKnowledgeBaseCategory.

### `StoreKnowledgeBaseRequest`

Form request - validation rules for StoreKnowledgeBase.

### `StoreQuickLinkRequest`

Form request - validation rules for StoreQuickLink.

### `StoreSupportInformationRequest`

Form request - validation rules for StoreSupportInformation.

### `StoreSupportTicketItemRequest`

Form request - validation rules for StoreSupportTicketItem.

### `StoreSupportTicketRequest`

Form request - validation rules for StoreSupportTicket.

### `StoreTicketCategoryRequest`

Form request - validation rules for StoreTicketCategory.

### `StoreTicketReplyRequest`

Form request - validation rules for StoreTicketReply.

### `StoreTitleSectionRequest`

Form request - validation rules for StoreTitleSection.

### `UpdateCustomPageRequest`

Form request - validation rules for UpdateCustomPage.

### `UpdateFaqRequest`

Form request - validation rules for UpdateFaq.

### `UpdateKnowledgeBaseCategoryRequest`

Form request - validation rules for UpdateKnowledgeBaseCategory.

### `UpdateKnowledgeBaseRequest`

Form request - validation rules for UpdateKnowledgeBase.

### `UpdateQuickLinkRequest`

Form request - validation rules for UpdateQuickLink.

### `UpdateSupportTicketItemRequest`

Form request - validation rules for UpdateSupportTicketItem.

### `UpdateSupportTicketRequest`

Form request - validation rules for UpdateSupportTicket.

### `UpdateTicketCategoryRequest`

Form request - validation rules for UpdateTicketCategory.

## Providers

### `EventServiceProvider`

Service provider.

### `SupportTicketServiceProvider`

Service provider.

## Seeders

### `DefultSettingTableSeeder`

Database seeder.

### `DemoContactSeeder`

Database seeder.

### `DemoFaqSeeder`

Database seeder.

### `DemoKnowledgeBaseSeeder`

Database seeder.

### `DemoSupportTicketSettingsSeeder`

Database seeder.

### `DemoSystemSetupSeeder`

Database seeder.

### `DemoTicketSeeder`

Database seeder.

### `EmailTemplateTableSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `NotificationsTableSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `SupportTicketDatabaseSeeder`

Database seeder.

