---
title: Accounting Management
sidebar_position: 13
---
The Accounting module allows you to manage customers, vendors, banking, the chart of accounts, payments, revenues, expenses, debit and credit notes, reports, and system setup. It includes the following sections:

### 13.1 Manage Customers

-   Click **“Create”** to add a new customer, which will open the Create Customer form. In this form, you need to enter details such as the user (client role only), company name, contact person, email, mobile number (including country code), tax number, payment terms, billing name, billing address (including city, state, country, and zip code), and shipping address.
-   If the shipping address is the same as the billing address, you can select **“Shipping address same as billing”** to automatically fill in the details. You may also include optional notes if needed.
-   The Manage Customers page displays all registered customers with details such as user, Customer Code, Company Name, Contact Person, Email, and Tax Number. Use the Search bar or filters (Customer Code, Company Name, Tax Number) to find records. Click Apply to filter and Clear to reset. Toggle between List and Grid view using the icons at the top right. Use Action icons to View Report, View, Edit, or Delete any customer record.
-   Clicking the View Report icon opens the Customer Detail page, which shows a full financial summary for that customer, including Total Invoiced, Total Returns, Total Credit Notes, Total Payments, and Balance.
-   Set a Start Date and End Date, click Generate to load the report, and use Download PDF to export it. Below the summary, the page lists all Sales Invoices, Sales Returns, Credit Notes, and Customer Payments linked to that customer.

### 13.2 Manage Vendors

-   To add a new vendor, click the **“Create”** button to open the Create Vendor form. Start by selecting a User from the dropdown, only users with the vendor role who are not already assigned to another vendor will appear in this list. If no user exists, click **“Create user”** to add one.
-   Enter the Company Name, Contact Person, and Email. Add the Mobile Number including the country code in the format +\[country code\]\[phone number\]. Optionally fill in the Tax Number and Payment Terms (e.g., Net 30).
-   Fill in the billing details: enter the Billing Name, Billing Address, and Address Line 2 (optional for apartment, suite, etc.). Then enter the City, State, Country, and Zip Code.
-   For the shipping address, either check **“Shipping address same as billing”** to auto-fill the shipping details, or manually enter the Shipping Name, Shipping Address, Address Line 2 (optional), City, State, Country, and Zip Code. Add any optional Notes if needed.
-   All selected invoices and applied debit notes appear in the Payment Summary section. You can enter a partial amount for each invoice or remove an item using the delete icon. Applied debit notes are highlighted in green with the label **“Credit applied to payment.”**
-   The Total Payment Amount is automatically calculated based on the invoices added minus any debit notes applied. Add optional Notes if needed.
-   The Manage Vendors page displays all registered vendors with details such as Vendor Code, Company Name, Contact Person, Email, and Tax Number. Use the Search bar or filters (Vendor Code, Company Name, Tax Number) to locate records. Click Apply to filter and Clear to reset. Use Action icons to View Report, View, Edit, or Delete any vendor record.
-   Clicking the View Report icon opens the Vendor Detail page, which shows a complete financial overview for that vendor, including Total Billed, Total Returns, Total Debit Notes, Total Payments, and Balance.
-   Set a Start Date and End Date, click Generate to load the report, and use Download PDF to export it. Below the summary, the page lists all Purchase Invoices, Purchase Returns, Debit Notes, and Vendor Payments linked to that vendor.

### 13.3 Banking

#### 13.3.1 Bank Accounts

-   Click **“Create”** to add a new bank account, which will open the Create Bank Account form. In this form, you need to enter details such as the account number, account name, bank name, branch name (optional), account type (Checking, Savings, Credit, or Loan), GL account, payment gateway (optional), opening balance, and current balance.
-   You can also provide additional optional details like IBAN, SWIFT code, and routing number. Toggle **“Is Active”** ON to make the account available across the system.
-   The Manage Bank Accounts page displays all company bank accounts with details such as Account Number, Account Name, Bank Name, Account Type (Checking, Savings, Credit, or Loan), Current Balance, and Active Status (Active/Inactive). Use the Search bar or filters (Bank Name, Account Type, Status) to find specific accounts. Click Apply to filter and Clear to reset. Use Action icons to View, Edit, or Delete any account.

#### 13.3.2 Bank Transactions

-   The Manage Bank Transactions page provides an automatic real-time log of all financial movements across all company bank accounts. Each record displays Date, Bank Account, Reference Number, Transaction Type (Credit/Debit), Amount, Running Balance, Description, and Status (Cleared/Pending).
-   Use filters (Bank Account, Transaction Type) to narrow results. Click the circle icon in the Actions column to mark a transaction as Reconciled.

#### 13.3.3 Bank Transfers

-   Click **“Create”** to create a new transfer, which will open the Create Bank Transfer form. In this form, you need to enter details such as the transfer date, from account, to account, transfer amount, transfer charges (enter 0 if none), reference number (optional), and a description.
-   Once completed, click **“Create”** to initiate the transfer or **“Cancel”** to discard the changes. Please note that transfers cannot be edited once they have been processed.
-   The Manage Bank Transfers page lists all internal fund transfers between company bank accounts, showing Transfer Number, Date, From Account, To Account, Amount, and Status (Pending/Completed).
-   Use filters (Status, From Account, To Account) to find specific records. For Pending transfers, available actions are: Process Transfer (execute the transfer), View, Edit, and Delete. Completed transfers can only be Viewed.

### 13.4 Chart of Accounts

-   Click **“Create”** to create a new account, which will open the Create Chart of Accounts form. In this form, you need to enter details such as the account type, account name, account code, normal balance (Debit or Credit), opening balance, and current balance (enter 0.00 for new accounts).
-   Toggle **“Is Active”** ON to make the account usable in transactions. If the account falls under a parent account, select **“Create as Sub Account”**. You can also add an optional description for internal reference.
-   The Manage Chart of Accounts page lists all financial ledger accounts in the system, displaying Account Code, Account Name, Account Type, Parent Account, Normal Balance (Debit/Credit), Opening Balance, Current Balance, and Status. Use filters (Account Type, Normal Balance, Status) to view specific account categories. Click Apply to filter and Clear to reset. Use the View or Edit icons to review or update any account.

### 13.5 Vendor Payments

-   Click **“Create”** to add a new vendor payment, which will open the Create Vendor Payment form. In this form, you need to enter details such as the payment date, vendor name, bank account, and an optional reference number.
-   Under Outstanding Invoices, select the invoices you want to pay by clicking the **“Add”** button next to each invoice, for example, PI-2026-01-008 (Balance: $1,500.00) or PI-2026-01-014 (Balance: $2,610.00). Under Available Debit Notes, you can offset the payment amount by clicking **“Apply”** next to any available debit note, such as DN-2026-01-005 (Balance: $261.00) or DN-2026-01-009 (Balance: $174.00).
-   The Payment Summary section will automatically reflect all added invoices and any applied debit notes. Applied debit notes appear highlighted in green and are labeled **“Credit applied to payment,”** with their amount deducted from the total.
-   The Total Payment Amount updates automatically based on your selections, for instance, adding invoice PI-2026-01-008 ($1,500.00) and applying debit note DN-2026-01-009 ($174.00) results in a total payment of $1,326.00. You can also add any relevant Notes in the notes field at the bottom.
-   The Manage Vendor Payments page displays all payments made to vendors, showing Payment Number, Payment Date, Vendor Name, Bank Account, Amount, and Status (Pending, Cleared, Cancelled).
-   Use filters (Vendor, Bank Account, Status, Date Range) to locate specific records. For Pending payments, available actions are: Mark as Cleared, Cancel Payment, View, and Delete. Cleared and Cancelled payments are locked and can only be Viewed. Click any Payment Number (blue hyperlink) to open its full details.

### 13.6 Customer Payments

-   Click **“Create”** to open the Create Customer Payment form. Enter the payment date, customer, bank account, and an optional reference number.
-   Under Outstanding Invoices, all unpaid invoices for the selected customer are listed. Click **“Add”** next to an invoice to include it in the payment.
-   Under Available Credit Notes, any existing credits for the customer are listed. Click **“Apply”** next to a credit note to use it against the payment, the credit amount will be highlighted in green in the Payment Summary and automatically deducted from the total.
-   The Payment Summary section updates in real time, showing all added invoices and applied credit notes. The Total Payment Amount reflects the final amount due after credits are applied, for example, adding invoice SI-2026-01-007 ($1,158.00) and applying credit note CN-2026-01-005 ($141.60) results in a total of $1,016.40. Add any relevant Notes in the notes field.
-   You may also add optional notes if needed. Before submitting, ensure all details are accurate, as any errors will require cancellation of the record. Once completed, click **“Create”** to save the payment or **“Cancel”** to discard the changes. The payment will be recorded with a Pending status until it is marked as Cleared.
-   The Manage Customer Payments page displays all payments received from customers, showing Payment Number, Customer Name, Payment Date, Amount, Bank Account, and Status. Use the Search bar or filters (Customer, Status, Date Range) to locate specific records.
-   Click Apply to filter and Clear to reset. Toggle between List and Grid view using the icons at the top right. Payment statuses are color-coded: Pending (yellow), Cleared (green), and Cancelled (red).
-   For Pending payments, available actions are: Mark as Cleared (confirm the payment), Cancel Payment (void the payment), View (open full details), and Delete (remove the record). Cleared and Cancelled payments are locked and can only be Viewed.

### 13.7 Manage Revenues

-   Click **“Create”** to create a new revenue entry, which will open the Create Revenue form. In this form, you need to enter details such as the revenue date, category (select the appropriate revenue type), bank account (choose the account where the revenue will be received), chart of accounts (select the corresponding ledger account), and amount.
-   The reference number is optional but recommended for tracking purposes. You can also add a description to provide context about the revenue source.
-   The Manage Revenues page displays all revenue entries recorded in the system, showing Revenue Number, Date, Category, Bank Account, Chart of Account, Amount, Reference, Status, and Approved By. Use the Search bar or filters (Category, Status, Date Range, Bank Account) to locate specific records. Click Apply to filter and Clear to reset.
-   Revenue statuses include: Draft (created but not yet submitted), Approved (reviewed and approved), and Posted (finalized and recorded in the ledger). For Draft entries, available actions are: Approve (submit for posting), View, Edit, and Delete.
-   For Approved entries, the Post action is available to finalize the entry into the ledger. Posted entries can only be Viewed. Click any Revenue Number (blue hyperlink) to open its full details.

### 13.8 Manage Expenses

-   Click **“Create”** to create a new expense entry, which will open the Create Expense form. In this form, you need to enter details such as the expense date, category (select the appropriate expense type), bank account (choose the account from which the expense will be debited), chart of account (select the corresponding ledger account), and amount. The reference number is optional but recommended for internal tracking. You can also add a description to provide context about the nature of the expense.
-   The Manage Expenses page displays all expense entries recorded in the system, showing Expense Number, Date, Category, Bank Account, Chart of Account, Amount, Reference, Status, and Approved By. Use the Search bar or filters (Category, Status, Date Range, Bank Account) to find specific records. Click Apply to filter and Clear to reset.
-   Expense statuses include: Draft (created but not yet submitted), Approved (reviewed and approved), and Posted (finalized and recorded in the ledger). For Draft entries, available actions are: Approve, View, Edit, and Delete. For Approved entries, the Post action is available to finalize the entry. Posted entries can only be Viewed. Click any Expense Number (blue hyperlink) to open its full details.

### 13.9 Debit Notes

-   The **Manage Debit Notes** page displays all debit notes raised against vendors, typically generated when goods are returned to a vendor. Each record shows the Debit Note Number, linked Purchase Return, Vendor Name, Date, Total Amount, Balance, Status, and Approved By.
-   Use the Search bar or filters (Vendor, Status, Purchase Return) to locate specific records. Click **Apply** to filter and **Clear** to reset. Debit note statuses include: **Draft** (pending approval), **Approved** (reviewed and confirmed), and **Applied** (fully or partially adjusted against vendor outstanding).
-   For **Draft** entries, available actions are: **Approve, View,** and **Delete.** Approved and Applied entries can only be Viewed. Click any Debit Note Number or the linked Purchase Return number (blue hyperlinks) to open their respective details.

### 13.10 Credit Notes

-   The Manage Credit Notes page displays all credit notes issued to customers, typically generated when a customer returns goods or when a credit adjustment is required. Each record shows the Credit Note Number, linked Sales Return, Customer Name, Date, Total Amount, Balance, Status, and Approved By.
-   Use the Search bar or filters (Customer, Status, Sales Return) to locate specific records. Click Apply to filter and Clear to reset. Credit note statuses include: Draft (pending approval), Approved (reviewed and confirmed), and Applied (fully or partially adjusted against the customer’s outstanding balance). A negative Balance indicates the credit has been applied beyond the outstanding amount.
-   For Draft entries, available actions are: Approve, View, and Delete. Approved and Applied entries can only be Viewed. Click any Credit Note Number or the linked Sales Return number (blue hyperlinks) to open their respective details.

### 13.11 Reports

The Reports section provides five pre-built financial reports accessible via tabs at the top of the page: Invoice Aging, Bill Aging, Tax Summary, Customer Balance, and Vendor Balance. Click on any tab to switch between report types. Each report can be generated for a specific date range and exported as a PDF using the Download PDF button.

#### 13.11.1 Invoice Aging Report

-   The Invoice Aging Report shows the outstanding balances owed by customers, categorized by how long the invoices have been overdue. Enter an As Of Date and click Generate to produce the report.
-   The report displays each customer’s outstanding balance broken down into aging buckets: Current, 1-30 Days, 31-60 Days, 61-90 Days, and Over 90 Days, along with a Total column.
-   The bottom row shows the combined total across all customers for each aging period. Use this report to identify overdue customer accounts and prioritize collection follow-ups. Click Download PDF to export the report.

#### 13.11.2 Bill Aging Report

-   The Bill Aging Report shows the outstanding balances owed to vendors, categorized by how long the bills have been overdue. Enter an As Of Date and click Generate to produce the report.
-   The report displays each vendor’s outstanding payable balance broken down into aging buckets: Current, 1-30 Days, 31-60 Days, 61-90 Days, and Over 90 Days, along with a Total column.
-   The bottom row shows the combined total across all vendors for each aging period. Use this report to plan upcoming vendor payments and avoid late payment penalties. Click Download PDF to export the report.

#### 13.11.3 Tax Summary Report

-   The Tax Summary Report provides a consolidated overview of all taxes collected on sales and all taxes paid on purchases within a selected period. Set the From Date and To Date, then click Generate to produce the report.
-   The report is divided into two sections: Tax Collected (Sales), which lists each tax type (e.g., GST 18%, VAT 12%, Service Tax 15%) and the total amount collected; and Tax Paid (Purchases), which lists taxes paid against each purchase type.
-   The Total Tax Collected and Total Tax Paid rows summarize each section. The Net Tax Liability at the bottom shows the difference between tax collected and tax paid; a negative value indicates a tax credit position. Click Download PDF to export the report.

#### 13.11.4 Customer Balance Report

-   The Customer Balance Report provides a summary of the outstanding balance owed by each customer as of a selected date. Enter an As Of Date and click Generate to produce the report. Check Show Zero Balances to include customers with a fully settled account in the results.
-   The report displays each customer’s Email, Total Invoiced, Total Returns and Credit Notes (shown in red), Total Paid, and Balance. The Total Outstanding amount is shown at the top of the report for quick reference.
-   A negative balance indicates that the customer has overpaid or has an excess credit on their account. Click any customer name (blue hyperlink) to navigate directly to their detail page. Click Download PDF to export the report.

#### 13.11.5 Vendor Balance Report

-   The Vendor Balance Report provides a summary of the outstanding balance owed to each vendor as of a selected date. Enter an As Of Date and click Generate to produce the report. Check Show Zero Balances to include vendors with a fully settled account in the results.
-   The report displays each vendor’s Email, Total Billed, Total Returns and Debit Notes (shown in red), Total Paid, and Balance. The Total Outstanding amount is shown at the top of the report. Click any vendor name (blue hyperlink) to navigate directly to their detail page. Click Download PDF to export the report.

### 13.12 System Setup

#### 13.12.1 Account Types

-   Click **“Create”** to create a new account type, which will open the Create Account Type form. In this form, you need to enter details such as the category (select from Assets, Liabilities, Equity, Revenue, or Expenses), name (enter a descriptive account type name), and code (auto-generated from the name but can be modified).
-   Select the normal balance, Debit or Credit, based on the nature of the account type. You can also add an optional description for internal reference. Toggle **“Is Active”** ON to make the account type available for use in the Chart of Accounts.
-   The Account Types page under System Setup displays all predefined account type classifications used across the Chart of Accounts. Each record shows the Account Type Name, Code, Normal Balance (Debit or Credit), Category Name (Assets, Liabilities, Equity, Revenue, or Expenses), and Active Status. Account types can be Edited using the pencil icon, but cannot be deleted to maintain ledger integrity.

#### 13.12.2 Revenue Categories

-   Click **“Create”** to add a new revenue category, which will open the Create Revenue Categories form. In this form, you need to enter the category name (e.g., Product Sales, Consulting Fees) and a unique category code.
-   Select the linked GL account from the Chart of Accounts to ensure that revenue entries are posted to the correct ledger account. You may also add an optional description to clarify the purpose of this category.
-   The Enabled toggle is ON by default; keep it ON to make this category available when creating revenue entries.
-   The Revenue Categories page displays all categories used to classify revenue entries in the system. Each record shows the Category Name, Category Code, linked GL Account, Description, Active Status, and action icons to Edit or Delete the category. These categories appear as dropdown options when creating a new revenue entry.

#### 13.12.3 Expense Categories

-   Click **“Create”** to add a new expense category, which will open the Create Expense Categories form. In this form, you need to enter the category name (e.g., Office Supplies, Travel) and a unique category code.
-   Select the linked GL account from the Chart of Accounts to ensure that expense entries are posted to the correct ledger account. You may also add an optional description to clarify the purpose of this category. The Enabled toggle is ON by default; keep it ON to make this category available when creating expense entries.
-   The Expense Categories page displays all categories used to classify expense entries in the system. Each record shows the Category Name, Category Code, linked GL Account, Description, Active Status, and action icons to Edit or Delete the category.
-   These categories appear as dropdown options when creating a new expense entry. Examples of default categories include: Office Supplies, Utilities, Rent, Marketing, and Travel, each linked to their respective GL accounts.
