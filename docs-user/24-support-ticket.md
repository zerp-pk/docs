---
title: Support Ticket
sidebar_position: 24
---
The Support Ticket system provides a powerful and easy-to-use platform for handling customer support requests efficiently. From creating and tracking tickets to managing knowledge base articles and FAQs, everything can be configured and controlled from a single admin panel.

### 24.1 System setup

#### 24.1.1 Categories

-   To add a new category, click the **“Create”** button at the top right. A **“Create Category”** modal will appear, enter the Category Name in the Name field and select a Color using the color picker. Click **“Create”** to save, or **“Cancel”** to discard.
-   Once saved, the category will appear in the Categories list, displaying the Category Name and its assigned Color Code. Use the Edit icon to update the details or the Delete icon to remove the category. A **“Delete”** confirmation tooltip will appear on hover before the action is executed.
-   All created categories will be available in the Category dropdown field on the Create Ticket form, allowing users to select the most relevant category when submitting a support request.

#### 24.1.2 KnowledgeBase Category

-   To add a new knowledge base category, click the **“Create”** button at the top right. A **“Create Knowledge Category”** modal will appear, enter the category name in the Title field.
-   Once saved, the knowledge category will appear in the Knowledge Categories list under the Category column. Use the Edit icon to update the title or the Delete icon to permanently remove the category.
-   All created knowledge categories will be used to organize and group articles within the Knowledge Base section of the support portal.

#### 24.1.3. Brand Settings

-   To update the Logo, click the **“Browse”** button under the Logo section and upload your preferred logo image file. The uploaded logo will be previewed in the display area above. To remove the current logo, click the **“×”** (clear) button next to the file name.
-   To update the Favicon, click the **“Browse”** button under the Favicon section and upload your favicon image. The favicon will appear in the browser tab when users visit the support portal.
-   Enter your desired website name in the Title Text field, this will appear as the browser page title across all pages of the support portal.
-   Enter the copyright or branding message in the Footer Text field, this will be displayed at the bottom of every page on the support portal.
-   Once all brand settings are configured, click **“Save Changes”** to apply and publish the updates.

#### 24.1.4 Custom Pages

-   The Custom Pages section lists all static pages available on the support portal, including their Title, Slug (URL path), and current Status (Enabled/Disabled). Use the Edit icon in the Action column to update the page content.
-   To create a new custom page, click the **“Create”** button at the top right. A **“Create Custom Page”** modal will appear, enter the Page Title in the Title field and add a brief summary in the Description field.
-   Use the rich-text Contents editor to write and format the full body content of the page. The editor supports Bold, Italic, Underline, Strikethrough, text alignment, lists, blockquotes, links, and color formatting.
-   Toggle the **“Enable Page Footer”** switch to show or hide the site footer on this custom page.

#### 24.1.5 Title Sections

-   The Title Sections page allows you to set the heading and description for each major section of the support portal. Fill in the Title and Description fields for each of the following sections:

-   **Create Ticket Section:** Displayed as the heading on the Create Ticket page. Enter a clear title and a short description to guide users when submitting a ticket.
-   **Search Ticket Section:** Displayed on the Search Ticket page. Enter a title and description to help users understand how to track their existing tickets.
-   **Knowledge Base Section:** Displayed as the heading on the Knowledge Base page. Enter a title and brief intro to direct users to helpful articles and guides.
-   **FAQ Section:** Displayed on the FAQ page. Enter a title and description that introduce users to common questions and answers.
-   **Contact Section:** Displayed on the Contact Us page. Enter a title and description that encourage users to reach out to the support team.

-   Once all sections are filled in, click **“Save Changes”** to apply the updates across the portal.

#### 24.1.6 CTA Sections

-   The CTA Sections page allows you to configure the Call-To-Action content displayed within key areas of the support portal.

-   **Knowledge Base CTA:** Enter a compelling Title and Description to encourage users to explore the Knowledge Base. This CTA appears within or alongside the Knowledge Base section.
-   **FAQ CTA:** Enter a Title and Description to prompt users to visit the FAQ section. This CTA is shown near or within the FAQ area of the portal.

-   Once both CTA sections are filled in, click **“Save Changes”** to publish the content across the portal.

#### 24.1.7 Quick Links

-   To add a new quick link, click the **“Create”** button at the top right. A **“Create Quick Link”** modal will appear, enter the link label in the Title field, select an appropriate icon from the Icon dropdown, and enter the destination URL in the Link field. Click **“Create”** to save, or **“Cancel”** to discard.
-   Once saved, the quick link will appear in the Quick Links list, displaying the Title, assigned Icon name, and the Link URL. Use the Edit icon to update the details or the Delete icon to remove the quick link.
-   All created quick links will appear in the Quick Links section on the sidebar of the support portal, giving users fast access to important resources such as User Guides, Video Tutorials, Tips & Tricks, API Documentation, and Community Forums.

#### 24.1.8 Support Information

-   In the Response Time field, enter a clear message describing how quickly the support team typically responds to tickets, for example, **“We typically respond within 24 hours on business days.”** This message will be displayed in the Support Information sidebar on the Create Ticket page.
-   Set the Opening Hours and Closing Hours using the time picker fields to define the daily support window available to users.
-   Under Business Hours, toggle each day of the week ON or OFF to specify which days your support team is available. Days toggled ON (highlighted in teal) are considered active business days; days toggled OFF (grey) indicate non-working days.
-   In the Phone Support field, enter the contact phone number. This number will be displayed in the Support Information sidebar for users to reach the team directly.
-   Once all support information is configured, click **“Save Changes”** to publish the details across the portal.

#### 24.1.9 Contact Information

-   Under Map Settings, paste the full Google Maps Embed URL (iframe code) in the Google Maps Embed URL field. This map will be displayed on the Contact Us page to help users locate your office.
-   Under Contact Details, enter the office location in the Address field, this address will appear below the map on the Contact Us page. Enter the office phone number in the Phone Number.
-   Enter the official support email address in the Email Address field, this will be shown as the primary email contact on the Contact Us page.
-   Once all contact details are filled in, click **“Save Changes”** to update the Contact Us page with the latest information.

### 24.2 Manage Tickets

-   To create a new ticket manually, click the **“Create”** button at the top right to open the Create Ticket form.
-   The list page displays all submitted support tickets with columns for No, Ticket ID, Account Type, Name, Email, Subject, Category, Status, and Created date. The Ticket ID appears as a clickable blue link, click it to open the full ticket details.

-   The Status column shows color-coded badges: Closed (red), In Progress (blue), and On Hold (yellow), giving you a quick visual overview of each ticket’s current state. Use the 10 per page dropdown to control how many tickets appear per page, and toggle between List View and Grid View using the icons at the top right.

-   Use the Search bar to find tickets by keyword and click **“Search”** to apply. Click **“Filters”** to expand the filter panel, where you can filter tickets by Status using the dropdown, click **“Apply”** to filter the results or **“Clear”** to reset.

-   With the help of the Actions column, you can click the View icon to see the complete ticket details, the Edit icon to update the ticket information, or the Delete icon to permanently remove the ticket.

#### 24.2.1 Create Ticket

-   To create a new ticket manually, click the **“Create”** button on the Manage Tickets page. The Create Ticket form will open with a Ticket Information section. Use the rich-text Description editor to write a detailed explanation of the issue. Under Attachments, click **“Browse”** to upload one or more supporting files.
-   Select the Account Type using the radio buttons, choose from Custom, Staff, Client, or Vendor depending on who the ticket is being raised for. Enter the submitter’s full name in the Name field and their email address in the Email field.
-   Select the relevant Category from the dropdown, all categories created under System Setup will appear here. Enter a brief summary of the issue in the Subject field and select the current ticket status from the Status dropdown, the default is set to In Progress.
-   To add a new article individually, click the **“Create”** button at the top right to open the Create Knowledge Base modal. To import articles in bulk, click the Import (upload) icon at the top right to open the Import Knowledge Base modal.
-   The list page displays all created knowledge base articles with columns for Title, Category, Description (preview), Created date, and Actions. Use the Search bar to find articles by keyword and click **“Search”** to apply.
-   Click **“Filters”** to expand the filter panel, where you can filter articles by Category using the dropdown, click **“Apply”** to filter the results or **“Clear”** to reset. Use the 10 per page dropdown to control how many records appear per page.
-   With the help of the Actions column, you can click the Edit icon to update an article’s details or the Delete icon to permanently remove it from the knowledge base.
-   All knowledge base articles created here will be displayed in the Knowledge Base section of the support portal, where users can browse and search for helpful guides and resources.

### 24.3 Import Knowledge Base

-   To import knowledge base articles in bulk, click the Import (upload) icon at the top right of the Manage Knowledge Base page to open the Import Knowledge Base modal.
-   Click **“Download Sample”** to download the sample CSV file, use this file as a template to prepare your data in the correct column format before importing.
-   Once your CSV file is ready, click **“Choose File”** under the Select CSV File field to upload your prepared file. Click **“Import”** to process and import all articles from the CSV into the knowledge base.

#### 24.3.1 Create Knowledge Base

-   To add a new knowledge base article, click the **“Create”** button on the Manage Knowledge Base page to open the Create Knowledge Base modal. Use the rich-text Description editor to write the full article content.
-   Enter the article heading in the Title field. Select the relevant knowledge category from the Category dropdown, all categories created under KnowledgeBase Category in System Setup will appear here.
-   Once saved, the article will appear in the Knowledge Base section of the support portal for users to access.

### 24.4 Manage FAQ

-   To add a new entry individually, click the **“Create”** button at the top right to open the Create FAQ modal.
-   To add a new FAQ entry, click the **“Create”** button on the Manage FAQ page to open the Create FAQ modal.
-   Enter the question text in the Title field, this will be the FAQ question displayed on the support portal. Use the rich-text Answer editor to write the full answer, with support for Bold, Italic, Underline, Strikethrough, text alignment, lists, blockquotes, links, and color formatting.
-   Once saved, the entry will appear on the FAQ section of the support portal, where users can find answers to commonly asked questions.
-   The list page displays all created FAQ entries with columns for Title, Description (preview), Created date, and Actions. Use the Search bar to find specific entries by keyword and click **“Search”** to apply. Use the 10 per page dropdown to control how many records appear per page.
-   With the help of the Actions column, you can click the Edit icon to update a FAQ entry or the Delete icon to permanently remove it from the list.

#### 24.4.1 Import FAQ

-   To import FAQ entries in bulk, click the Import (upload) icon at the top right of the Manage FAQ page to open the Import FAQ modal.
-   Click **“Download Sample”** to download the sample CSV file, use this as a template to prepare your FAQ data in the correct format before importing.
-   Once your CSV file is ready, click **“Choose File”** under the Select CSV File field to upload your prepared file. Click **“Import”** to process and import all FAQ entries from the CSV into the system.

### 24.5 Manage Contact

-   The list page displays all contact messages submitted through the Contact Us page of the support portal, with columns for Name, Email, Subject, Message (preview), Date, and Actions.
-   Use the Search bar to find specific contact messages by keyword and click **“Search”** to apply. Use the 10 per page dropdown to control how many records are displayed per page.
-   With the help of the Actions column, you can click the View (eye) icon to read the complete message details including the full name, email, subject, and message content. Click the Delete icon to permanently remove the message from the list.
