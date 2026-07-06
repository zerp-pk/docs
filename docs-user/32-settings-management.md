---
title: Settings Management
sidebar_position: 32
---
Company Admins can configure platform options through the **Settings** page based on their organization’s needs. It includes categories such as Brand, System, Company, Currency, Support, Email, Notifications, and integrations like Slack, Telegram, Zoom, Google Calendar, Stripe, PayPal, and AI Assistant settings.

### 32.1 Common Configuration Settings

Several settings on the Company side work exactly the same as at the Super Admin level, making things straightforward to configure. **Brand Settings** let you personalize your logo, theme, and layout, while **System Settings** cover your preferred language, date, time format, and calendar start day.

**Currency Settings** control how amounts are displayed across the platform, and **Email Settings** ensure all system communications are delivered reliably. With **Email Notification Settings**, you can control which events trigger alerts across modules like General, CRM, Support Ticket, and Recruitment.

**Webhook Settings** keep your external systems connected with real-time event updates, and both **Stripe** and **PayPal Settings** allow you to enable payment gateways so your customers can pay quickly and securely.

### 32.2 Company Settings

Configure your company’s core information and details used across the platform.

-   **Company Name:** Enter the registered name of your company.
-   **Registration Number:** Enter your company’s official registration number.
-   **Company Address:** Enter the full street address of your company.
-   **City:** Enter the city where your company is located.
-   **State:** Enter the state or province.
-   **Country:** Enter the country of your company.
-   **Zip Code:** Enter the postal or ZIP code.
-   **Telephone:** Enter the primary contact phone number for your company.
-   **Company Email:** Enter the official company email address.
-   **Email From Name:** Enter the name that appears in the **“From”** field of all system-generated emails.
-   **Tax Number:** Toggle on to enable the tax number, then select the type, VAT Number or GST Number, and enter the corresponding value.
-   Click **“Save Changes”** to apply all company settings.

### 32.3 Support Setting

Configure the support ticket module settings and customize the fields displayed on your support ticket form.

-   **Enable FAQ:** Toggle on to make the FAQ section visible and accessible to users.
-   **Knowledge Base:** Enable toggle to activate the Knowledge Base functionality for your company.
-   **Ticket Fields Settings:** Define and manage the fields that appear on the support ticket submission form.

You can reorder fields using drag and drop. Each field row contains the following columns:

-   **Label:** Enter the display name of the field (e.g., Name, Email, Subject).
-   **Placeholder:** Enter the hint text shown inside the input field (e.g., Enter Name, Enter Email).
-   **Type:** Select the input type for the field (e.g., Text, Email, Textarea, File).
-   **Required:** Set whether the field is mandatory (Yes or No).
-   **Width:** Set the display width of the field on the form (e.g., 50% or 100%).
-   Click **“Create”** to add a new custom field to the ticket form.
-   Click **“Save Changes”** to apply all support settings.

### 32.4 Contract Settings

Configure contract numbering to maintain consistent and organized contract records across your company.

-   **Contract Prefix:** Enter the prefix to be used when generating contract numbers (e.g., CON). This prefix will automatically be applied to all new contracts created in the system (e.g., CON0001).
-   A Contract Configuration Summary panel below the field displays the current prefix and the next contract number that will be assigned.
-   Click **“Save Changes”** to apply all contract settings.

### 32.5 Email Notification Settings

The Email Notification Settings page allows you to control which email notifications are sent from the system. Notifications are organized into four tabs: General, CRM, Support Ticket, and Recruitment. Toggle each notification on or off as needed.

#### General

Toggle on or off the following email notifications:

-   **New User:** Notify when a new user is created.
-   **Customer Invoice Send:** Notify when a customer invoice is sent.
-   **Payment Reminder:** Notify when a payment reminder is triggered.
-   **Invoice Payment Create:** Notify when an invoice payment is created.
-   **Proposal Status Updated:** Notify when a proposal status is updated.
-   **New Helpdesk Ticket:** Notify when a new helpdesk ticket is created.
-   **New Helpdesk Ticket Reply:** Notify when a reply is added to a helpdesk ticket.
-   **Purchase Send:** Notify when a purchase order is sent.
-   **Purchase Payment Create:** Notify when a purchase payment is created.

#### CRM

Toggle on or off the following email notifications:

-   **Deal Assigned:** Notify when a deal is assigned.
-   **Deal Moved:** Notify when a deal is moved to another stage.
-   **New Task:** Notify when a new task is created.
-   **Lead Assigned:** Notify when a lead is assigned.
-   **Lead Moved:** Notify when a lead is moved.
-   **Lead Emails:** Notify for lead-related emails.
-   **Deal Emails:** Notify for deal-related emails.

#### Support Ticket

Toggle on or off the following email notifications:

-   **New Ticket:** Notify when a new support ticket is created.
-   **New Ticket Reply:** Notify when a reply is added to a support ticket.

#### Recruitment

Toggle on or off the following email notification:

-   **Application Received:** Notify when a new job application is received.

Click **“Save Changes”** to apply all updates.

### 32.6 Slack Settings

-   Configure Slack integration and webhook settings to allow notifications to be sent directly to your Slack workspace.
-   **Enable Slack Integration:** Toggle on to enable or disable Slack notifications.
-   **Slack Webhook URL:** Enter your Slack webhook URL to connect the platform with your Slack channel.

The **Notification Settings** section is organized into tabs, toggle each notification on or off as needed.

-   **General:** New User, New Sales Invoice, Sales Invoice Status Updated, New Sales Proposal, Sales Proposal Status Updated, New Purchase, New Warehouse.
-   **Accounting:** New Customer, New Vendor, New Revenue.
-   **Contract:** New Contract.
-   **HRM:** New Award.
-   **CRM:** New Lead, Lead to Deal Conversion, New Deal, Lead Moved, Deal Moved.
-   **Recruitment:** New Candidate, Interview Schedule, Convert To Employee, New Job Posting.
-   **Project:** New Project, New Task, New Bug, New Milestone, Task Stage Updated, New Task Comment.
-   **Training:** New Trainer.
-   **Zoom Meeting:** New Zoom Meeting.
-   **Form Builder:** New Form, Convert To Modal.
-   **Timesheet:** New Timesheet.

Click **“Save Changes”** to apply all updates.

### 32.7 Telegram Settings

-   Configure Telegram bot integration settings to allow notifications to be sent directly to your Telegram channel.
-   **Enable Telegram Integration:** Toggle on to enable or disable Telegram notifications.
-   **Telegram Bot Token:** Enter your Telegram bot token to connect the platform with your Telegram bot.
-   **Telegram Chat ID:** Enter your Telegram chat ID where notifications will be delivered.

The **Notification Settings** section is organized into tabs. Toggle each notification on or off as needed.

-   **General:** New User, New Sales Invoice, Sales Invoice Status Updated, New Proposal, Proposal Status Updated, Bank Transfer Payment Status Updated, New Purchase, New Warehouse.
-   **Accounting:** New Customer, New Vendor, New Revenue.
-   **Contract:** New Contract.
-   **HRM:** New Monthly Payslip, New Award, New Event, Leave Approve/Reject, New Announcement, New Holidays.
-   **CRM:** New Lead, Lead to Deal Conversion, New Deal, Lead Moved, Deal Moved.
-   **Project:** New Project, New Task, New Bug, New Milestone, Task Stage Updated, New Task Comment.
-   **Zoom Meeting:** New Zoom Meeting.
-   **Timesheet:** New Timesheet.

Click **“Save Changes”** to apply all updates.

### 32.8 Twilio Settings

-   Configure Twilio integration and SMS settings to allow SMS notifications to be sent via Twilio.
-   **Enable Twilio Integration:** Toggle on to enable or disable SMS notifications.
-   **Twilio Account SID:** Enter your Twilio Account SID for authentication.
-   **Twilio Auth Token:** Enter your Twilio Auth Token for server-side authentication.
-   **From Phone Number:** Enter your Twilio phone number from which SMS notifications will be sent (e.g., +1232567890).

The **Notification Settings** section is organized into tabs. Toggle each notification on or off as needed.

-   **General:** New User, New Sales Invoice, Sales Invoice Status Updated, New Proposal, Proposal Status Updated, Bank Transfer Payment Status Updated, New Purchase Invoice, New Warehouse.
-   **Accounting:** New Customer, New Vendor, New Revenue.
-   **Contract:** New Contract.
-   **HRM:** New Monthly Payslip, New Award, New Event, Leave Approve/Reject, New Announcement, New Holidays.
-   **CRM:** New Lead, Lead to Deal Conversion, New Deal, Lead Moved, Deal Moved.
-   **Project:** New Project, New Task, New Bug, New Milestone, Task Stage Updated, New Task Comment.
-   **Zoom Meeting:** New Zoom Meeting.
-   **Timesheet:** New Timesheet.

Click **“Save Changes”** to apply all updates.

### 32.9 AI Assistant Settings

Configure your AI provider to enable AI-powered assistance features within your company’s platform.

-   **AI Provider:** Select your preferred AI provider from the dropdown (e.g., OpenAI).
-   **API Key:** Enter the API key associated with your selected AI provider.
-   **AI Model:** Enter the AI model in the respective field
-   Click **“Save Changes”** to apply all AI Assistant settings.

### 32.10 Zoom Meeting Settings

Configure Zoom integration to allow meetings to be created and managed directly within the platform. You can obtain your credentials from the Zoom Marketplace.

-   **Enable Zoom Integration:** Toggle on to allow meetings to be created via Zoom.
-   **Client ID:** Enter your Zoom OAuth application Client ID.
-   **Client Secret:** Enter your Zoom OAuth application Client Secret.
-   **Account ID:** Enter your Zoom Account ID.
-   **To get your Zoom credentials:** go to the Zoom Marketplace and create a Server-to-Server OAuth app, navigate to App Credentials and copy the Account ID, Client ID, and Client Secret, ensure the app has the required scopes (meeting.write, meeting.read, user.read), then paste the credentials in the fields above and enable the integration.
-   Click **“Save Changes”** to apply all Zoom Meeting settings.

### 32.11 Google Calendar Settings

Configure Google Calendar integration to sync events between your platform and Google Calendar.

-   **Google Calendar Integration:** Enable toggle on to allow events to be synced with Google Calendar.
-   **Google Calendar ID:** Enter your Google Calendar ID (e.g., your-calendar@gmail.com or calendar-id). You can find this under Google Calendar Settings → Calendar ID.
-   **Google Calendar JSON File:** Upload your Google OAuth 2.0 service account JSON file, or paste its content directly into the text field to begin the synchronization process.
-   **To get your Google Calendar JSON File:** go to the Google Cloud Console, create a new project or select an existing one, enable the Google Calendar API under APIs & Services, navigate to Credentials → Create Credentials → Service Account, create the service account and download the JSON key file, then upload the file or paste its content in the field above.
-   Click **“Save Changes”** to apply all Google Calendar settings.

### 32.12 Webhook Settings

Configure webhooks to receive real-time notifications when events occur in your system.

Click **“Add Webhook”** to configure a new webhook endpoint. All configured webhooks are listed under the **“Configured Webhooks”** section.

-   **Method:** Select the request method from the dropdown (default is POST).
-   **Event:** Select the event that will trigger the webhook notification. The available events are grouped by category:

-   **General:** New User, New Sales Invoice, Sales Invoice Status Updated, New Sales Proposal, Sales Proposal Status Updated, New Purchase Invoice, New Warehouse
-   **Accounting:** New Customer, New Vendor, New Revenue
-   **Recruitment:** New Job Posting, New Job Candidate, New Job Interview Schedule, New Convert To Employee
-   **Training:** New Training, New Trainer
-   **Zoom Meeting:** New Zoom Meeting
-   **Project:** New Project, New Milestone, New Task, Task Stage Update, New Task Comment, New Bug
-   **CRM:** New Lead, New Deal, Lead Moved, Deal Moved, Convert To Deal
-   **Contract:** New Contract
-   **HRM:** New Award, New Announcement, New Holidays

-   **Webhook URL:** Enter the URL where webhook notifications should be sent.
-   Click **“Create Webhook”** to save the webhook, or **Cancel** to discard.

**Note:** If no webhooks have been added yet, the list will be empty. Add your first webhook to start receiving event notifications.
