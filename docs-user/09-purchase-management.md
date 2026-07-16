---
title: Purchase Management
sidebar_position: 9
---
The Purchase section allows the Company Admin to manage all purchasing activities, including purchase invoices, returns, warehouses, and stock transfers. It has four sub-sections: Purchase Invoice, Purchase Returns, Warehouses, and Transfers.

### 9.1 Purchase Invoice

View and manage all purchase invoices through the Manage Purchase Invoices page.

-   Enter an invoice number in the search field and click **“Search”** to find a specific invoice.
-   Toggle between list view and grid view using the icons at the top right.
-   Click the Filters button to access filtering options:

-   **Vendor:** Filter invoices by a specific vendor.
-   **Warehouse:** Filter invoices by warehouse.
-   **Status:** Filter invoices by their current status (Draft, Posted, Partial, Paid, Overdue).
-   **Date Range:** Filter invoices by invoice date range.

-   Click **“Apply”** to activate the filters or **“Clear”** to reset them.

#### Purchase Invoices Table Information:

The table displays the following columns:

-   **Invoice Number:** The unique reference number of the invoice (e.g., PI-2026-03-001). Click on it to view full invoice details.
-   **Vendor:** The name of the vendor the invoice was received from.
-   **Invoice Date:** The date the invoice was created.
-   **Due Date:** The payment due date. Overdue dates are displayed in red with an **“Overdue”** label.
-   **Subtotal:** The total amount before tax.
-   **Tax:** The tax amount applied.
-   **Total Amount:** The final amount, including tax.
-   **Balance:** The remaining unpaid balance.
-   **Status:** The current status of the invoice, Draft, Posted, Partial, or Paid.
-   **Actions:** Quick action buttons that vary depending on the invoice status.

Action icons available per invoice:

-   **Download:** Download the invoice as a PDF.
-   **View:** Open and view the full invoice details.
-   **Post:** Post the invoice to finalize it (available for Draft invoices).
-   **Edit:** Modify the invoice (available for Draft invoices).
-   **Delete:** Remove the invoice (available for Draft invoices).

#### Create Purchase Invoice

Click the **“Create”** button at the top-right corner of the Manage Purchase Invoices page to open the Create Purchase Invoice form.

##### Purchase Invoice Details:

-   **Invoice Date:** Select the date the invoice is being created.
-   **Due Date:** Select the payment due date.
-   **Vendor:** Select the vendor from the dropdown.
-   **Warehouse:** Select the warehouse where the purchased items will be received.
-   **Payment Terms:** Enter the payment terms (e.g., Net 30).
-   **Notes:** Add any additional notes about the invoice.
-   **Sync to Google Calendar:** Toggle on to add the invoice due date to your Google Calendar.

##### Purchase Invoice Items:

-   Click **“Add Item”** to add a product line to the invoice.
-   For each item, fill in the following:

-   **Product:** Select the product from the dropdown.
-   **Qty:** Enter the quantity purchased.
-   **Unit Price:** Enter the price per unit.
-   **Discount %:** Enter a discount percentage if applicable.
-   **Tax:** Applied automatically based on the product. Displays **“No tax”** if none is set.
-   **Total:** Calculated automatically.

-   Click the delete icon to remove an item from the list.

##### Invoice Summary:

The summary on the right side shows a real-time breakdown:

-   **Subtotal:** Total before discount and tax.
-   **Discount:** Total discount applied.
-   **Tax:** Total tax applied.
-   **Total:** Final payable amount.

### 9.2 Purchase Returns

The Purchase Returns section allows the Company Admin to manage product returns sent back to vendors against previously received purchase invoices.

-   View and manage all purchase returns through the Manage Purchase Returns page.
-   Enter a return number in the search field and click **“Search”** to find a specific return.
-   Toggle between list view and grid view using the icons at the top right.
-   Click the Filters button to filter returns by Vendor, Warehouse, Status, or Date Range. Click **“Apply”** to activate or **“Clear”** to reset.

#### Purchase Returns Table Information:

The table displays the following columns:

-   **Return Number:** The unique reference number of the return (e.g., PR-2026-03-001). Click on it to view full return details.
-   **Vendor:** The name of the vendor to whom the items are being returned.
-   **Warehouse:** The warehouse from which the items are being returned.
-   **Return Date:** The date the return was created.
-   **Total Amount:** The total value of the returned items.
-   **Items:** The name and quantity of the returned products.
-   **Status:** The current status of the return - Draft, Approved, or Completed.
-   **Actions:** Quick action buttons that vary depending on the return status.

Action icons available per return:

-   **Approve Return:** Approve a return that is in Draft status.
-   **Complete Return:** Mark an approved return as Completed once the items have been sent back to the vendor.
-   **View:** Open and view the full return details.
-   **Delete:** Remove the return (available for Draft returns).

#### Create Purchase Return

##### Purchase Return Details:

-   **Return Date:** Select the date the return is being created.
-   **Original Invoice:** Select the original purchase invoice against which the return is being processed.
-   **Warehouse:** Select the warehouse from which the returned items will be sent back.
-   **Return Reason:** Select the reason for the return (e.g., Defective).
-   **Notes:** Add any additional notes related to the return.

##### Available Items from Invoice:

-   This section displays all items from the selected original invoice along with their **Available Qty**, **Unit Price**, **Discount**, **Tax**, and **Total**.
-   Click the **“Added”** button next to an item to add it to the Return Items section.

##### Return Items:

-   This section lists all items selected for return. For each item, fill in the following:

-   **Product:** Displays the selected product name and code.
-   **Return Qty:** Enter the quantity to be returned.
-   **Unit Price:** Displays the original unit price.
-   **Discount:** Displays the applicable discount.
-   **Tax:** Displays the applicable tax (e.g., GST, VAT, Service Tax).
-   **Total:** Calculated automatically based on return quantity.
-   **Reason:** Optionally enter a specific reason for returning that item.

-   Click the **delete icon** to remove an item from the return list.

##### Return Summary:

-   **Subtotal:** Total return amount before tax.
-   **Tax:** Total tax applied on the return.
-   **Total Return Amount:** Final refundable amount.

Click **“Create”** to process the purchase return, or **“Cancel”** to discard.

### 9.3 Warehouses

The Warehouses section allows the Company Admin to manage all warehouse locations used for storing and managing inventory.

-   View and manage all warehouses through the Manage Warehouses page.
-   Enter keywords in the search field and click **“Search”** to find a specific warehouse.
-   Toggle between list view and grid view using the icons at the top right.
-   Click the Filters button to filter warehouses by City or Status. Click **“Apply”** to activate or **“Clear”** to reset.

#### Warehouses Table Information:

The table displays the following columns:

-   **Name:** The name of the warehouse (e.g., West Coast Storage Facility).
-   **Address:** The physical address of the warehouse.
-   **City:** The city where the warehouse is located.
-   **Zip Code:** The postal zip code of the warehouse.
-   **Phone:** The contact phone number of the warehouse.
-   **Status:** Whether the warehouse is Active or Inactive.
-   **Actions:** Quick action buttons for warehouse management.

Each warehouse row includes the following action icons:

-   **Edit:** Update the warehouse details.
-   **Delete:** Remove the warehouse from the system.

#### Create Warehouse

Click the **“Create”** button at the top-right corner of the Manage Warehouses page to open the Create Warehouse form.

-   **Name:** Enter the warehouse name.
-   **Address:** Enter the full physical address.
-   **City:** Enter the city name.
-   **Zip Code:** Enter the postal zip code.
-   **Phone:** Enter the contact phone number, including country code (e.g., +11233567890).
-   **Email:** Enter the warehouse contact email address.
-   **Status:** Set the warehouse status to Active or Inactive.

### 9.4 Transfers

The Transfers section allows the Company Admin to move stock between warehouses. This is useful when you need to shift products from one warehouse location to another.

-   View and manage all stock transfers through the Manage Transfers page.
-   Enter keywords in the search field and click **“Search”** to find a specific transfer.
-   Click the Filters button to filter transfers by From Warehouse. Click **“Apply”** to activate or **“Clear”** to reset.

#### Transfers Table Information:

The table displays the following columns:

-   **Product:** The name of the product being transferred.
-   **From Warehouse:** The warehouse from which the stock is being transferred.
-   **To Warehouse:** The warehouse to which the stock is being transferred.
-   **Quantity:** The number of units being transferred.
-   **Date:** The date the transfer was made.
-   **Actions:** Quick action button for transfer management.

Each transfer row includes one action icon:

-   **Delete:** Remove the transfer record.

#### Create Transfer

Click the **“Create”** button at the top-right corner of the Manage Transfers page to open the Create Transfer form.

-   **From Warehouse:** Select the warehouse from which the stock will be transferred.
-   **To Warehouse:** Select the destination warehouse. This field becomes available after selecting the From Warehouse.
-   **Product:** Select the product to transfer. This field becomes available after selecting the From Warehouse.
-   **Quantity:** Enter the number of units to transfer. This field becomes available after selecting the product.
-   **Date:** Select the date of the transfer.
