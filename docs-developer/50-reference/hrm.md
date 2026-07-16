---
title: zerp/hrm
sidebar_position: 11
---

# `zerp/hrm`

Human Resource Management module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 329

## Models

### `Acknowledgment`

Eloquent model - 11 fillable fields, relations: employee, document, assignedBy.

### `Allowance`

Eloquent model - 6 fillable fields, relations: employee, user, allowanceType.

### `AllowanceType`

Eloquent model - 4 fillable fields.

### `Announcement`

Eloquent model - 10 fillable fields, relations: announcementCategory, departments, approvedBy.

### `AnnouncementCategory`

Eloquent model - 3 fillable fields.

### `AnnouncementDepartment`

Eloquent model - 4 fillable fields, relations: announcement, department, creator, createdBy.

### `Attendance`

Eloquent model - 13 fillable fields, relations: user, shift.

### `Award`

Eloquent model - 7 fillable fields, relations: awardType, employee.

### `AwardType`

Eloquent model - 4 fillable fields.

### `Branch`

Eloquent model - 3 fillable fields.

### `Complaint`

Eloquent model - 12 fillable fields, relations: employee, againstEmployee, complaintType, resolvedBy.

### `ComplaintType`

Eloquent model - 3 fillable fields.

### `Deduction`

Eloquent model - 6 fillable fields, relations: deductionType, employee.

### `DeductionType`

Eloquent model - 4 fillable fields.

### `Department`

Eloquent model - 4 fillable fields, relations: branch, employees, announcements.

### `Designation`

Eloquent model - 5 fillable fields, relations: branch, department.

### `DocumentCategory`

Eloquent model - 4 fillable fields.

### `Employee`

Eloquent model - 31 fillable fields, relations: user, branch, department, designation, shift.

### `EmployeeDocument`

Eloquent model - 6 fillable fields, relations: user, documentType, media.

### `EmployeeDocumentType`

Eloquent model - 5 fillable fields.

### `EmployeeTransfer`

Eloquent model - 15 fillable fields, relations: employee, from_branch, from_department, from_designation, to_branch, to_department, to_designation, approved_by.

### `Event`

Eloquent model - 12 fillable fields, relations: eventType, approvedBy, departments, creator.

### `EventType`

Eloquent model - 3 fillable fields.

### `Holiday`

Eloquent model - 10 fillable fields, relations: holidayType.

### `HolidayType`

Eloquent model - 3 fillable fields.

### `HrmDocument`

Eloquent model - 11 fillable fields, relations: documentCategory, uploadedBy, approvedBy, creator, media.

### `HrmItem`

Eloquent model - 5 fillable fields.

### `HrmModel`

Eloquent model - 0 fillable fields.

### `IpRestrict`

Eloquent model - 3 fillable fields.

### `LeaveApplication`

Eloquent model - 14 fillable fields, relations: employee, leave_type, approved_by, media.

### `LeaveType`

Eloquent model - 7 fillable fields.

### `Loan`

Eloquent model - 10 fillable fields, relations: loanType, employee.

### `LoanType`

Eloquent model - 4 fillable fields.

### `Overtime`

Eloquent model - 11 fillable fields, relations: employee.

### `Payroll`

Eloquent model - 15 fillable fields, relations: payrollEntries.

### `PayrollEntry`

Eloquent model - 31 fillable fields, relations: payroll, employee.

### `Promotion`

Eloquent model - 13 fillable fields, relations: employee, previousBranch, previousDepartment, previousDesignation, currentBranch, currentDepartment, currentDesignation, approvedBy.

### `Resignation`

Eloquent model - 9 fillable fields, relations: employee, approvedBy.

### `Shift`

Eloquent model - 11 fillable fields, relations: creator.

### `Termination`

Eloquent model - 11 fillable fields, relations: employee, terminationType, approvedBy.

### `TerminationType`

Eloquent model - 3 fillable fields.

### `Warning`

Eloquent model - 10 fillable fields, relations: employee, warningBy, warningType.

### `WarningType`

Eloquent model - 3 fillable fields.

## Controllers

### `AcknowledgmentController`

HTTP controller - actions: index, store, update, destroy, updateStatus.

### `AllowanceController`

HTTP controller - actions: store, update, destroy.

### `AllowanceTypeController`

HTTP controller - actions: index, store, update, destroy.

### `AnnouncementCategoryController`

HTTP controller - actions: index, store, update, destroy.

### `AnnouncementController`

HTTP controller - actions: index, store, update, updateStatus, destroy.

### `AttendanceController`

HTTP controller - actions: index, store, update, destroy, clockIn, clockOut, getClockStatus.

### `AwardController`

HTTP controller - actions: index, store, update, destroy.

### `AwardTypeController`

HTTP controller - actions: index, store, update, destroy.

### `BranchController`

HTTP controller - actions: index, store, update, destroy.

### `ComplaintController`

HTTP controller - actions: index, store, update, updateStatus, destroy.

### `ComplaintTypeController`

HTTP controller - actions: index, store, update, destroy.

### `DashboardController`

HTTP controller - actions: index.

### `DeductionController`

HTTP controller - actions: store, update, destroy.

### `DeductionTypeController`

HTTP controller - actions: index, store, update, destroy.

### `DepartmentController`

HTTP controller - actions: index, store, update, destroy.

### `DesignationController`

HTTP controller - actions: index, store, update, destroy.

### `DocumentCategoryController`

HTTP controller - actions: index, store, update, destroy.

### `EmployeeController`

HTTP controller - actions: index, create, store, edit, update, destroy, show, card, deleteDocument.

### `EmployeeDocumentTypeController`

HTTP controller - actions: index, store, update, destroy.

### `EmployeeTransferController`

HTTP controller - actions: index, store, update, destroy, updateStatus.

### `EventController`

HTTP controller - actions: index, store, update, destroy, statusUpdate, calendar.

### `EventTypeController`

HTTP controller - actions: index, store, update, destroy.

### `HolidayController`

HTTP controller - actions: index, store, update, destroy.

### `HolidayTypeController`

HTTP controller - actions: index, store, update, destroy.

### `HrmDocumentController`

HTTP controller - actions: index, store, update, updateStatus, destroy.

### `IpRestrictController`

HTTP controller - actions: index, store, update, destroy, toggleSetting.

### `LeaveApplicationController`

HTTP controller - actions: index, store, update, destroy, updateStatus, getLeaveBalance, getLeaveTypesByEmployee.

### `LeaveBalanceController`

HTTP controller - actions: index.

### `LeaveTypeController`

HTTP controller - actions: index, store, update, destroy.

### `LoanController`

HTTP controller - actions: store, update, destroy.

### `LoanTypeController`

HTTP controller - actions: index, store, update, destroy.

### `OvertimeController`

HTTP controller - actions: store, update, destroy.

### `PayrollController`

HTTP controller - actions: index, store, update, show, destroy, runPayroll, destroyEntry, printPayslip, paySalary.

### `PromotionController`

HTTP controller - actions: index, store, update, destroy, updateStatus.

### `ResignationController`

HTTP controller - actions: index, store, update, destroy, updateStatus.

### `SetSalaryController`

HTTP controller - actions: index, show, update.

### `ShiftController`

HTTP controller - actions: index, store, update, destroy.

### `TerminationController`

HTTP controller - actions: index, store, update, destroy, updateStatus.

### `TerminationTypeController`

HTTP controller - actions: index, store, update, destroy.

### `WarningController`

HTTP controller - actions: index, store, update, destroy, response.

### `WarningTypeController`

HTTP controller - actions: index, store, update, destroy.

### `WorkingDaysController`

HTTP controller - actions: index, update.

## API Controllers

### `AttendanceApiController`

HTTP controller - actions: clockInOut, history.

### `DashboardApiController`

HTTP controller - actions: index, getEvents.

### `HolidayApiController`

HTTP controller - actions: index.

### `LeaveApiController`

HTTP controller - actions: index, store.

### `LeaveTypeApiController`

HTTP controller - actions: index.

## Events

### `CreateAcknowledgment`

Domain event.

### `CreateAllowance`

Domain event.

### `CreateAllowanceType`

Domain event.

### `CreateAnnouncement`

Domain event.

### `CreateAnnouncementCategory`

Domain event.

### `CreateAttendance`

Domain event.

### `CreateAward`

Domain event.

### `CreateAwardType`

Domain event.

### `CreateBranch`

Domain event.

### `CreateComplaint`

Domain event.

### `CreateComplaintType`

Domain event.

### `CreateDeduction`

Domain event.

### `CreateDeductionType`

Domain event.

### `CreateDepartment`

Domain event.

### `CreateDesignation`

Domain event.

### `CreateDocument`

Domain event.

### `CreateDocumentCategory`

Domain event.

### `CreateDocumentType`

Domain event.

### `CreateEmployee`

Domain event.

### `CreateEmployeeTransfer`

Domain event.

### `CreateEvent`

Domain event.

### `CreateEventType`

Domain event.

### `CreateHoliday`

Domain event.

### `CreateHolidayType`

Domain event.

### `CreateLeaveApplication`

Domain event.

### `CreateLeaveType`

Domain event.

### `CreateLoan`

Domain event.

### `CreateLoanType`

Domain event.

### `CreateOverTime`

Domain event.

### `CreatePayroll`

Domain event.

### `CreatePromotion`

Domain event.

### `CreateResignation`

Domain event.

### `CreateShift`

Domain event.

### `CreateTermination`

Domain event.

### `CreateTerminationType`

Domain event.

### `CreateWarning`

Domain event.

### `CreateWarningType`

Domain event.

### `DestroyAcknowledgment`

Domain event.

### `DestroyAllowance`

Domain event.

### `DestroyAllowanceType`

Domain event.

### `DestroyAnnouncement`

Domain event.

### `DestroyAnnouncementCategory`

Domain event.

### `DestroyAttendance`

Domain event.

### `DestroyAward`

Domain event.

### `DestroyAwardType`

Domain event.

### `DestroyBranch`

Domain event.

### `DestroyComplaint`

Domain event.

### `DestroyComplaintType`

Domain event.

### `DestroyDeduction`

Domain event.

### `DestroyDeductionType`

Domain event.

### `DestroyDepartment`

Domain event.

### `DestroyDesignation`

Domain event.

### `DestroyDocument`

Domain event.

### `DestroyDocumentCategory`

Domain event.

### `DestroyDocumentType`

Domain event.

### `DestroyEmployee`

Domain event.

### `DestroyEmployeeTransfer`

Domain event.

### `DestroyEvent`

Domain event.

### `DestroyEventType`

Domain event.

### `DestroyHoliday`

Domain event.

### `DestroyHolidayType`

Domain event.

### `DestroyLeaveApplication`

Domain event.

### `DestroyLeaveType`

Domain event.

### `DestroyLoan`

Domain event.

### `DestroyLoanType`

Domain event.

### `DestroyOverTime`

Domain event.

### `DestroyPayroll`

Domain event.

### `DestroyPromotion`

Domain event.

### `DestroyResignation`

Domain event.

### `DestroySalarySlip`

Domain event.

### `DestroyShift`

Domain event.

### `DestroyTermination`

Domain event.

### `DestroyTerminationType`

Domain event.

### `DestroyWarning`

Domain event.

### `DestroyWarningType`

Domain event.

### `PaySalary`

Domain event.

### `UpdateAcknowledgment`

Domain event.

### `UpdateAllowance`

Domain event.

### `UpdateAllowanceType`

Domain event.

### `UpdateAnnouncement`

Domain event.

### `UpdateAnnouncementCategory`

Domain event.

### `UpdateAttendance`

Domain event.

### `UpdateAward`

Domain event.

### `UpdateAwardType`

Domain event.

### `UpdateBranch`

Domain event.

### `UpdateComplaint`

Domain event.

### `UpdateComplaintType`

Domain event.

### `UpdateDeduction`

Domain event.

### `UpdateDeductionType`

Domain event.

### `UpdateDepartment`

Domain event.

### `UpdateDesignation`

Domain event.

### `UpdateDocument`

Domain event.

### `UpdateDocumentCategory`

Domain event.

### `UpdateDocumentType`

Domain event.

### `UpdateEmployee`

Domain event.

### `UpdateEmployeeTransfer`

Domain event.

### `UpdateEvent`

Domain event.

### `UpdateEventType`

Domain event.

### `UpdateHoliday`

Domain event.

### `UpdateHolidayType`

Domain event.

### `UpdateLeaveApplication`

Domain event.

### `UpdateLeaveStatus`

Domain event.

### `UpdateLeaveType`

Domain event.

### `UpdateLoan`

Domain event.

### `UpdateLoanType`

Domain event.

### `UpdateOverTime`

Domain event.

### `UpdatePayroll`

Domain event.

### `UpdatePromotion`

Domain event.

### `UpdateResignaionStatus`

Domain event.

### `UpdateResignation`

Domain event.

### `UpdateShift`

Domain event.

### `UpdateTermination`

Domain event.

### `UpdateTerminationStatus`

Domain event.

### `UpdateTerminationType`

Domain event.

### `UpdateWarning`

Domain event.

### `UpdateWarningType`

Domain event.

## Listeners

### `DataDefault`

Event listener.

### `GiveRoleToPermission`

Event listener.

## Requests

### `StoreAcknowledgmentRequest`

Form request - validation rules for StoreAcknowledgment.

### `StoreAllowanceRequest`

Form request - validation rules for StoreAllowance.

### `StoreAllowanceTypeRequest`

Form request - validation rules for StoreAllowanceType.

### `StoreAnnouncementCategoryRequest`

Form request - validation rules for StoreAnnouncementCategory.

### `StoreAnnouncementRequest`

Form request - validation rules for StoreAnnouncement.

### `StoreAttendanceRequest`

Form request - validation rules for StoreAttendance.

### `StoreAwardRequest`

Form request - validation rules for StoreAward.

### `StoreAwardTypeRequest`

Form request - validation rules for StoreAwardType.

### `StoreBranchRequest`

Form request - validation rules for StoreBranch.

### `StoreComplaintRequest`

Form request - validation rules for StoreComplaint.

### `StoreComplaintTypeRequest`

Form request - validation rules for StoreComplaintType.

### `StoreDeductionRequest`

Form request - validation rules for StoreDeduction.

### `StoreDeductionTypeRequest`

Form request - validation rules for StoreDeductionType.

### `StoreDepartmentRequest`

Form request - validation rules for StoreDepartment.

### `StoreDesignationRequest`

Form request - validation rules for StoreDesignation.

### `StoreDocumentCategoryRequest`

Form request - validation rules for StoreDocumentCategory.

### `StoreDocumentRequest`

Form request - validation rules for StoreDocument.

### `StoreEmployeeDocumentTypeRequest`

Form request - validation rules for StoreEmployeeDocumentType.

### `StoreEmployeeRequest`

Form request - validation rules for StoreEmployee.

### `StoreEmployeeTransferRequest`

Form request - validation rules for StoreEmployeeTransfer.

### `StoreEventRequest`

Form request - validation rules for StoreEvent.

### `StoreEventTypeRequest`

Form request - validation rules for StoreEventType.

### `StoreHolidayRequest`

Form request - validation rules for StoreHoliday.

### `StoreHolidayTypeRequest`

Form request - validation rules for StoreHolidayType.

### `StoreHrmDocumentRequest`

Form request - validation rules for StoreHrmDocument.

### `StoreIpRestrictRequest`

Form request - validation rules for StoreIpRestrict.

### `StoreLeaveApplicationRequest`

Form request - validation rules for StoreLeaveApplication.

### `StoreLeaveTypeRequest`

Form request - validation rules for StoreLeaveType.

### `StoreLoanRequest`

Form request - validation rules for StoreLoan.

### `StoreLoanTypeRequest`

Form request - validation rules for StoreLoanType.

### `StoreOvertimeRequest`

Form request - validation rules for StoreOvertime.

### `StorePayrollRequest`

Form request - validation rules for StorePayroll.

### `StorePromotionRequest`

Form request - validation rules for StorePromotion.

### `StoreResignationRequest`

Form request - validation rules for StoreResignation.

### `StoreShiftRequest`

Form request - validation rules for StoreShift.

### `StoreTerminationRequest`

Form request - validation rules for StoreTermination.

### `StoreTerminationTypeRequest`

Form request - validation rules for StoreTerminationType.

### `StoreWarningRequest`

Form request - validation rules for StoreWarning.

### `StoreWarningTypeRequest`

Form request - validation rules for StoreWarningType.

### `UpdateAcknowledgmentRequest`

Form request - validation rules for UpdateAcknowledgment.

### `UpdateAllowanceRequest`

Form request - validation rules for UpdateAllowance.

### `UpdateAllowanceTypeRequest`

Form request - validation rules for UpdateAllowanceType.

### `UpdateAnnouncementCategoryRequest`

Form request - validation rules for UpdateAnnouncementCategory.

### `UpdateAnnouncementRequest`

Form request - validation rules for UpdateAnnouncement.

### `UpdateAttendanceRequest`

Form request - validation rules for UpdateAttendance.

### `UpdateAwardRequest`

Form request - validation rules for UpdateAward.

### `UpdateAwardTypeRequest`

Form request - validation rules for UpdateAwardType.

### `UpdateBranchRequest`

Form request - validation rules for UpdateBranch.

### `UpdateComplaintRequest`

Form request - validation rules for UpdateComplaint.

### `UpdateComplaintTypeRequest`

Form request - validation rules for UpdateComplaintType.

### `UpdateDeductionRequest`

Form request - validation rules for UpdateDeduction.

### `UpdateDeductionTypeRequest`

Form request - validation rules for UpdateDeductionType.

### `UpdateDepartmentRequest`

Form request - validation rules for UpdateDepartment.

### `UpdateDesignationRequest`

Form request - validation rules for UpdateDesignation.

### `UpdateDocumentCategoryRequest`

Form request - validation rules for UpdateDocumentCategory.

### `UpdateDocumentRequest`

Form request - validation rules for UpdateDocument.

### `UpdateEmployeeDocumentTypeRequest`

Form request - validation rules for UpdateEmployeeDocumentType.

### `UpdateEmployeeRequest`

Form request - validation rules for UpdateEmployee.

### `UpdateEmployeeTransferRequest`

Form request - validation rules for UpdateEmployeeTransfer.

### `UpdateEventRequest`

Form request - validation rules for UpdateEvent.

### `UpdateEventTypeRequest`

Form request - validation rules for UpdateEventType.

### `UpdateHolidayRequest`

Form request - validation rules for UpdateHoliday.

### `UpdateHolidayTypeRequest`

Form request - validation rules for UpdateHolidayType.

### `UpdateHrmDocumentRequest`

Form request - validation rules for UpdateHrmDocument.

### `UpdateIpRestrictRequest`

Form request - validation rules for UpdateIpRestrict.

### `UpdateLeaveApplicationRequest`

Form request - validation rules for UpdateLeaveApplication.

### `UpdateLeaveTypeRequest`

Form request - validation rules for UpdateLeaveType.

### `UpdateLoanRequest`

Form request - validation rules for UpdateLoan.

### `UpdateLoanTypeRequest`

Form request - validation rules for UpdateLoanType.

### `UpdateOvertimeRequest`

Form request - validation rules for UpdateOvertime.

### `UpdatePayrollRequest`

Form request - validation rules for UpdatePayroll.

### `UpdatePromotionRequest`

Form request - validation rules for UpdatePromotion.

### `UpdateResignationRequest`

Form request - validation rules for UpdateResignation.

### `UpdateShiftRequest`

Form request - validation rules for UpdateShift.

### `UpdateTerminationRequest`

Form request - validation rules for UpdateTermination.

### `UpdateTerminationTypeRequest`

Form request - validation rules for UpdateTerminationType.

### `UpdateWarningRequest`

Form request - validation rules for UpdateWarning.

### `UpdateWarningTypeRequest`

Form request - validation rules for UpdateWarningType.

## Providers

### `EventServiceProvider`

Service provider.

### `HrmServiceProvider`

Service provider.

## Seeders

### `DemoAcknowledgmentSeeder`

Database seeder.

### `DemoAllowanceSeeder`

Database seeder.

### `DemoAllowanceTypeSeeder`

Database seeder.

### `DemoAnnouncementCategorySeeder`

Database seeder.

### `DemoAnnouncementSeeder`

Database seeder.

### `DemoAttendanceSeeder`

Database seeder.

### `DemoAwardSeeder`

Database seeder.

### `DemoAwardTypeSeeder`

Database seeder.

### `DemoBranchSeeder`

Database seeder.

### `DemoComplaintSeeder`

Database seeder.

### `DemoComplaintTypeSeeder`

Database seeder.

### `DemoDeductionSeeder`

Database seeder.

### `DemoDeductionTypeSeeder`

Database seeder.

### `DemoDepartmentSeeder`

Database seeder.

### `DemoDesignationSeeder`

Database seeder.

### `DemoDocumentCategorySeeder`

Database seeder.

### `DemoEmployeeDocumentTypeSeeder`

Database seeder.

### `DemoEmployeeSeeder`

Database seeder.

### `DemoEmployeeTransferSeeder`

Database seeder.

### `DemoEventSeeder`

Database seeder.

### `DemoEventTypeSeeder`

Database seeder.

### `DemoHolidaySeeder`

Database seeder.

### `DemoHolidayTypeSeeder`

Database seeder.

### `DemoHrmDocumentSeeder`

Database seeder.

### `DemoIpRestrictSeeder`

Database seeder.

### `DemoLeaveApplicationSeeder`

Database seeder.

### `DemoLeaveTypeSeeder`

Database seeder.

### `DemoLoanSeeder`

Database seeder.

### `DemoLoanTypeSeeder`

Database seeder.

### `DemoOvertimeSeeder`

Database seeder.

### `DemoPayrollSeeder`

Database seeder.

### `DemoPromotionSeeder`

Database seeder.

### `DemoResignationSeeder`

Database seeder.

### `DemoShiftSeeder`

Database seeder.

### `DemoTerminationSeeder`

Database seeder.

### `DemoTerminationTypeSeeder`

Database seeder.

### `DemoWarningSeeder`

Database seeder.

### `DemoWarningTypeSeeder`

Database seeder.

### `HrmDatabaseSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

