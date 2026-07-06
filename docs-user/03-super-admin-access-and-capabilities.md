---
title: Super Admin Access and Capabilities
sidebar_position: 3
---
As a Super Admin in Zerp, you can manage and oversee various pivotal aspects of the platform. This section will guide you through the key features you can access and control.

### Profile Settings

-   The Profile Information section allows users to manage their account details. Upload a profile picture by clicking Browse. Enter your Name and Email in the required fields. Optionally add your Mobile Number.
-   Click the **“Save Changes”** button to apply all updates.

#### Change Password

-   The Change Password section allows users to update their account passwords. Enter your Current Password in the first field to verify your identity. Enter your desired New Password in the second field.
-   Re-enter the same password in the Confirm Password field to ensure accuracy. Click the **“Save Changes”** button to update your password.

**Note:** These profile settings are available on the Company side as well. You can update your company profile whenever needed.

#### Language Management

-   On the top-right side, you’ll find the language selector button. By clicking that button, you can select the language according to your needs. This option is visible to all types of users.
-   **Create Language:** Enter the language code, language name, or country code to add a new language to the platform.
-   The Language Management section allows users to edit translation keys and values for different languages. Select a translation source package from the left sidebar, including General, Product & Service, Project, Accounting, CMS, HRM, CRM, POS, Support Ticket, Double Entry, Financial Goal, Budget Planner, Training, Performance, Recruitment, Form Builder, Contract, Timesheet, Quotation, and AI Assistant.
-   Use the search bar to find specific translations, or select a language from the dropdown menu (default is English). Edit translation keys and their corresponding values in the table provided.
-   Click the **“Save Changes”** button to apply all updates to the selected language package.

**Note:** The custom language option is available only on the Super Admin side, while on the Company side, only the languages that have already been created are available as options.

### 3.1 Dashboard Insights

Upon logging in as a Super Admin, you’ll be greeted by a dynamic dashboard offering a holistic view of the platform’s performance.

#### 3.1.1 Dashboard Overview Metrics

The Dashboard displays four key metrics:

-   **Total Orders:** Shows the total number of orders placed on the platform. Includes all orders regardless of status.
-   **Order Payments:** Displays the total monetary value of all payments received. Amount is shown in the configured currency format.
-   **Total Plans:** Shows the number of subscription plans currently available for customers.
-   **Total Companies:** Displays the number of registered companies using the platform.

#### 3.1.2 Recent Orders (Monthly) Graph

A line chart displaying order volume across all twelve months of the year.

##### Features:

-   **Time Scale:** Monthly data points from January to December on the X-axis.
-   **Order Count:** The Y-axis shows order volume in numerical increments.
-   **Visualization:** Blue line connects monthly data points to show trends.
-   **Interaction:** Hover over any point to view the exact order count for that month.

### 3.2 User Management

Managing users is pivotal, and as a Super Admin, you have extensive controls to view, create, and manage all registered users on the platform.

#### 3.2.1 Users List Page

-   View and manage all registered users through the Manage Users interface. Click the **“Search”** button to execute the search. Switch between list view and grid view using the toggle buttons.
-   Click the **Filters** button to access advanced filtering options. Enter an email address or domain to filter users by email. Select from the dropdown to filter users by their current login status (Enabled/Disabled). Use **“Apply”** to activate filters or **“Clear”** to reset all filters.

##### User table details:

The user table displays the following information:

-   **Avatar:** User profile picture or default avatar icon.
-   **Name:** Full name or company name of the user.
-   **Email:** Registered email address.
-   **Mobile No**: Contact phone number.
-   **Role:** User role type (e.g., Company).
-   **Login Status:** Current account status (Enabled/Disabled).
-   **Actions:** Quick action buttons for user management.

Each user row includes action icons:

-   **Login As User:** Allows administrators to log in as the selected user to view their account perspective.
-   **Change Password:** Enter your current password, then enter your new password and confirm it.
-   **Edit:** Modify user details.
-   **Delete:** Remove user from the system.

#### 3.2.2 Create User

Add new users to the platform through the Create User form by filling in the required fields.

-   **Name:** Enter the user’s full name or company name.
-   **Email:** Provide a valid email address for the user account.
-   **Mobile Number:** Enter the phone number in the format +\[country code\]\[phone number\].
-   **Password:** Set the initial password for the user account.
-   **Confirm Password:** Re-enter the password to verify accuracy.
-   **Login Status:** Select the account as **“Enabled”** (active) or **“Disabled”** (inactive) from the dropdown.

### 3.3 Helpdesk Management

Managing helpdesk tickets is essential for addressing user concerns, and as a Super Admin, you have comprehensive control over the helpdesk system. The Helpdesk module contains two sections: Tickets and Categories.

#### 3.3.1 Helpdesk Ticket Management

-   View and manage all helpdesk tickets through the Manage helpdesk Tickets interface. Click the **“Search”** button to execute a search for specific tickets. Switch between list view and grid view using the toggle buttons.
-   Click the Filters button to access advanced filtering options.

-   **Status:** Select from the dropdown to filter tickets by their current status (Open, In Progress, Closed, Resolved).
-   **Priority:** Select from the dropdown to filter tickets by priority level (Low, Medium, High, Urgent).
-   **Category:** Filter tickets by their assigned category.
-   **User:** Filter tickets by the user who created them.
-   Use **“Apply”** to activate filters or **“Clear”** to reset all filters.

##### Ticket Table Information:

The ticket table displays the following columns:

-   **Ticket ID:** Unique identifier for each ticket (e.g., #12335014).
-   **Title:** Brief description of the ticket issue.
-   **Category:** Classification of the ticket type.
-   **Status:** Current ticket status with color coding (Open, In Progress, Closed, Resolved).
-   **Priority:** Urgency level with color indicators (Low, Medium, High, Urgent).
-   **Created By:** The company that submitted the ticket.
-   **Actions:** Quick action buttons for ticket management.

Each ticket row includes three action icons:

-   **View:** Opens the complete ticket details with full conversation history showing customer inquiries.
-   **Edit:** Modify the ticket information and update the status.
-   **Delete:** Remove the ticket from the system.

##### Create Helpdesk Ticket

Add new helpdesk tickets to the system through the Create Support Ticket form.

-   **Title:** Enter a clear and concise title describing the issue.
-   **Description:** Provide detailed information about the issue using the rich text editor.
-   **User:** Select the user or company associated with the ticket from the dropdown.
-   **Category:** Choose the appropriate category for the ticket (e.g., Technical Support).
-   **Priority:** Set the urgency level from the dropdown (Low, Medium, High, Urgent).

#### 3.3.2 Helpdesk Categories Management

Organize and classify helpdesk tickets by managing helpdesk categories through a centralized interface. View and manage all helpdesk categories through the Manage Helpdesk Categories interface.

-   Enter keywords in the search field to find specific categories. Click the **“Search”** button to execute the search.

##### Category Table Information:

The category table displays the following columns:

-   **Name:** Category title used for ticket classification.
-   **Description:** Brief explanation of the category’s purpose.
-   **Color:** Visual color identifier displayed with a hex code.
-   **Status:** Current category status (Active/Inactive).
-   **Actions:** Quick action buttons for category management.

Each category row includes two action icons:

-   **Edit:** Modify category details.
-   **Delete:** Remove the category from the system.

##### Create Helpdesk Category

Add new categories to organize helpdesk tickets through the Create Helpdesk Category form.

-   **Name:** Enter the category name.
-   **Description:** Provide a brief explanation of what types of tickets belong in this category.
-   **Color:** Select a color identifier for the category using the color picker. The color helps visually distinguish categories in the system.
-   **Status:** Set the category as **“Active”** or **“Inactive”** from the dropdown. Only active categories are available for ticket assignment.

### 3.4 Subscription Management

Managing subscription plans is crucial for monetizing the platform, and as a Super Admin, you have complete control over plan creation, pricing, coupon management, and order tracking. The Subscription module contains four sections: Subscription Settings, Coupons, Bank Transfer Requests, and Orders.

#### 3.4.1 Subscription Setting

View and manage all subscription plans through the centralized Subscription Setting interface. Subscription Type Tabs:

Navigate between different billing cycles using the tab options at the top of the page:

-   **Monthly:** View and manage monthly billing plans.
-   **Yearly:** View and manage annual billing plans.

##### Subscription Plans Display:

The platform displays available subscription plans in a card-based layout. Each plan card includes:

-   **Plan Name:** Title of the subscription plan.
-   **Plan Description:** Brief explanation of the target audience.
-   **Pricing:** Cost displayed prominently with billing frequency.
-   **Plan Badge:** Special labels (e.g., **“Most Popular”**) to highlight featured plans.
-   **User Limit:** Maximum number of users allowed under the plan.
-   **Storage Allocation:** Storage capacity included in the plan.
-   **Trial Period:** Duration of the trial period (if applicable).
-   **Features Section:** A list of all available modules is displayed with a check (✔) icon for included features and a cross (✖) icon for features not included in the plan.
-   Each plan card includes a three-dot menu icon with the following options:
-   **Edit:** Opens the Edit Plan form to modify the plan details.
-   **Delete:** Removes the plan from the system.

Create Plan:

-   **Quick Settings:** Configure the plan type using toggle switches.
-   **Active:** Enable or disable the plan for customer selection.
-   **Trial:** Offer a trial period for the plan.
-   **Free:** Set the plan as a free option.
-   **Plan Name:** Enter a descriptive name for the subscription plan.
-   **Max Users:** Specify the maximum number of users allowed. Enter **“-1”** for unlimited users.
-   **Storage Limit (GB):** Set the storage capacity in gigabytes for the plan.
-   **Description:** Provide a detailed description of the plan features and target audience.
-   **Features:** Select which modules to include in the plan using the checkbox grid. Use the search field to quickly find specific modules.
-   Click **“Uncheck All”** to deselect all selected modules.

#### 3.4.2 Coupon Management

Managing promotional coupons is essential for driving customer engagement, and as a Super Admin, you have full control over coupon creation, configuration, and monitoring.

##### Coupons List Page

-   View and manage all promotional coupons through the Manage Coupons interface. Use the search bar to find specific coupons and click **“Search”** to execute. Switch between list view and grid view using the toggle buttons.
-   Click the **Filters** button to access advanced filtering options.

-   **Code:** Enter a coupon code to filter by specific codes.
-   **Type:** Select from the dropdown to filter coupons by discount type (Percentage, Flat, Fixed).
-   **Status:** Choose a status to filter coupons (Active/Inactive).
-   Use **“Apply”** to activate filters or **“Clear”** to reset all filters.

##### Coupon Table Information:

The coupon table displays the following columns:

-   **Name:** Descriptive name of the promotional coupon.
-   **Code:** Unique alphanumeric code used for redemption.
-   **Discount:** Discount value or amount offered.
-   **Type:** Discount type displayed as a badge (Percentage, Flat, Fixed).
-   **Limit:** Maximum number of times the coupon can be used.
-   **Expiry Date:** Date when the coupon expires (format: YYYY-MM-DD).
-   **Status:** Current coupon status (Active/Inactive).
-   **Actions:** Quick action buttons for coupon management.

Each coupon row includes three action icons:

-   **View:** Displays the coupon usage details, including the number of times the coupon has been used, the user email address, Order ID, usage date, and user name.
-   **Edit:** Modify coupon information and settings.
-   **Delete:** Remove the coupon from the system.

##### Create Coupon

Add new promotional coupons to the platform through the Create Coupon form.

-   **Name:** Enter a descriptive name for the coupon.
-   **Code:** Enter a unique coupon code or click **“Generate”** to automatically create one.
-   **Type:** Select the discount type from the dropdown (Percentage, Flat, Fixed).
-   **Discount (%):** Enter the discount percentage or amount based on the selected type.
-   **Usage Limit:** Specify the total number of times the coupon can be redeemed.
-   **Limit Per User:** Set the maximum number of times a single user can use the coupon.
-   **Minimum Spend:** Enter the minimum purchase amount required to apply the coupon.
-   **Maximum Spend:** Enter the maximum purchase amount for coupon eligibility.
-   **Expiry Date:** Select the date when the coupon expires using the date picker.
-   **Description:** Provide additional details about the coupon terms and conditions.
-   **Active:** Toggle the switch to set the coupon as active (enabled) or inactive (disabled).

#### 3.4.3 Bank Transfer Requests

View and manage all bank transfer payment requests submitted by users through the Manage Bank Transfer Requests interface. Use the search bar to search by order number and click **“Search”** to execute.

-   Click the Filters button to access advanced filtering options.

-   **Status:** Filter requests by their current status (Pending, Approved, Rejected).
-   **User Name:** Filter requests by the name of the user who submitted them.
-   Use **“Apply”** to activate filters or **“Clear”** to reset all filters.

##### Bank Transfer Requests Table Information:

The table displays the following columns:

-   **Order Number:** Unique identifier for the bank transfer request.
-   **User:** Name and email address of the user who submitted the request.
-   **Plan:** The subscription plan associated with the request.
-   **Amount:** The payment amount submitted by the user.
-   **Status:** Current request status (Pending, Approved, Rejected).
-   **Date:** The date the request was submitted.
-   **Actions:** Quick action buttons for request management.

Each request row includes action icons:

-   **View:** Opens the full details of the bank transfer request.
-   **Approve**: Confirm and approve the bank transfer payment.
-   **Reject:** Decline the bank transfer payment request.
-   **Delete:** Remove the request from the system.

**Note:** Approve and Reject action icons are only available for requests with a Pending status.

#### 3.4.4 Orders

View and track all subscription orders placed on the platform through the Manage Orders interface. Use the search bar to search for specific orders and click **“Search”** to execute.

##### Orders Table Information:

The orders table displays the following columns:

-   **Order ID:** Unique identifier for each order.
-   **Plan:** The subscription plan was purchased.
-   **Coupon:** The coupon code applied to the order (if any).
-   **Amount:** The total amount paid for the order.
-   **Status:** Current order status (e.g., Succeeded).
-   **Payment Method:** The payment method used (e.g., Stripe, PayPal, Bank Transfer).
-   **Date:** The date the order was placed (format: YYYY-MM-DD).

### 3.5 CMS Management

The CMS module allows the Super Admin to manage and customize the public-facing landing page of Zerp. You can control everything that visitors see on your website, from company information and page layout to content, colors, and call-to-action buttons. The CMS module contains three sections: Landing Page, Custom Pages, and Newsletter Subscribers.

A Live Preview panel is available on the right side of the screen at all times, showing you exactly how your changes will look on the website before you save them.

-   You can also click the **“View Landing Page”** button at the top-right to open the live website in a new tab.
-   Once you have made any changes on any tab, click the **“Save Changes”** button at the top-right corner to apply your updates.

#### 3.5.1 Landing Page

The Landing Page Settings page is divided into six main tabs: Setup, Layout, Content, Social, Engagement, and Page. Each tab controls a different part of your landing page.

##### Setup Tab

The Setup tab contains three sub-tabs: General, Order, and Colors.

###### General

The General sub-tab allows you to enter your basic company details that will appear on the landing page.

-   **Company Name:** Enter the name of your company.
-   **Contact Email:** Enter the public contact email address.
-   **Contact Phone:** Enter the contact phone number.
-   **Contact Address:** Enter the company’s physical address.

###### Order

The Order sub-tab allows you to control which sections of the landing page are visible and in what order they appear.

-   The page is divided into 9 sections: Header, Hero, Stats, Features, Modules, Benefits, Gallery, CTA, and Footer.
-   Use the drag-and-drop handles on the left of each section to reorder them as needed.
-   Use the Enable toggle on the right of each section to show or hide that section on the landing page.

###### Colors

The Colors sub-tab allows you to set the color theme of your landing page.

-   Primary Color: Set the main color used across the landing page.
-   Secondary Color: Set the supporting color used for accents and highlights.
-   Accent Color: Set an additional color for specific design elements.
-   Color Presets: Choose from five ready-made color themes, Green, Blue, Purple, Orange, or Red, to instantly apply a full color scheme.

##### Layout Tab

The Layout tab controls the structure and content of the Header, Hero section, and Footer of the landing page. It contains three sub-tabs: Header, Hero, and Footer.

###### Header

The Header sub-tab allows you to configure the navigation bar that appears at the top of your landing page.

-   **Enable Section:** Toggle to show or hide the header on the landing page
-   **Header Variant:** Select the style of the header from the dropdown (e.g., Standard).
-   **Company Name:** Enter the name to display in the header.
-   **CTA Button Text:** Enter the text for the call-to-action button in the header (e.g., **“Get Started”**).
-   **Display Options:** Toggle on **“Enable Pricing Link”** to show a pricing link in the navigation menu.
-   **Navigation Menu:** Add and manage the links that appear in the header navigation.

-   **Menu Text:** Enter the label for the navigation item (e.g., **“Home”**, **“About Us”**).
-   **Type:** Select whether the item links to an external Link or an internal Page.
-   **URL/Page:** Enter the URL or select the page for the navigation item.
-   **Open in New Tab:** Tick this checkbox to open the link in a new browser tab.
-   Click **” Add Navigation Item”** to add more navigation links.

###### Hero

The Hero sub-tab allows you to configure the main banner section that visitors see first on your landing page.

-   **Enable Section:** Toggle to show or hide the hero section
-   **Hero Variant:** Select the layout style for the hero section (e.g., Image Left Split).
-   **Hero Title:** Enter the main headline for the hero section.
-   **Hero Subtitle:** Enter the supporting text displayed below the headline.
-   **Primary Button Text:** Enter the label for the main action button (e.g., **“Start Free Trial”**).
-   **Primary Button Link:** Enter the URL that the primary button will direct users to.
-   **Secondary Button Text:** Enter the label for the secondary action button (e.g., **“Login”**).
-   **Secondary Button Link:** Enter the URL that the secondary button will direct users to.
-   **Hero Image:** Click **“Browse”** to upload the image displayed in the hero section.

###### Footer

The Footer sub-tab allows you to configure the bottom section of your landing page.

-   **Enable Section:** Toggle to show or hide the footer.
-   **Footer Variant:** Select the style of the footer from the dropdown (e.g., Standard).
-   **Company Description:** Enter a brief description of your company to display in the footer.
-   **Newsletter Title:** Enter the heading for the newsletter sign-up area (e.g., **“Join Our Community”**).
-   **Newsletter Description:** Enter a short description encouraging visitors to subscribe.
-   **Newsletter Button Text:** Enter the label for the subscribe button (e.g., **“Subscribe”**).
-   **Copyright Text:** Enter the copyright notice to display at the bottom of the page.
-   **Navigation Sections:** Add footer navigation groups with a Section Title and individual links.

-   **Menu Text:** Enter the label for the footer link.
-   **Type:** Select whether the item links to an external Link or an internal Page.
-   **URL/Page:** Enter the URL or select the page for the link.
-   Click **” Add Navigation Section”** to add more footer navigation groups.
-   **Open In New Tab:** When check it, the link opens in a new browser tab; otherwise, it opens in the current tab.

##### Content Tab

The Content tab allows you to manage the main content sections displayed on the landing page. It contains three sub-tabs: Features, Modules, and Benefits.

###### Features

The Features sub-tab allows you to showcase the key features of your product on the landing page.

-   **Enable Section:** Toggle to show or hide the features section
-   **Features Variant:** Select the layout style for the features section (e.g., Grid).
-   **Section Title:** Enter the heading for the features section (e.g., **“Powerful Features”**).
-   **Section Subtitle:** Enter a short supporting description below the heading.
-   **Features List:** Add and manage individual feature items.

-   **Feature Title:** Enter the name of the feature (e.g., **“ERP System”**).
-   **Feature Description:** Enter a brief description of the feature.
-   **Icon:** Select an icon to represent the feature from the dropdown.
-   Click **“Add Feature”** to add more features to the list.

###### Modules

The Modules sub-tab allows you to showcase your business modules in a tabbed layout on the landing page.

-   **Enable Section:** Toggle to show or hide the modules section
-   **Modules Variant:** Select the layout style for the modules section (e.g., Tabs).
-   **Section Title:** Enter the heading for the modules section (e.g., **“Complete Business Solutions”**).
-   **Section Subtitle:** Enter a short supporting description below the heading.
-   **Modules List:** Add and manage individual module items.

-   **Module Key:** Enter the system key for the module (e.g., **“hrm”**).
-   **Module Label:** Enter the display label for the module tab (e.g., **“Human Resources”**).
-   **Module Title:** Enter the title displayed within the module section (e.g., **“HRM System”**).
-   **Module Description:** Enter a detailed description of what the module does.
-   **Module Image:** Click **“Browse”** to upload an image representing the module.
-   Click **” Add Module”** to add more modules to the list.

###### Benefits

The Benefits sub-tab allows you to highlight the key reasons why customers should choose your platform.

-   **Enable Section:** Toggle to show or hide the benefits section
-   **Benefits Variant:** Select the layout style for the benefits section (e.g., Accordion).
-   **Section Title:** Enter the heading for the benefits section (e.g., **“Why Choose Zerp?”**).
-   **Benefits List:** Add and manage individual benefit items.

-   **Benefit Title:** Enter the title of the benefit (e.g., **“Unified Business Ecosystem”**).
-   **Benefit Description:** Enter a detailed description of the benefit.
-   Click **“Add Benefit”** to add more benefits to the list.

##### Social Tab

The Social tab allows you to manage the Statistics and Image Gallery sections of the landing page. It contains two sub-tabs: Stats and Gallery.

###### Stats

The Stats sub-tab allows you to display key business metrics and numbers on your landing page.

-   **Enable Section:** Toggle to show or hide the statistics section
-   **Stats Variant:** Select the visual style for the statistics section (e.g., Colored Background).
-   **Statistics:** Add and manage individual statistic items.

-   **Label:** Enter the description of the statistic (e.g., **“Businesses Trust Us”**).
-   **Value:** Enter the value to display (e.g., **“20,000+”**).
-   Click **“Add Statistic”** to add more statistics.

###### Gallery

The Gallery sub-tab allows you to display a product image showcase on your landing page.

-   **Enable Section:** Toggle to show or hide the gallery section
-   **Gallery Variant:** Select the layout style for the gallery (e.g., Slider).
-   **Section Title:** Enter the heading for the gallery section.
-   **Section Subtitle:** Enter a short supporting description below the heading.
-   **Gallery Images:** Add and manage the images displayed in the gallery.

-   **Image:** Click **“Browse”** to upload each gallery image.
-   Click **” Add Image”** to add more images to the gallery.

##### Engagement Tab

The Engagement tab contains the CTA (Call to Action) sub-tab, which allows you to configure the final conversion section of the landing page to encourage visitors to take action.

-   **Enable Section:** Toggle to show or hide the CTA section
-   **CTA Variant:** Select the layout style for the CTA section (e.g., Centered).
-   **Main Title:** Enter the main headline for the CTA section (e.g., **“Ready to Transform Your Business?”**).
-   **Subtitle:** Enter the supporting text below the headline.
-   **Primary Button Text:** Enter the label for the main action button (e.g., **“Start Free Trial”**).
-   **Primary Button Link:** Enter the URL that the primary button will direct users to.
-   **Secondary Button Text:** Enter the label for the secondary action button (e.g., **“Contact Sales”**).
-   **Secondary Button Link:** Enter the URL that the secondary button will direct users to.
-   Use the Enable Section toggle to show or hide the CTA section on the landing page.

##### Page Tab

The Page tab contains the Pricing sub-tab, which allows you to configure the pricing page that visitors see when they click on your pricing link.

-   **Page Title:** Enter the heading for the pricing page (e.g., **“Flexible Pricing Plans”**).
-   **Page Subtitle:** Enter the supporting description below the heading.
-   **Default Subscription Type:** Select the default subscription type displayed on the pricing page (e.g., Pre Package Subscription).
-   **Default Price Type:** Select whether prices are displayed as Monthly or Yearly by default.
-   **Empty State Message:** Enter the message displayed when no plans are available (e.g., **“No plans available. Check back later for new pricing plans.”**).

###### Display Options:

-   **Show Pre Package Subscription:** Toggle on to display pre-packaged subscription plans on the pricing page.
-   **Show Monthly/Yearly Toggle:** Toggle on to allow visitors to switch between monthly and yearly pricing on the pricing page.

#### 3.5.2 Custom Pages

The Custom Pages section allows the Super Admin to create and manage additional standalone pages for the website, such as Terms of Service, Privacy Policy, FAQ, About Us, and Help Center.

-   View and manage all custom pages through the Manage Custom Pages interface. Enter keywords in the search field to find a specific page and click **“Search”** to execute.

##### Custom Pages Table Information:

The table displays the following columns:

-   **Title:** The name of the custom page.
-   **URL Slug:** The URL-friendly path for the page (e.g., /about-us, /privacy-policy).
-   **Status:** Current page status (Active/Inactive).
-   **Last Updated:** The date the page was last modified.
-   **Actions:** Quick action buttons for page management.

Each page row includes action icons:

-   **View:** Opens the page to preview its content.
-   **Edit:** Opens the page editor to modify the page content and settings.
-   **Delete:** Removes the page from the system.

**Note:** Some default system pages, such as Terms of Service and Privacy Policy, do not have a Delete option as they are essential pages for the platform.

##### Create Custom Page

Add new custom pages to the website through the Create Custom Page form. Click the **“Create”** button at the top-right corner of the Manage Custom Pages page to open the form.

###### Page Details:

-   **Page Title:** Enter the title of the page (e.g., **“About Us”**, **“Privacy Policy”**).
-   **URL Slug:** This is automatically generated from the page title. You can customize it to create a unique URL-friendly name (e.g., about-us, privacy-policy).
-   **Active:** Toggle this switch on to make the page visible on the website, or off to keep it hidden.

###### Page Content:

**Page Content:** Write the content of your page in the editor.

**Note:** When writing HTML content, do not include HTML, head, or body tags. Only write the content that goes inside the page body.

###### SEO Settings:

-   **Meta Title:** Enter an SEO-friendly title for the page to appear in search engine results. Recommended length is 50-60 characters.
-   **Meta Description:** Enter a brief description of the page for search engine results. Recommended length is 150-160 characters.

Once all details are filled in, click the **“Save Page”** button at the top-right corner to publish the page.

**Note: “Preview”** option is only available in edit action, so you can see changes before publishing; to view the live page, open it outside edit mode.

#### 3.5.3 Newsletter Subscribers

The Newsletter Subscribers section allows the Super Admin to view and manage all users who have subscribed to the newsletter through the landing page.

-   View and manage all subscribers through the Manage Newsletter Subscribers interface. Enter keywords in the search field to find a specific subscriber and click **“Search”** to execute. Click the download icon at the top-right corner to export the subscribers list.

##### Subscribers Table Information:

The table displays the following columns:

-   **Email:** The email address of the subscriber.
-   **IP Address:** The IP address from which the subscription was made.
-   **Location & Device:** Displays the subscriber’s location, browser, device type, ISP, organisation, and timezone.
-   **Subscribed At:** The date the use r subscribed (format: YYYY-MM-DD).
-   **Actions:** Quick action button for subscriber management.

Each subscriber row includes one action icon:

-   **Delete:** Removes the subscriber from the list.

### 3.6 Email Templates

The Email Templates section allows the Super Admin to manage and customize the automated email notifications sent by the platform for various modules and events.

-   View and manage all email templates through the Manage Email Templates interface. Enter keywords in the search field to find a specific template and click **“Search”** to execute.
-   Click the **Filters** button to access filtering options.

-   **Module:** Select a module from the dropdown to filter templates by their associated module (e.g., Recruitment, Support Ticket, CRM).
-   Use **“Apply”** to activate the filter or **“Clear”** to reset it.

#### Email Templates Table Information:

The table displays the following columns:

-   **Name:** The name of the email template (e.g., Offer Letter, New Ticket, Deal Moved).
-   **Module:** The module the template belongs to (e.g., Recruitment, Support Ticket, CRM).
-   **Actions:** Quick action button for template management.

Each template row includes one action icon:

-   **Edit:** Click the Edit to open and modify the template content. Under the Edit action, you can use the language option by selecting.

**Note:** Email templates cannot be created or deleted. You can only edit the existing templates that are pre-assigned to each module.

### 3.7 Notification Templates

The Notification Templates section allows the Super Admin to manage and customize the automated notification messages sent through third-party messaging platforms.

The page is divided into three tabs: Slack, Telegram, and Twilio. Each tab works in the same way but sends notifications through a different channel.

-   **Slack:** Manages notification templates sent to your team via the Slack messaging platform.
-   **Telegram:** Manages notification templates sent via the Telegram messaging app.
-   **Twilio:** Manages notification templates sent via SMS through the Twilio platform.

All three tabs share the same layout and functionality:

Enter keywords in the search field to find a specific template and click **“Search”** to execute. Notification Templates Table Information:

The table displays the following columns:

-   **Subject:** The name of the notification event (e.g., New User, New Sales Invoice, New Customer).
-   **Module:** The module the notification belongs to (e.g., general, Accounting, CRM).
-   **Actions:** Quick action button for template management.

Each template row includes one action icon:

-   **Edit:** Opens the template editor to customize the notification message for that event. You also can use the language option by selecting.

**Note:** Notification templates cannot be created or deleted. You can only edit the existing templates. Make sure the relevant third-party integration (Slack, Telegram, or Twilio) is configured in Settings before notifications can be sent.

### 3.8 Media Library Management

Managing the media library is essential for storing and organizing files, images, and other media assets used across the platform, and as a Super Admin, you have complete control over file management.

#### 3.8.1 Media Library Overview

View and manage all media files through the Manage Media Library interface.

##### Page Actions:

-   Click **“New Folder”** to create a new folder for organizing your media files.
-   You can create multiple folders and upload specific files into each folder.
-   All uploaded files can also be viewed under the **“All Files”** folder.
-   Click **“Upload Files”** to upload new media files to the library.
-   In the Upload Files pop-up, drag and drop your files into the upload area, or click **“Choose Files”** to browse and select files from your device.

##### Breadcrumb Navigation:

The breadcrumb at the top of the page displays your current location within the media library. Click the home icon to return to the main Media Library at any time.

###### Search and Media Statistics:

-   Enter keywords in the search field to find specific media files.
-   View real-time statistics displayed at the top-right corner:

-   **Files:** Total number of files in the current location.
-   **Storage:** Total storage space used.
-   **Images:** Total number of image files.

###### Folder Actions:

Each folder card has a menu that gives you the following options:

-   **Edit:** Rename the folder.
-   **Delete:** Remove the folder from the media library.

###### File Actions:

When you open a folder and click on a file, the following actions are available:

-   **Download:** Export and download the media file to your device.
-   **View Info:** View the full details and information about the file.
-   **Copy Link:** Copy the direct link of the file to use elsewhere on the platform.
-   **Delete:** Remove the file from the media library.

**Note:** In the media library, the super admin can view images from all companies. However, on the company side, each company can only see the images that belong specifically to them.

### 3.9 Settings Management

Managing system settings is essential for configuring platform-wide options, and as a Super Admin, you have complete control over all configuration settings.

The Settings page is organized into the following categories in the left sidebar: Brand Settings, System Settings, Currency Settings, Cookie Settings, Pusher Settings, SEO Settings, Cache Settings, Storage Settings, Email Settings, Email Notification Settings, Google reCAPTCHA Settings, Webhook Settings, Bank Transfer Settings, Stripe Settings, and PayPal Settings.

#### 3.9.1 Brand Settings

Customize your application’s branding and appearance. A Live Preview panel on the right side of the page shows how your changes will look in real time.

##### Brand Settings has three tabs:

###### Logos Tab:

-   **Logo (Dark Mode):** Upload the logo displayed when the application is in dark mode. Click **“Browse”** to select a file or click **“X”** to remove the current logo.
-   **Logo (Light Mode):** Upload the logo displayed when the application is in light mode. Click **“Browse”** to select a file or click **“X”** to remove the current logo.
-   **Favicon:** Upload the small icon displayed in the browser tab. Click **“Browse”** to select a file or click **“X”** to remove the current favicon.

###### Text Tab:

Configure the application title and footer copyright text displayed throughout the platform.

-   **Title Text:** Enter the application title that will be displayed in the browser tab.
-   **Footer Text:** Enter the text that will appear in the footer section across the platform.

###### Theme Tab:

-   **Theme Color:** Select a theme color for your application from the available preset color options.
-   **Custom Color:** Enter a custom hex color code also available selection option(e.g., #10b981) to apply a personalized theme color to your application.
-   **Sidebar Variant:** Choose how the sidebar is displayed.

-   **Inset:** Sidebar embedded within the page layout (selected by default with a checkmark)
-   **Floating:** Sidebar appears as a floating panel
-   **Minimal:** Compact sidebar with minimal styling

-   **Sidebar Style:** Select the sidebar appearance.

-   **Plain:** Simple, flat sidebar design (selected by default with checkmark)
-   **Colored:** Sidebar with color-filled background
-   **Gradient:** Sidebar with gradient color effect

-   **Layout Direction:** Set the layout direction of the application.

-   **Left-to-Right:** Standard left-to-right layout (selected by default with checkmark)
-   **Right-to-Left:** Right-to-left layout for RTL languages

-   **Theme Mode:** Choose the display mode.

-   **Light:** Light color theme (selected by default with a checkmark)
-   **Dark:** Dark color theme
-   **System:** Automatically match system theme preferences

-   **Live Preview:** A real-time preview of your selected theme and layout settings is displayed on the right side of the page.
-   Click **“Save Changes”** to apply all brand settings.

#### 3.9.2 System Settings

Configure system-wide settings for your application. When a new company is created, these defaults are automatically applied.

-   **Default Language:** Select the default language for the platform from the dropdown.
-   **Date Format:** Choose the date display format (e.g., YYYY-MM-DD).
-   **Time Format:** Select 12-hour or 24-hour time format.
-   **Calendar Start Day:** Select the first day of the week from the dropdown (e.g., Sunday).
-   **Terms & Conditions URL:** Enter the URL for the Terms & Conditions page (e.g., https://example.com/terms).
-   **Enable Registration:** Toggle on to allow new users to register accounts on the platform.
-   **Enable Email Verification:** Toggle on to require email verification for new user accounts.
-   **Enable Landing Page:** Toggle on to make the landing page accessible to visitors.
-   Click **“Save Changes”** to apply all system settings.

#### 3.9.3 Currency Settings

Configure how currency values are displayed throughout the application. A live preview at the top of the section shows how the format will appear based on your selections.

-   **Default Currency:** Select your preferred currency from the dropdown list (e.g., USD US Dollar).
-   **Symbol Position:** Choose whether the currency symbol appears before ($100) or after (100$) the amount.
-   **Thousands Separator:** Select how thousands are separated (e.g., Comma: 1,233.56).
-   Decimal Places: Choose the number of decimal places to display (e.g., 2 for 1233.56).
-   **Decimal Separator:** Select between Dot (123.45) or Comma (123,45) as the decimal separator.
-   **Show Decimals:** Toggle on to display decimal places in amounts, or off to hide them.
-   **Add Space:** Toggle on to add a space between the amount and the currency symbol.
-   Click **“Save Changes”** to apply all currency settings.

#### 3.9.4 Cookie Settings

Configure cookie consent and privacy settings for your platform visitors.

-   **Enable Cookie Popup:** Toggle on to show the cookie consent pop-up to visitors.
-   **Enable Logging:** Toggle on to record cookie-related user activity for auditing and compliance.
-   **Strictly Necessary Cookies:** Toggle on to allow essential cookies required for core website functionality.
-   **Cookie Title:** Enter the title that appears on the cookie consent pop-up (e.g., **“We use cookies!”**).
-   **Cookie Description:** Add a description explaining how cookies are used on the website.
-   **Strictly Cookie Title:** Enter the heading shown for strictly necessary cookies (e.g., **“Strictly Necessary Cookies”**).
-   **Strictly Cookie Description:** Provide details explaining why strictly necessary cookies are required.
-   **Contact Us Description:** Enter the message displayed for users who want more information about the cookie policy.
-   **Contact Us URL:** Provide the link where users can contact support or view detailed cookie information.
-   Click **“Download Cookie Data”** to export all stored cookie-related data.
-   Click **“Save Changes”** to apply all cookie settings.

#### 3.9.5 Pusher Settings

Configure Pusher for real-time messaging and notifications. Pusher enables instant messaging, real-time notifications, and live updates in your application. You can get your Pusher credentials from pusher.com.

-   **App ID:** Enter your Pusher application ID.
-   **App Key:** Enter your Pusher application key.
-   **App Secret:** Enter your Pusher secret key.
-   **App Cluster:** Enter your Pusher cluster region (e.g., mt1).
-   Click **“Save Changes”** to apply the Pusher configuration.

#### 3.9.6 SEO Settings

Configure SEO settings to improve your website’s search engine visibility. An SEO Preview panel on the right shows how your page will appear in search engine results and on social media.

-   Meta Title: Enter the title that appears as the clickable headline in search results. Recommended length is 50-60 characters.
-   **Meta Description:** Enter a brief summary of the page for search results. Optimal length is 120-160 characters.
-   **Meta Keywords:** Enter comma-separated keywords relevant to your content (e.g., Zerp, dashboard, admin, panel).
-   **Meta Image:** Upload an image to display when the page is shared on social media. Recommended size is 1200x630px.
-   Click **“Save Changes”** to apply all SEO settings.

#### 3.9.7 Cache Settings

Manage application cache to improve performance. This section is intended for advanced users.

-   **Current Cache Size:** Displays the total size of cached data currently stored (e.g., 0.33 MB).
-   **Clearing the cache will remove:** Application cache, Route cache, View cache, and Configuration cache.
-   Click **“Clear Cache”** to remove all cached data from the platform.
-   Click **“Optimize Site”** to run site optimization.

#### 3.9.8 Storage Settings

Configure file storage settings for your application. The section has three tabs for different storage providers:

##### Local Storage

-   **Allowed File Types:** Check the file types permitted for upload. Use the search bar to find specific types. Click Select All to enable all or Unselect All to clear selections.
-   **Max Upload Size (KB):** Enter the maximum allowed file upload size in kilobytes

##### AWS S3

-   **AWS Access Key ID:** Enter your AWS access key ID
-   **AWS Secret Access Key:** Enter your AWS secret access key
-   **AWS Default Region:** Enter the AWS region (e.g., us-east-1)
-   **AWS Bucket:** Enter the S3 bucket name
-   **AWS URL:** Enter the S3 base URL
-   **AWS Endpoint:** Enter the S3 endpoint URL
-   **Allowed File Types:** Select permitted file types as above
-   **Max Upload Size (KB):** Enter the maximum file upload size

##### Wasabi

-   **Wasabi Access Key:** Enter your Wasabi access key
-   **Wasabi Secret Key:** Enter your Wasabi secret key
-   **Wasabi Region:** Enter the Wasabi region
-   **Wasabi Bucket:** Enter the Wasabi bucket name
-   **Wasabi URL:** Enter the Wasabi service URL
-   **Wasabi Root:** Enter the root directory path
-   **Allowed File Types:** Select permitted file types as above
-   **Max Upload Size (KB):** Enter the maximum file upload size
-   Click **“Save Changes”** to apply.

#### 3.9.9 Email Settings

Configure email server settings for system notifications and communications.

-   **Email Provider:** Select your email service provider from the dropdown (e.g., SMTP).
-   **Mail Driver:** Enter the mail driver protocol (e.g., smtp).
-   **SMTP Host:** Enter your SMTP server address (e.g., smtp.example.com).
-   **SMTP Port:** Enter the port number for your SMTP connection (e.g., 587).
-   **SMTP Username:** Enter your email account username (e.g., user@example.com).
-   **SMTP Password:** Enter your SMTP account password.
-   **Mail Encryption:** Choose the encryption method (e.g., TLS, SSL, or None).
-   **From Address:** Set the default sender email address for all outgoing emails (e.g., noreply@example.com).

##### Test Email Configuration:

-   **Send Test To:** Enter a recipient email address to verify that your email settings are working correctly, then click **“Send Test Email”**.
-   Click **“Save Changes”** to apply all email settings.

#### 3.9.10 Email Notification Settings

-   The Email Notification Settings page allows you to control which email notifications are sent from the system. Notifications are organized General tab. Toggle each notification on or off as needed.

##### General

Toggle on or off the following email notifications:

-   **New User:** Notify when a new user is created.
-   **New Helpdesk Ticket:** Notify when a new helpdesk ticket is created.
-   **New Helpdesk Ticket Reply:** Notify when a reply is added to a helpdesk ticket.
-   Click **“Save Changes”** to apply all updates.

##### CRM

Toggle on or off the following email notifications:

-   **Deal Assigned:** Notify when a deal is assigned.
-   **Deal Moved:** Notify when a deal is moved to another stage.
-   **New Task:** Notify when a new task is created.
-   **Lead Assigned:** Notify when a lead is assigned.
-   **Lead Moved:** Notify when a lead is moved.
-   **Lead Emails:** Notify for lead-related emails.
-   **Deal Emails:** Notify for deal-related emails.

##### Support Ticket

Toggle on or off the following email notifications:

-   **New Ticket:** Notify when a new support ticket is created.
-   **New Ticket Reply:** Notify when a reply is added to a support ticket.

##### Recruitment

Toggle on or off the following email notification:

-   **Application Received:** Notify when a new job application is received.
-   Click **“Save Changes”** to apply all updates.

#### 3.9.11 Google reCAPTCHA Settings

Configure Google reCAPTCHA for form protection to prevent spam and automated submissions.

-   **Enable reCAPTCHA:** Toggle on to enable Google reCAPTCHA protection on forms.
-   **reCAPTCHA Version:** Select the version to use — reCAPTCHA v2 (checkbox) or v3 (invisible).
-   **Site Key:** Enter the public site key from the Google reCAPTCHA console.
-   **Secret Key:** Enter the secret key from the Google reCAPTCHA console.
-   **To get your Google reCAPTCHA keys:** go to the Google reCAPTCHA Admin Console, click **“Create”** to create a new site, enter a label and select the reCAPTCHA type, add your domain to the domains list, accept the terms and submit, then copy the Site Key and Secret Key into the fields above.
-   Click **“Save Changes”** to apply the reCAPTCHA settings.

#### 3.9.12 Webhook Settings

-   Configure webhooks to receive real-time notifications when events occur in your system.
-   Click **“Add Webhook”** to configure a new webhook endpoint. All configured webhooks are listed under the **“Configured Webhooks”** section.
-   **Method:** Select the request method from the dropdown (GET, POST).
-   **Event:** Select the event that will trigger the webhook notification. The available events are grouped by category:
-   **General:** New User
-   **Webhook URL:** Enter the URL where webhook notifications should be sent.
-   Click **“Create Webhook”** to save the webhook, or **Cancel** to discard.

**Note:** If no webhooks have been added yet, the list will display **“No webhooks configured yet. Add your first webhook to get started.”** Add your first webhook to start receiving event notifications.

#### 3.9.13 Bank Transfer Settings

Configure the bank transfer payment method for your customers.

-   **Enable Bank Transfer:** Toggle on to allow customers to pay via bank transfer. Once enabled, the bank transfer details will be visible on the Subscription page.
-   **Bank Transfer Instructions:** Enter your bank details and payment instructions (e.g., Bank name and Account Number). You can use br/ tags for line breaks. A Customer Preview section below the field shows exactly how the instructions will appear to customers.
-   Click **“Save Changes”** to apply the bank transfer settings.

#### 3.9.14 Stripe Settings

Configure the Stripe payment gateway for your platform.

-   **Enable Stripe:** Toggle on to enable or disable the Stripe payment gateway.
-   **Stripe Key:** Enter your Stripe publishable key for client-side integration.
-   **Stripe Secret Key:** Enter your Stripe secret key for server-side integration.
-   **To get your Stripe API keys:** go to the Stripe Dashboard, sign in or create a new account, navigate to Developers > API keys, copy the Publishable key to the Stripe Key field, and copy the Secret key to the Stripe Secret Key field. Use test keys for development and live keys for production.
-   Click **“Save Changes”** to apply the Stripe settings.

#### 3.9.15 PayPal Settings

Configure the PayPal payment gateway for your platform.

-   **Enable PayPal:** Toggle on to enable or disable the PayPal payment gateway.
-   **PayPal Mode:** Select the mode for your integration:

-   **Sandbox:** Use sandbox credentials for development and testing.
-   **Live:** Use live credentials for production.

-   **PayPal Client ID:** Enter your PayPal client ID for API integration.
-   **PayPal Secret Key:** Enter your PayPal secret key for secure API communication.
-   **To get your PayPal API credentials:** go to PayPal Developer, sign in or create a new account, navigate to My Apps & Credentials, create a new app or select an existing one, copy the Client ID and Secret from your app, and select **“Sandbox”** mode for testing or **“Live”** mode for production.
-   Click **“Save Changes”** to apply the PayPal settings.
