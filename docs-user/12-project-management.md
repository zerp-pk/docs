---
title: Project Management
sidebar_position: 12
---
The Project Management module allows you to create, track, and manage all your projects and their progress. It includes the following sections:

### 12.1 Manage Project

The Manage Project page displays all projects in a table with the following columns: Name, Users, Budget, Start Date, End Date, Status, and Actions.

Each project row includes four action icons:

-   **Duplicate:** Creates a copy of the project.
-   **View:** Opens the project details.
-   **Edit:** Opens the project editor to update project information.
-   **Delete:** Removes the project from the list.

Use the search bar to find specific projects and switch between list and grid view. Use the Filters option to narrow results by Status (Ongoing, Onhold, Finished) and Date Range, then click Apply to filter or Clear to reset.

When you open a project, the Project Details page displays a full overview of the project. The top navigation provides three quick-access buttons: Task Kanban, Bug, and Calendar View. The page is divided into several panels: Project Details, Project Overview, Team Members, Clients, Progress, Milestones, Recent Activity, and Files.

-   **Project Details:** Displays the project’s Status, Start Date, End Date, and Description. Click the edit icon to update these details.
-   **Project Overview:** Shows four summary counters, Tasks, Bug, Days Left, and Budget.
-   **Team Members:** Lists all assigned team members. Click **“Create”** to open the Add Team Member form, select users from the dropdown, and click Add. Remove members using the delete icon.
-   **Clients:** Lists all linked clients. Click **“Create”** to open the Share To Client form, select clients, and click Invite.
-   **Progress:** Displays a line chart tracking project activity across months.
-   **Milestones:** Lists milestones showing Title, Cost, Start Date, End Date, Status, and Progress. Click **“Create”** to open the Create Milestone form, fill in the required fields.
-   **Recent Activity:** Shows a feed of all recent actions taken on the project.
-   **Files:** Upload and manage project files using the Browse button.

#### Task Kanban

Click Task Kanban to open the board with four columns: Todo, In Progress, Review, and Done. Drag and drop tasks between columns to update their stage. Switch to the list view to see tasks in a table with filters for Priority, Date Range, and User. Click + to open the Create Task form, fill in the Milestone, Title, Priority, Stage, Assign To, Duration, and Description, then click Create.

#### Bug

Click Bug to open the bug tracker Kanban with five columns: Unconfirmed, Confirmed, In Progress, Resolved, and Verified. Switch to the list view to search and filter bugs. Click + to open the Create Bug form, enter the Title, Priority, Assign To, Status, and Description, then click Create.

#### Calendar View

Click Calendar View to open the Task Calendar showing tasks as colored bars across their duration dates. Toggle between Month, Week, and Day views, and use the navigation arrows or Today button to move between dates. The right-side All Tasks panel lists every task with its date range and description. Use List View to switch back to the task table.

Click the **“Create”** button at the top-right to create a new project. Fill in the following fields:

-   **Name:** Enter the project name.
-   **Start Date:** Select the project start date.
-   **End Date:** Select the project end date.
-   **Users:** Select the users to be assigned to the project.
-   **Budget:** Enter the allocated budget for the project.
-   **Description:** Enter an optional project description.

### 12.2 Manage Project Reports

The Manage Project Reports page provides a detailed overview of all projects and their progress. The table displays the following columns: Project Name, Tasks, Bugs, Milestones, Start Date, End Date, Status, and Actions.

-   **Tasks:** Shows completed vs. total tasks (e.g., 4/9).
-   **Bugs:** Shows resolved vs. total bugs (e.g., 1/4).
-   **Milestones:** Shows completed vs. total milestones (e.g., 2/4).
-   **Status:** Displays the current project status: Ongoing, Onhold, or Finished. End dates highlighted in red indicate overdue projects.
-   **Actions:** Click the View icon to open the detailed project report.

Use the search bar to find specific projects. Use the Filters option to narrow results by Status (Ongoing, Onhold, Finished) and Date Range, then click Apply to filter or Clear to reset.

When you open a project, the Project Report page gives you a full snapshot of the project’s health and progress. The report is divided into several panels: a summary header, Task Status Distribution, Task Priority Distribution, Users, and Milestones.

#### Header Summary

The top of the report displays four key metric cards at a glance:

-   **Project Info:** Shows the project name, current status (e.g., Onhold, Active, Complete), and the total budget allocated.
-   **Timeline:** Displays the project’s Start Date and End Date so you can quickly assess the scheduled window.
-   **Tasks:** Shows the Total task count alongside a breakdown of Completed and In Progress tasks, each highlighted in their respective status colors.
-   **Progress:** Displays the number of Team Members assigned and an overall completion percentage shown as a progress bar.

#### Task Status Distribution

This section renders a pie chart visualizing the proportion of tasks by status. Each slice is color-coded, green for Done and blue for Todo, and the legend on the right shows the exact count for each status. Use this chart to quickly gauge how much work remains versus what has already been completed.

#### Task Priority Distribution

A bar chart breaks down tasks by priority level, currently showing High and Medium categories. The height of each bar corresponds to the number of tasks at that priority. Use this view to identify where the team’s workload is concentrated and whether high-priority items are being addressed appropriately.

#### Users

The Users panel lists every team member assigned to the project in a table with three columns: Name, Assigned Tasks, and Done Tasks. This lets managers quickly compare individual workloads and output at a glance, for example, seeing how many tasks a member has been assigned versus how many they have completed.

#### Milestones

The Milestones table provides a detailed breakdown of each project milestone with the following columns:

-   **Name:** The title of the milestone (e.g., Frontend Development Phase 1, Integration & API Development).
-   **Progress:** A horizontal progress bar showing the percentage of completion for that milestone, from 0% to 100%.
-   **Cost:** The budget allocated to that specific milestone.
-   **Status:** A color-coded badge indicating whether the milestone is Complete (green) or Incomplete (red/pink).
-   **Start Date / End Date:** The scheduled date range for the milestone.

Use the Milestones table to track which phases are finished, which are behind schedule, and how costs are distributed across the project lifecycle.

### 12.3 System Setup

The System Setup section is organized into two subsections, Task Stage and Bug Stage.

#### 12.3.1 Task Stage

-   Click the **“Create”** button to create a new task stage. Enter the Name and select a Color.
-   Displays all stages in the task workflow in a numbered, draggable list. The default stages are Todo, In Progress, Review, and Done (marked as Done Stage).
-   Each stage row includes Edit and Delete action icons. Stages can be reordered using the drag handle on the left.

#### 12.3.2 Bug Stage

-   Click the **“Create”** button to create a new bug stage. Enter the Name and select a Color.
-   Displays all stages in the bug tracking workflow in a numbered, draggable list. The default stages are Unconfirmed, Confirmed, In Progress, Resolved, and Verified (marked as Done Stage).
-   Each stage row includes Edit and Delete action icons. Stages can be reordered using the drag handle on the left.
