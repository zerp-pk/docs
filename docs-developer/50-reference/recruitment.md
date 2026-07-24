---
title: zerp/recruitment
sidebar_position: 22
---

# `zerp/recruitment`

Recruitment and hiring module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 153

## Models

### `Candidate`

Eloquent model - 34 fillable fields, relations: job_posting, candidate_source, profileMedia, resumeMedia, coverLetterMedia, interviews, candidateAssessments.

### `CandidateAssessment`

Eloquent model - 10 fillable fields, relations: candidate, conductedBy.

### `CandidateOnboarding`

Eloquent model - 7 fillable fields, relations: candidate, checklist, buddy.

### `CandidateSources`

Eloquent model - 5 fillable fields.

### `ChecklistItem`

Eloquent model - 11 fillable fields, relations: checklist.

### `CustomQuestion`

Eloquent model - 8 fillable fields.

### `Interview`

Eloquent model - 15 fillable fields, relations: candidate, jobPosting, interviewRound, interviewType, interviewFeedbacks.

### `InterviewFeedback`

Eloquent model - 12 fillable fields, relations: interview, interviewer.

### `InterviewRound`

Eloquent model - 7 fillable fields, relations: job_posting.

### `InterviewType`

Eloquent model - 5 fillable fields.

### `Job`

Eloquent model - 6 fillable fields.

### `JobLocation`

Eloquent model - 10 fillable fields.

### `JobPosting`

Eloquent model - 30 fillable fields, relations: jobType, location, department.

### `JobType`

Eloquent model - 5 fillable fields.

### `Offer`

Eloquent model - 21 fillable fields, relations: candidate, job, approvedBy, department.

### `OfferLetter`

Eloquent model - 4 fillable fields.

### `OnboardingChecklist`

Eloquent model - 6 fillable fields, relations: checklistItems.

### `RecruitmentSetting`

Eloquent model - 3 fillable fields.

## Controllers

### `CandidateAssessmentController`

HTTP controller - actions: index, create, store, edit, update, destroy.

### `CandidateController`

HTTP controller - actions: index, create, edit, store, update, destroy, show, getSourcesByJobPosting, getCustomQuestionsByJobPosting, getCandidateJobLocation, updateStatus.

### `CandidateOnboardingController`

HTTP controller - actions: index, create, store, edit, update, destroy, getChecklistsByCandidate.

### `CandidateSourcesController`

HTTP controller - actions: index, store, update, destroy.

### `ChecklistItemController`

HTTP controller - actions: index, store, update, destroy.

### `CustomQuestionController`

HTTP controller - actions: index, store, update, destroy.

### `DashboardController`

HTTP controller - actions: index.

### `FrontendController`

HTTP controller - actions: jobListings, jobDetails, jobApply, applicationSuccess, trackingForm, trackingVerify, trackingDetails, jobTerms, offerResponse, submitApplication.

### `InterviewController`

HTTP controller - actions: index, create, store, edit, update, destroy, getInterviewRoundsByCandidate.

### `InterviewFeedbackController`

HTTP controller - actions: index, store, update, destroy.

### `InterviewRoundController`

HTTP controller - actions: index, store, update, destroy.

### `InterviewTypeController`

HTTP controller - actions: index, store, update, destroy.

### `JobLocationController`

HTTP controller - actions: index, store, update, destroy.

### `JobPostingController`

HTTP controller - actions: index, create, edit, store, update, destroy, togglePublish, show, getJobPostingSettings.

### `JobTypeController`

HTTP controller - actions: index, store, update, destroy.

### `OfferController`

HTTP controller - actions: index, create, edit, store, update, updateApprovalStatus, destroy, downloadOfferLetter, sendEmail, showConvertToEmployeeForm, convertToEmployee, getJobsByCandidate.

### `OnboardingChecklistController`

HTTP controller - actions: index, store, update, destroy.

### `RecruitmentSettingController`

HTTP controller - actions: index, update, aboutCompany, updateAboutCompany, applicationTips, updateApplicationTips, whatHappensNext, updateWhatHappensNext, needHelp, updateNeedHelp, trackingFaq, updateTrackingFaq, offerLetterTemplate, updateOfferLetterTemplate, getPlaceholders, dashboardWelcomeCard, updateDashboardWelcomeCard.

## API Controllers

### `CandidateApiController`

HTTP controller - actions: index, store, show, update, destroy.

### `DashboardApiController`

HTTP controller - actions: index.

### `InterviewApiController`

HTTP controller - actions: index, store, show, update, destroy.

### `JobPostingApiController`

HTTP controller - actions: index, store, show, update, destroy.

## Events

### `ConvertOfferToEmployee`

Domain event.

### `CreateCandidate`

Domain event.

### `CreateCandidateAssessment`

Domain event.

### `CreateCandidateOnboarding`

Domain event.

### `CreateCandidateSources`

Domain event.

### `CreateChecklistItem`

Domain event.

### `CreateCustomQuestion`

Domain event.

### `CreateInterview`

Domain event.

### `CreateInterviewFeedback`

Domain event.

### `CreateInterviewRound`

Domain event.

### `CreateInterviewType`

Domain event.

### `CreateJobLocation`

Domain event.

### `CreateJobPosting`

Domain event.

### `CreateJobType`

Domain event.

### `CreateOffer`

Domain event.

### `CreateOnboardingChecklist`

Domain event.

### `DestroyCandidate`

Domain event.

### `DestroyCandidateAssessment`

Domain event.

### `DestroyCandidateOnboarding`

Domain event.

### `DestroyCandidateSources`

Domain event.

### `DestroyChecklistItem`

Domain event.

### `DestroyCustomQuestion`

Domain event.

### `DestroyInterview`

Domain event.

### `DestroyInterviewFeedback`

Domain event.

### `DestroyInterviewRound`

Domain event.

### `DestroyInterviewType`

Domain event.

### `DestroyJobLocation`

Domain event.

### `DestroyJobPosting`

Domain event.

### `DestroyJobType`

Domain event.

### `DestroyOffer`

Domain event.

### `DestroyOnboardingChecklist`

Domain event.

### `SubmitApplication`

Domain event.

### `UpdateAboutCompany`

Domain event.

### `UpdateApplicationTips`

Domain event.

### `UpdateBrandSetting`

Domain event.

### `UpdateCandidate`

Domain event.

### `UpdateCandidateAssessment`

Domain event.

### `UpdateCandidateOnboarding`

Domain event.

### `UpdateCandidateSources`

Domain event.

### `UpdateChecklistItem`

Domain event.

### `UpdateCustomQuestion`

Domain event.

### `UpdateInterview`

Domain event.

### `UpdateInterviewFeedback`

Domain event.

### `UpdateInterviewRound`

Domain event.

### `UpdateInterviewType`

Domain event.

### `UpdateJobLocation`

Domain event.

### `UpdateJobPosting`

Domain event.

### `UpdateJobType`

Domain event.

### `UpdateNeedHelp`

Domain event.

### `UpdateOffer`

Domain event.

### `UpdateOfferApprovalStatus`

Domain event.

### `UpdateOfferLetterTemplate`

Domain event.

### `UpdateOnboardingChecklist`

Domain event.

### `UpdateTrackingFaq`

Domain event.

### `UpdateWhatHappensNext`

Domain event.

## Listeners

### `DataDefault`

Event listener.

### `GiveRoleToPermission`

Event listener.

## Requests

### `ConvertToEmployeeRequest`

Form request - validation rules for ConvertToEmployee.

### `StoreCandidateAssessmentRequest`

Form request - validation rules for StoreCandidateAssessment.

### `StoreCandidateOnboardingRequest`

Form request - validation rules for StoreCandidateOnboarding.

### `StoreCandidateRequest`

Form request - validation rules for StoreCandidate.

### `StoreCandidateSourcesRequest`

Form request - validation rules for StoreCandidateSources.

### `StoreChecklistItemRequest`

Form request - validation rules for StoreChecklistItem.

### `StoreCustomQuestionRequest`

Form request - validation rules for StoreCustomQuestion.

### `StoreDashboardWelcomeCardRequest`

Form request - validation rules for StoreDashboardWelcomeCard.

### `StoreInterviewFeedbackRequest`

Form request - validation rules for StoreInterviewFeedback.

### `StoreInterviewRequest`

Form request - validation rules for StoreInterview.

### `StoreInterviewRoundRequest`

Form request - validation rules for StoreInterviewRound.

### `StoreInterviewTypeRequest`

Form request - validation rules for StoreInterviewType.

### `StoreJobLocationRequest`

Form request - validation rules for StoreJobLocation.

### `StoreJobPostingRequest`

Form request - validation rules for StoreJobPosting.

### `StoreJobTypeRequest`

Form request - validation rules for StoreJobType.

### `StoreOfferRequest`

Form request - validation rules for StoreOffer.

### `StoreOnboardingChecklistRequest`

Form request - validation rules for StoreOnboardingChecklist.

### `SubmitApplicationRequest`

Form request - validation rules for SubmitApplication.

### `UpdateCandidateAssessmentRequest`

Form request - validation rules for UpdateCandidateAssessment.

### `UpdateCandidateOnboardingRequest`

Form request - validation rules for UpdateCandidateOnboarding.

### `UpdateCandidateRequest`

Form request - validation rules for UpdateCandidate.

### `UpdateCandidateSourcesRequest`

Form request - validation rules for UpdateCandidateSources.

### `UpdateChecklistItemRequest`

Form request - validation rules for UpdateChecklistItem.

### `UpdateCustomQuestionRequest`

Form request - validation rules for UpdateCustomQuestion.

### `UpdateInterviewFeedbackRequest`

Form request - validation rules for UpdateInterviewFeedback.

### `UpdateInterviewRequest`

Form request - validation rules for UpdateInterview.

### `UpdateInterviewRoundRequest`

Form request - validation rules for UpdateInterviewRound.

### `UpdateInterviewTypeRequest`

Form request - validation rules for UpdateInterviewType.

### `UpdateJobLocationRequest`

Form request - validation rules for UpdateJobLocation.

### `UpdateJobPostingRequest`

Form request - validation rules for UpdateJobPosting.

### `UpdateJobTypeRequest`

Form request - validation rules for UpdateJobType.

### `UpdateOfferRequest`

Form request - validation rules for UpdateOffer.

### `UpdateOnboardingChecklistRequest`

Form request - validation rules for UpdateOnboardingChecklist.

## Providers

### `EventServiceProvider`

Service provider.

### `RecruitmentServiceProvider`

Service provider.

## Seeders

### `DemoCandidateAssessmentSeeder`

Database seeder.

### `DemoCandidateOnboardingSeeder`

Database seeder.

### `DemoCandidateSeeder`

Database seeder.

### `DemoCandidateSourcesSeeder`

Database seeder.

### `DemoChecklistItemSeeder`

Database seeder.

### `DemoCustomQuestionSeeder`

Database seeder.

### `DemoInterviewFeedbackSeeder`

Database seeder.

### `DemoInterviewRoundSeeder`

Database seeder.

### `DemoInterviewSeeder`

Database seeder.

### `DemoInterviewTypeSeeder`

Database seeder.

### `DemoJobLocationSeeder`

Database seeder.

### `DemoJobPostingSeeder`

Database seeder.

### `DemoJobTypeSeeder`

Database seeder.

### `DemoOfferSeeder`

Database seeder.

### `DemoOnboardingChecklistSeeder`

Database seeder.

### `DemoRecruitmentSettingSeeder`

Database seeder.

### `EmailTemplatesSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `NotificationsTableSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

### `RecruitmentDatabaseSeeder`

Database seeder.

