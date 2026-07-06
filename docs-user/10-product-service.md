---
title: Product & Service
sidebar_position: 10
---
The Product & Service module lets you manage your inventory items and configure the reference data used across the system.

### 10.1 Items

The Items page displays all products and parts in your inventory.

-   **Image:** thumbnail of the item
-   **Name:** item name, sortable by column header
-   **SKU:** unique stock-keeping unit code assigned to the item
-   **Sale Price:** price at which the item is sold
-   **Purchase Price:** price at which the item was purchased
-   **Category:** product category assigned to the item
-   **Unit:** unit of measurement for the item
-   **Quantity:** current stock count
-   **Type:** indicates whether the item is a Product or a Part
-   **Actions:** view, edit, or delete the item

Use the search bar to find items by name. Use the Filters option to narrow results by Item Type or Category, then click Apply. Click Clear to reset filters. Toggle between list and grid view using the icons at the top right. Use the **“Add Stock”** button to add stock to an existing product, or select **“Create”** to add a new item.

#### 10.1.1 Add Stock

The Product Stock page displays the current stock levels for all products, showing the **Name**, **SKU**, and **Quantity** for each item. Use the **search bar** to find a specific product by name.

-   Click the **“+”** (Add Stock) icon in the Actions column to add stock for a specific product.
-   **Product Name:** pre-filled with the selected item name (read-only)
-   **SKU:** pre-filled with the item SKU (read-only)
-   **Warehouse:** select the warehouse to add stock to
-   **Quantity:** enter the quantity to add

#### 10.1.2 Create Item

To create a new item, click the **“Create”** button on the Manage Items page. The Create Item form is split across four steps. Use Next to proceed and Previous to go back.

##### Step 1 – Basic Details

-   **Item Type:** select Product or Part, service.
-   **Name:** enter the item name (required)
-   **SKU:** enter a SKU manually or click Generate to auto-generate one (required)
-   **Tax:** select the applicable tax (required)
-   **Category:** select the product category (required)
-   **Short Description:** enter a brief summary of the item
-   **Description:** enter a full description using the rich text editor

##### Step 2 – Pricing and Stock

-   **Sale Price:** enter the selling price (required)
-   **Purchase Price:** enter the purchase/cost price (required)
-   **Unit:** select the unit of measurement (required)
-   **Quantity:** enter the initial stock quantity (required)

**Note:** When a product or part is selected, the quantity field is displayed. However, when a service is selected, the **“quantity”** field is not shown.

##### Step 3 – Images

-   **Product Image:** click Browse to upload the main item image
-   **Additional Images:** click Browse to upload one or more additional images

##### Step 4 – Warehouse

-   **Warehouse:** select the warehouse where the item will be stored (required)

**Note:** When a product or part is selected, the warehouse field is displayed. However, when a service is selected, the **“warehouse”** field is not shown.

### 10.2 System Setup

System Setup lets you configure the core reference data used across the module, including categories, taxes, and units.

#### 10.2.1 Category

The Category section displays all product categories with their assigned colors.

-   **Category:** name of the product group (e.g., Food & Beverages, Electronics & Technology)
-   **Color:** color swatch assigned to the category for visual identification
-   **Action:** edit or delete an existing category

To add a category, click the **“Create”** button. The Create Category form will open.

-   **Name:** enter the category name (required)
-   **Color:** click the color swatch to select a color

#### 10.2.2 Taxes

The Taxes section lists all tax types and their applicable rates.

-   **Tax Name:** name of the tax (e.g., GST, VAT, Service Tax)
-   **Rate (%):** percentage rate applied for that tax
-   **Action:** edit or delete an existing tax entry

To add a tax, click the **“Create”** button. The Create Tax form will open.

-   **Tax Name:** enter the name of the tax
-   **Rate (%):** enter the rate as a number (default is 0)

#### 10.2.3 Units

The Units section lists all units of measurement used for products and inventory.

-   **Unit Name:** name of the unit (e.g., Kilogram, Liter, Crate)
-   **Action:** edit or delete an existing unit

To add a unit, click the **“Create”** button. The Create Unit form will open.

-   **Unit Name:** enter the unit name
