---
title: zerp/account
sidebar_position: 1
---

# `zerp/account`

Accounting module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 146

## Models

### `AccountCategory`

Eloquent model - 7 fillable fields, relations: accountTypes.

### `AccountType`

Eloquent model - 10 fillable fields, relations: category, chartOfAccounts.

### `BankAccount`

Eloquent model - 15 fillable fields, relations: glAccount, gl_account.

### `BankTransaction`

Eloquent model - 11 fillable fields, relations: bankAccount, creator.

### `BankTransfer`

Eloquent model - 12 fillable fields, relations: fromAccount, toAccount, journalEntry, creator.

### `ChartOfAccount`

Eloquent model - 13 fillable fields, relations: accountType, account_type, parent_account, journalEntryItems.

### `CreditNote`

Eloquent model - 17 fillable fields, relations: items, customer, invoice, salesReturn, approvedBy, applications.

### `CreditNoteApplication`

Eloquent model - 6 fillable fields, relations: creditNote, payment.

### `CreditNoteItem`

Eloquent model - 9 fillable fields, relations: creditNote, product, taxes.

### `CreditNoteItemTax`

Eloquent model - 3 fillable fields, relations: item.

### `Customer`

Eloquent model - 14 fillable fields, relations: user.

### `CustomerPayment`

Eloquent model - 10 fillable fields, relations: customer, bankAccount, allocations, creditNoteApplications.

### `CustomerPaymentAllocation`

Eloquent model - 5 fillable fields, relations: payment, invoice.

### `DebitNote`

Eloquent model - 17 fillable fields, relations: items, vendor, invoice, purchaseReturn, approvedBy, applications.

### `DebitNoteApplication`

Eloquent model - 6 fillable fields, relations: debitNote, payment.

### `DebitNoteItem`

Eloquent model - 11 fillable fields, relations: debitNote, product, taxes.

### `DebitNoteItemTax`

Eloquent model - 3 fillable fields, relations: item.

### `Expense`

Eloquent model - 12 fillable fields, relations: category, bankAccount, chartOfAccount, approvedBy.

### `ExpenseCategories`

Eloquent model - 7 fillable fields, relations: gl_account.

### `JournalEntry`

Eloquent model - 11 fillable fields, relations: items.

### `JournalEntryItem`

Eloquent model - 7 fillable fields, relations: journalEntry, account.

### `OpeningBalance`

Eloquent model - 7 fillable fields, relations: account.

### `Revenue`

Eloquent model - 12 fillable fields, relations: category, bankAccount, chartOfAccount, approvedBy.

### `RevenueCategories`

Eloquent model - 7 fillable fields, relations: gl_account.

### `Vendor`

Eloquent model - 19 fillable fields, relations: user.

### `VendorPayment`

Eloquent model - 10 fillable fields, relations: vendor, bankAccount, allocations, debitNoteApplications.

### `VendorPaymentAllocation`

Eloquent model - 3 fillable fields, relations: payment, invoice.

## Controllers

### `AccountTypeController`

HTTP controller - actions: index, store, update, destroy.

### `BankAccountController`

HTTP controller - actions: index, store, update, destroy, bankAccounts.

### `BankTransactionController`

HTTP controller - actions: index, markReconciled.

### `BankTransferController`

HTTP controller - actions: index, store, update, destroy, process.

### `ChartOfAccountController`

HTTP controller - actions: index, store, update, show, destroy.

### `CreditNoteController`

HTTP controller - actions: index, show, approve, destroy.

### `CustomerController`

HTTP controller - actions: index, store, update, destroy.

### `CustomerPaymentController`

HTTP controller - actions: index, store, getOutstandingInvoices, updateStatus, destroy.

### `DashboardController`

HTTP controller - actions: index.

### `DebitNoteController`

HTTP controller - actions: index, show, approve, destroy.

### `ExpenseCategoriesController`

HTTP controller - actions: index, store, update, destroy.

### `ExpenseController`

HTTP controller - actions: index, store, update, destroy, approve, post.

### `ReportsController`

HTTP controller - actions: index, invoiceAging, billAging, taxSummary, customerBalance, vendorBalance, printInvoiceAging, printBillAging, printTaxSummary, printCustomerBalance, printVendorBalance, customerDetail, vendorDetail, printCustomerDetail, printVendorDetail.

### `RevenueCategoriesController`

HTTP controller - actions: index, store, update, destroy.

### `RevenueController`

HTTP controller - actions: index, store, update, destroy, approve, post.

### `VendorController`

HTTP controller - actions: index, store, update, destroy.

### `VendorPaymentController`

HTTP controller - actions: index, store, getOutstandingInvoices, updateStatus, destroy.

## Events

### `ApproveCreditNote`

Domain event.

### `ApproveDebitNote`

Domain event.

### `ApproveExpense`

Domain event.

### `ApproveRevenue`

Domain event.

### `CreateAccountType`

Domain event.

### `CreateBankAccount`

Domain event.

### `CreateBankTransfer`

Domain event.

### `CreateChartOfAccount`

Domain event.

### `CreateCustomer`

Domain event.

### `CreateCustomerPayment`

Domain event.

### `CreateExpense`

Domain event.

### `CreateExpenseCategories`

Domain event.

### `CreateRevenue`

Domain event.

### `CreateRevenueCategories`

Domain event.

### `CreateVendor`

Domain event.

### `CreateVendorPayment`

Domain event.

### `DestroyAccountType`

Domain event.

### `DestroyBankAccount`

Domain event.

### `DestroyBankTransfer`

Domain event.

### `DestroyChartOfAccount`

Domain event.

### `DestroyCreditNote`

Domain event.

### `DestroyCustomer`

Domain event.

### `DestroyCustomerPayment`

Domain event.

### `DestroyDebitNote`

Domain event.

### `DestroyExpense`

Domain event.

### `DestroyExpenseCategories`

Domain event.

### `DestroyRevenue`

Domain event.

### `DestroyRevenueCategories`

Domain event.

### `DestroyVendor`

Domain event.

### `DestroyVendorPayment`

Domain event.

### `PostExpense`

Domain event.

### `PostRevenue`

Domain event.

### `ProcessBankTransfer`

Domain event.

### `UpdateAccountType`

Domain event.

### `UpdateBankAccount`

Domain event.

### `UpdateBankTransfer`

Domain event.

### `UpdateBudgetSpending`

Domain event.

### `UpdateChartOfAccount`

Domain event.

### `UpdateCustomer`

Domain event.

### `UpdateCustomerPaymentStatus`

Domain event.

### `UpdateExpense`

Domain event.

### `UpdateExpenseCategories`

Domain event.

### `UpdateRevenue`

Domain event.

### `UpdateRevenueCategories`

Domain event.

### `UpdateVendor`

Domain event.

### `UpdateVendorPaymentStatus`

Domain event.

## Listeners

### `ApproveSalesAgentCommissionAdjustmentLis`

Event listener.

### `BankAccountFieldUpdate`

Event listener.

### `BeautyBookingPaymentListener`

Event listener.

### `ConvertSalesRetainerListener`

Event listener.

### `CreateCreditNoteFromReturn`

Event listener.

### `CreateDebitNoteFromReturn`

Event listener.

### `CreatePosListener`

Event listener.

### `CreateTransferListener`

Event listener.

### `DataDefault`

Event listener.

### `DestroyTransferListener`

Event listener.

### `GiveRoleToPermission`

Event listener.

### `MarkFleetBookingPaymentPaidListener`

Event listener.

### `PaySalaryListener`

Event listener.

### `PostPurchaseInvoiceListener`

Event listener.

### `PostSalesInvoiceListener`

Event listener.

### `UpdateCateringOrderPaymentStatusListener`

Event listener.

### `UpdateCommissionPaymentStatusListener`

Event listener.

### `UpdateDairyCattlePaymentStatusListener`

Event listener.

### `UpdateMobileServicePaymentStatusLis`

Event listener.

### `UpdateRetainerPaymentStatusListener`

Event listener.

### `UpdateSalesAgentCommissionPaymentStatusLis`

Event listener.

## Requests

### `StoreAccountTypeRequest`

Form request - validation rules for StoreAccountType.

### `StoreBankAccountRequest`

Form request - validation rules for StoreBankAccount.

### `StoreBankTransferRequest`

Form request - validation rules for StoreBankTransfer.

### `StoreChartOfAccountRequest`

Form request - validation rules for StoreChartOfAccount.

### `StoreCustomerPaymentRequest`

Form request - validation rules for StoreCustomerPayment.

### `StoreCustomerRequest`

Form request - validation rules for StoreCustomer.

### `StoreExpenseCategoriesRequest`

Form request - validation rules for StoreExpenseCategories.

### `StoreExpenseRequest`

Form request - validation rules for StoreExpense.

### `StoreRevenueCategoriesRequest`

Form request - validation rules for StoreRevenueCategories.

### `StoreRevenueRequest`

Form request - validation rules for StoreRevenue.

### `StoreVendorPaymentRequest`

Form request - validation rules for StoreVendorPayment.

### `StoreVendorRequest`

Form request - validation rules for StoreVendor.

### `UpdateAccountTypeRequest`

Form request - validation rules for UpdateAccountType.

### `UpdateBankAccountRequest`

Form request - validation rules for UpdateBankAccount.

### `UpdateBankTransferRequest`

Form request - validation rules for UpdateBankTransfer.

### `UpdateChartOfAccountRequest`

Form request - validation rules for UpdateChartOfAccount.

### `UpdateCustomerRequest`

Form request - validation rules for UpdateCustomer.

### `UpdateExpenseCategoriesRequest`

Form request - validation rules for UpdateExpenseCategories.

### `UpdateExpenseRequest`

Form request - validation rules for UpdateExpense.

### `UpdateRevenueCategoriesRequest`

Form request - validation rules for UpdateRevenueCategories.

### `UpdateRevenueRequest`

Form request - validation rules for UpdateRevenue.

### `UpdateVendorRequest`

Form request - validation rules for UpdateVendor.

## Providers

### `AccountServiceProvider`

Service provider.

### `EventServiceProvider`

Service provider.

## Seeders

### `AccountDatabaseSeeder`

Database seeder.

### `DemoBankAccountSeeder`

Database seeder.

### `DemoChartOfAccountSeeder`

Database seeder.

### `DemoCustomerDatabaseSeeder`

Database seeder.

### `DemoExpenseCategoriesSeeder`

Database seeder.

### `DemoExpenseSeeder`

Database seeder.

### `DemoRevenueCategoriesSeeder`

Database seeder.

### `DemoRevenueSeeder`

Database seeder.

### `DemoVendorDatabaseSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

