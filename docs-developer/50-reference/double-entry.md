---
title: zerp/double-entry
sidebar_position: 6
---

# `zerp/double-entry`

Double-entry bookkeeping module for the Zerp ERP platform

**Module version:** 5

**Classes documented:** 24

## Models

### `BalanceSheet`

Eloquent model — 9 fillable fields, relations: items, notes.

### `BalanceSheetItem`

Eloquent model — 7 fillable fields, relations: balanceSheet, account.

### `BalanceSheetNote`

Eloquent model — 6 fillable fields, relations: balanceSheet.

### `ComparativeBalanceSheet`

Eloquent model — 5 fillable fields, relations: currentPeriod, previousPeriod.

## Controllers

### `BalanceSheetController`

HTTP controller — actions: index, list, store, show, finalize, destroy, addNote, deleteNote, compare, comparisons, showComparison, yearEndClose, print, comparisonPrint.

### `LedgerSummaryController`

HTTP controller — actions: index, print.

### `ProfitLossController`

HTTP controller — actions: index, print.

### `ReportController`

HTTP controller — actions: index, generalLedger, printGeneralLedger, accountStatement, printAccountStatement, journalEntry, printJournalEntry, accountBalance, printAccountBalance, cashFlow, printCashFlow, expenseReport, printExpenseReport.

### `TrialBalanceController`

HTTP controller — actions: index, print.

## Events

### `CreateBalanceSheet`

Domain event.

### `CreateBalanceSheetNote`

Domain event.

### `DestroyBalanceSheet`

Domain event.

### `DestroyBalanceSheetNote`

Domain event.

### `FinalizeBalanceSheet`

Domain event.

### `YearEndClose`

Domain event.

## Requests

### `CompareBalanceSheetRequest`

Form request — validation rules for CompareBalanceSheet.

### `StoreBalanceSheetNoteRequest`

Form request — validation rules for StoreBalanceSheetNote.

### `StoreBalanceSheetRequest`

Form request — validation rules for StoreBalanceSheet.

### `YearEndCloseRequest`

Form request — validation rules for YearEndClose.

## Providers

### `DoubleEntryServiceProvider`

Service provider.

### `EventServiceProvider`

Service provider.

## Seeders

### `DoubleEntryDatabaseSeeder`

Database seeder.

### `MarketplaceSettingSeeder`

Database seeder.

### `PermissionTableSeeder`

Database seeder.

