---
title: Sales Invoice
sidebar_position: 8
---
The Sales Invoice section allows the Company Admin to create and manage sales invoices issued to customers. It has two sub-sections: Sales Invoice and Sales Invoice Returns.

### 8.1 Sales Invoice

View and manage all sales invoices through the Manage Sales Invoices page.

-   Enter an invoice number in the search field and click **“Search”** to find a specific invoice.
-   Toggle between list view and grid view using the icons at the top right.
-   Click the Filters button to access filtering options:

-   **Customer:** Filter invoices by a specific customer.
-   **Warehouse:** Filter invoices by warehouse.
-   **Status:** Filter invoices by their current status (Draft, Posted, Partial, Paid, Overdue).
-   **Date Range:** Filter invoices by invoice date range.
-   Click **“Apply”** to activate the filters or **“Clear”** to reset them.

#### Sales Invoices Table Information:

The table displays the following columns:

-   **Invoice Number:** The unique reference number of the invoice (e.g., SI-2026-03-001). Click on it to view the full invoice details.
-   **Customer:** The name of the customer the invoice was issued to.
-   **Invoice Date:** The date the invoice was created.
-   **Due Date:** The payment due date. Overdue dates are displayed in red with an **“Overdue”** label.
-   **Subtotal:** The total amount before tax.
-   **Tax:** The tax amount applied to the invoice.
-   **Total Amount:** The final amount, including tax.
-   **Balance:** The remaining unpaid balance.
-   **Status:** The current status of the invoice - Draft, Posted, or Paid.
-   **Actions:** Quick action buttons that vary depending on the invoice status.

Action icons available per invoice:

-   **Download:** Download the invoice as a PDF.
-   **View:** Open and view the full invoice details.
-   **Post:** Post the invoice to finalize it (available for Draft invoices).
-   **Edit:** Modify the invoice (available for Draft invoices).
-   **Delete:** Remove the invoice (available for Draft invoices).

#### Create Sales Invoice

Click the **“Create”** button at the top-right corner of the Manage Sales Invoices page to open the Create Sales Invoice form.

At the top right of the Sales Invoice Details section, select the invoice type:

-   **Product-wise:** Use this when the invoice is for physical products.
-   **Service Wise:** Use this when the invoice is for services rendered.

##### Create Sales Invoice - Product Wise

###### Sales Invoice Details:

-   **Invoice Date:** Select the date the invoice is being created.
-   **Due Date:** Select the payment due date.
-   **Customer:** Select the customer from the dropdown.
-   **Warehouse:** Select the warehouse from which products will be sourced.
-   **Payment Terms:** Enter the payment terms (e.g., Net 30).
-   **Notes:** Add any additional notes for the customer.
-   **Sync to Google Calendar:** Toggle on to add the invoice due date to your Google Calendar.

###### Sales Invoice Items:

-   Click **“Add Item”** to add a product line to the invoice. For each item, fill in the following:

-   **Product:** Select the product from the dropdown.
-   **Qty:** Enter the quantity.
-   **Unit Price:** Enter the price per unit.
-   **Discount %:** Enter a discount percentage if applicable.
-   **Tax:** Applied automatically based on the product. Displays **“No tax”** if none is set.
-   **Total:** Calculated automatically.

-   Click the **delete icon** to remove an item from the list.

###### Invoice Summary:

-   **Subtotal:** Total before discount and tax.
-   **Discount:** Total discount applied.
-   **Tax:** Total tax applied.
-   **Total:** Final payable amount.

##### Create Sales Invoice - Service Wise

###### Sales Invoice Details:

-   **Invoice Date:** Select the date the invoice is being created.
-   **Due Date:** Select the payment due date.
-   **Customer:** Select the customer from the dropdown.
-   **Payment Terms:** Enter the payment terms (e.g., Net 30).
-   **Notes:** Add any additional notes for the customer.
-   **Sync to Google Calendar:** Toggle on to add the invoice due date to your Google Calendar.

**Note:** In **Service Wise** mode, the **Warehouse** field is not required as no physical products are being sourced.

###### Sales Invoice Items:

-   Click **“Add Item”** to add a service line to the invoice. For each item, fill in the following:

-   **Product:** Select the service from the dropdown.
-   **Unit Price:** Enter the price per unit.
-   **Discount %:** Enter a discount percentage if applicable.
-   **Tax:** Applied automatically based on the service. Displays **“No tax”** if none is set.
-   **Total:** Calculated automatically.

-   Click the **delete icon** to remove an item from the list.

**Note:** In **Service Wise** mode, the **Qty** column is not available as services are billed by unit price only.

###### Invoice Summary:

-   **Subtotal:** Total before discount and tax.
-   **Discount:** Total discount applied.
-   **Tax:** Total tax applied.
-   **Total:** Final payable amount.

### 8.2 Sales Invoice Returns

The Sales Invoice Returns section allows the Company Admin to manage product returns from customers against previously issued sales invoices.

View and manage all return requests through the Manage Sales Returns page.

-   Enter a return number in the search field and click **“Search”** to find a specific return.
-   Toggle between list view and grid view using the icons at the top right.
-   Click the Filters button to filter returns by Customer, Warehouse, Status, or Date Range. Click **“Apply”** to activate or **“Clear”** to reset.

#### Sales Returns Table Information:

The table displays the following columns:

-   **Return Number:** The unique reference number of the return (e.g., SR-2026-03-002). Click on it to view full return details.
-   **Customer:** The name of the customer who made the return.
-   **Warehouse:** The warehouse where the returned items are being sent.
-   **Return Date:** The date the return was created.
-   **Total Amount:** The total value of the returned items.
-   **Items:** The name of the returned product.
-   **Status:** The current status of the return - Draft, Approved, or Completed.
-   **Actions:** Quick action buttons that vary depending on the return status.

Action icons available per return:

-   **Approve Return:** Approve a return that is in Draft status.
-   **Complete Return:** Mark an approved return as Completed once the items have been received.
-   **View:** Open and view the full return details.
-   **Delete:** Remove the return (available for Draft returns).

#### Create Sales Return

##### Sales Return Details:

-   **Return Date:** Select the date the return is being created.
-   **Original Invoice:** Select the original sales invoice against which the return is being processed.
-   **Warehouse:** Select the warehouse where the returned items will be received.
-   **Return Reason:** Select the reason for the return (e.g., Excess Quantity).
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
-   **Total:** Calculated automatically based on return quantity and pricing.
-   **Reason:** Optionally enter a specific reason for returning that item.

-   Click the **delete icon** to remove an item from the return list.

##### Return Summary:

-   **Subtotal:** Total return amount before tax.
-   **Tax:** Total tax applied on the return.
-   **Total Return Amount:** Final refundable amount.

Once the original invoice is selected, the items from that invoice will appear for selection. Choose the items and quantities being returned.
