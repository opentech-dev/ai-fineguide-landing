# Fineguide.ai Usage Dashboard Documentation

## Overview
The Usage Dashboard provides detailed insights into credits usage, GPT model consumption, and context usage within the Fineguide.ai platform. It allows users to monitor their subscription and extra usage effectively over a selected date range.

## Components

### 1. **Top Summary Cards**
The top section of the dashboard includes three summary cards providing a high-level overview of usage:

- **Credits Usage:** 
  - Displays the percentage of used credits out of the total available credits for the subscription plan.
  - Example: `0.56% Used Credits`, indicating `561/100000 Credits` have been consumed.
  - **Subscription Credits:** The credits displayed here represent the amount of credits spent from the user's subscription. Once these credits are depleted, users can access extra credits at an additional cost depending on their subscription plan.

- **Credits by GPT Model:** 
  - A pie chart representation showing the distribution of credits consumed by different GPT models.
  - Example: Majority of credits (e.g., `985,183`) used by `gpt-4-mini`.
  - **Subscription Credits vs. Extra Credits:** This section highlights how much of the credits used are part of the subscription versus additional credits accessed beyond the subscription limit.

- **Context Usage:** 
  - Shows the current usage of context windows, measured in bytes.
  - Example: `1024B || 1Kb || 1Mb || 1Gb || 1Tb || 1Pb` used.
  - **Bytes Definition:** A byte is defined as **1 character**. This is an abbreviation used to standardize input length across interactions.
  - Users are allotted a certain number of bytes per their subscription, and this metric indicates how many have been utilized within the selected date range.

### 2. **Usage Chart**
- **Graphical Representation:** 
  - Displays credits usage over time for various models and tasks.
  - Data points are plotted based on the `Created Date` for each task or interaction.
  - Different models are color-coded and can be filtered for more precise analysis.

- **Filtering Options:** 
  - Filters can be applied to isolate specific models or tasks.
  - The `Reset` button allows users to revert to the default view.

### 3. **Usage Data Table**
- A detailed breakdown of usage, providing more granular insights into each interaction.
- **Columns Include:**
  - **GPT Model:** Name of the model used (e.g., `gpt-4-mini`).
  - **Usage Type:** Type of interaction (e.g., `TEXT`).
  - **Unit:** The unit of measurement for the usage (e.g., `x1`).
  - **Cost Coefficient:** The cost per interaction (e.g., `1 credits / message`).
  - **Credits:** Total credits consumed per interaction (e.g., `1`).
  - **Created Date:** Date when the interaction occurred (e.g., `2025-03-03`).

- **Pagination:** 
  - The table supports pagination to browse through all the usage data.
  - Includes `Previous` and `Next` buttons for navigation.

### 4. **Date Range Selector**
- Allows users to select a custom date range to analyze usage data.
- Example: `From: 28 Feb, 2025 To: 31 Mar, 2025`.

### 5. **Extra Usage Tab**
- This dashboard supports viewing additional or extra usage not covered by the subscription plan.
- Users can switch between `Subscription Usage` and `Extra Usage` tabs to compare and analyze usage.
- **Extra Credits:** Once the user depletes their subscription credits, they can utilize extra credits which incur additional charges depending on their subscription plan.

## Sidebar Navigation
The sidebar provides navigation to various parts of the Fineguide.ai platform, including:
- **Dashboard, Workspace, Assistants, Leads, Conversations, Tickets, Widgets, VoiceQnA, Analysis, Billing.**

## Usage & Purpose
The Usage Dashboard is designed to provide users with a comprehensive breakdown of their Fineguide.ai credits and context usage. By monitoring these metrics, users can optimize their subscription plan usage, identify excessive consumption, and manage their resources more effectively. Additionally, users can track when they tap into extra credits and understand associated costs.

