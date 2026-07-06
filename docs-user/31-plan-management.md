---
title: Plan Management
sidebar_position: 31
---
The Plan module allows the Company Admin to view available subscription plans, subscribe to a plan, track bank transfer payment requests, and review order history.

### 31.1 Setup Subscription Plan

The Subscription Setting page displays all available plans and allows the Company Admin to choose and subscribe to a plan that suits their business needs.

Plans will be created and managed exclusively from the Super Admin panel. All plans added by the Super Admin will be available on the Company panel for subscription.

The plan structure and configuration will remain consistent across both panels, create/update operations are restricted to Super Admin, while Company users have read-only access with subscription capability.

-   A feature comparison table below the plans shows which modules are included in each plan with checkmarks.
-   Click Subscribe to Plan to proceed with a paid plan, or Start Trial to begin a free trial period.

#### Subscribing to a Plan:

When subscribing, the Subscribe to Plan page displays the following:

-   **Plan Details:** Shows the number of users, storage allocation, and plan expiry date.
-   **Available Features:** Lists all modules included in the selected plan.
-   **Coupon Code:** Enter a coupon code and click Apply to apply a discount.
-   **Payment Method:** Select from Bank Transfer, PayPal, or Stripe.
-   If Bank Transfer is selected, bank account details are shown, and a payment receipt upload field appears.
-   Click Subscribe to Plan to confirm and complete the subscription.

### 31.2 Bank Transfer Requests

The Manage Bank Transfer Requests page allows the Company Admin to track the status of subscription payments made via bank transfer.

-   Use the search field to find a request by order number and click Search to execute.
-   Click Filters to filter requests by Status (Pending, Rejected) or User Name, then click Apply to activate or Clear to reset.
-   **Table Information:** The table displays Order Number, User, Plan, Amount, Status, Date, and Actions.
-   **Status badges:** Pending (Yellow), Rejected (Red).
-   **Action Options:** Each request includes options to View details and Delete the request.

### 31.3 Orders

The Manage Orders page provides a full history of all subscription orders placed by the company.

-   Use the search field to find a specific order and click Search to execute.
-   **Table Information:** The table displays Order ID, Plan, Coupon (if applied), Amount, Status, Payment Method, and Date.
-   **Status badges:** Succeeded (Green).
-   Payment methods shown include Stripe, PayPal, and Bank Transfer.
