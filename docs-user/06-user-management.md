---
title: User Management
sidebar_position: 6
---
The User Management section allows the Company Admin to manage roles and users within the company. It has two sub-sections: Roles and Users.

### 6.1 Manage Roles

A role is a set of permissions that controls what a user can see and do inside the platform. For example, a user with the **“Staff”** role may only be able to view certain pages, while a user with the **“Hr”** role may be able to manage employees and payroll. Instead of setting permissions one by one for every user, you create a role once and assign it to multiple users.

-   View and manage all roles through the Manage Roles page.

-   Enter keywords in the search field to find a specific role and click **“Search”** to execute.
-   Toggle between list view and grid view using the icons at the top right.

#### Roles Table Information:

The table displays the following columns:

-   **Name:** The system name of the role (e.g., staff, client, vendor, hr).
-   **Label:** The display name of the role shown to users (e.g., Staff, Client, Vendor, Hr).
-   **Permissions:** The total number of permissions assigned to the role.
-   **Users:** The users currently assigned to that role.
-   **Actions:** Quick action button for role management.

Each role row includes action icons based on the role type:

**Default Roles** (Staff, Client, Vendor, Hr): These are system-defined roles and include only the **Edit** action. You can update the role name, label, and permissions, but they cannot be deleted.

**Custom Roles** (user-created roles): These include both the **Edit** and **Delete** action icons, giving you full authority to modify or remove the role as needed.

#### Create New Role

Click the **“Create”** button on the Manage Roles page to create a new role.

-   **Name:** Enter a system name for the role (e.g., **“manager”**).
-   **Label:** Enter the display name that users will see (e.g., **“Manager”**).

##### Permissions:

-   Permissions are organized into module tabs across the top of the form. Each tab contains the permissions available for that module. The full list of module tabs is: General, Product & Service, Project, Accounting, HRM, CRM, POS, Support Ticket, Double Entry, Financial Goal, Budget Planner, Training, Performance, Recruitment, Form Builder, Contract, Timesheet, Quotation, AI Assistant, Slack, Telegram, Twilio, Calendar, Zoom Meeting, Webhook, Stripe, and PayPal.
-   Under each tab, permissions are grouped by feature (e.g., Users, Roles, Settings, Media). Simply tick the checkboxes next to the actions you want this role to have access to. For example, under Users, you can allow the role to **“Manage Users”**, **“Create Users”**, **“Edit Users”**, **“Delete Users”**, and so on.

**Note:** Only tick the permissions that are relevant to what this role should be allowed to do. You can use the **“Search features…”** field to quickly find a specific permission across all tabs.

### 6.2 Manage Users

The Users section allows the Company Admin to manage all user accounts within the company.

-   View and manage all users through the Manage Users page.
-   Enter keywords in the search field to find a specific user and click **“Search”** to execute.
-   Click the Filters button to access filtering options:

-   **Email:** Filter users by their email address.
-   **Role:** Filter users by their assigned role.
-   **Login Status:** Filter users by their login status (Enabled/Disabled).
-   Click **“Apply”** to activate the filters or **“Clear”** to reset them.

-   Toggle between list view and grid view using the icons at the top right.
-   Click the history icon at the top right to view user login history.

#### Users Table Information:

The table displays the following columns:

-   **Avatar:** The profile picture of the user.
-   **Name:** The full name of the user.
-   **Email:** The user’s email address.
-   **Mobile No:** The user’s mobile number.
-   **Role:** The role assigned to the user (e.g., Staff, Client, Hr).
-   **Login Status:** Whether the user’s login is Enabled or Disabled.
-   **Actions:** Quick action buttons for user management.

Each user row includes the following action icons:

-   **Log in as User:** Each user record includes options to (view the user’s perspective)
-   **Change Password:** Reset the user’s password.
-   **Edit:** Update the user’s profile details.
-   **Delete:** Remove the user from the system.

#### User Login History

Click the **history icon** at the top right of the Manage Users page to open the User Login History page. This page shows a full log of all user login activity.

-   Enter a username in the search field and click **“Search”** to find a specific user’s login records.
-   Click the **Filters** button to filter records by:

-   **IP Address:** Filter login records by a specific IP address.
-   Click **“Apply”** to activate the filters or **“Clear”** to reset them.

**Login History Table Information:**

The table displays the following columns:

-   **User:** The name and email address of the user who logged in.
-   **IP Address:** The IP address from which the login was made.
-   **Location & Device:** Displays the user’s location, browser, device type, ISP, organisation, timezone, and language.
-   **Role:** The role of the user at the time of login.
-   **Time:** The date and time the login occurred.

#### Create User

-   Click the **“Create”** button at the top-right corner of the Manage Users page to open the Create User form.
-   **Name:** Enter the user’s full name.
-   **Email:** Enter the user’s email address. This will be used to log in.
-   **Mobile Number:** Enter the user’s mobile number.
-   **Password:** Set a login password for the user.
-   **Confirm Password:** Re-enter the password to confirm it.
-   **Role:** Select the role to assign to this user from the dropdown.
-   **Login Status:** Set whether the user’s login is Enabled or Disabled.
