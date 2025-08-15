# VoiceQA Module: Agent Training Guide

This comprehensive guide is designed to help support agents understand the VoiceQA module in detail, so they can effectively assist users with navigation, troubleshooting, and best practices.

## Table of Contents

1. [Module Overview](#module-overview)
2. [Navigation Guide](#navigation-guide)
3. [Statistics Dashboard](#statistics-dashboard)
4. [Conversations Management](#conversations-management)
5. [Department Configuration](#department-configuration)
6. [Staff Management](#staff-management)
7. [Settings](#settings)
8. [Evaluation Process](#evaluation-process)
9. [Scoring System](#scoring-system)
10. [Common User Questions](#common-user-questions)
11. [Troubleshooting](#troubleshooting)

## Module Overview

The VoiceQA module is a comprehensive quality assurance tool designed for call centers to evaluate operator performance through recorded conversations. It allows organizations to:

- Create departments with customized evaluation criteria
- Upload and analyze call recordings
- Evaluate operators based on predefined rules
- Track performance metrics over time
- Generate insights for coaching and improvement

The module is accessible via the main navigation menu, typically labeled "VoiceQA" or through the URL path `/[organization-id]/voiceqa`.

## Navigation Guide

### Main Navigation

When users first access the VoiceQA module, they will see a tabbed interface with five main sections:

1. **Statistics**: The default landing tab showing performance metrics
2. **Conversations**: For managing and evaluating call recordings
3. **Departments**: For configuring departments and their evaluation rules
4. **Staff**: For managing and tracking operator performance
5. **Settings**: For system-wide configuration options

Users can switch between these tabs by clicking on the respective tab name in the tab bar at the top of the page.

### URL Structure

The VoiceQA module follows this URL pattern:
- Main page: `/{organizationId}/voiceqa`
- Specific tabs: `/{organizationId}/voiceqa?tab={tabName}`
- Department details: `/{organizationId}/voiceqa/departments/{departmentId}`
- Conversation details: `/{organizationId}/voiceqa/conversations/{conversationId}`
- Staff details: `/{organizationId}/voiceqa/staff/{staffId}`

## Statistics Dashboard

### Overview

The Statistics dashboard provides high-level metrics about call center performance. This is typically the first screen users see when accessing the VoiceQA module.

### Key Components

1. **Evaluation Overview Section**
   - **Location**: Top section of the Statistics tab
   - **Purpose**: Shows aggregate performance metrics
   - **Key Metrics**:
     - **Avg. Minutes Recorded Monthly**: Shows the average duration of calls recorded each month
     - **Avg. Monthly Cost Estimate (Credits)**: Displays the estimated credit usage based on recording volume
     - **Credits Used Current Month**: Shows actual credit consumption in the current month

2. **Process Tracking Section**
   - **Location**: Middle section of the Statistics tab
   - **Purpose**: Tracks operational metrics
   - **Key Metrics**:
     - **Minutes Evaluated**: Total duration of calls that have been evaluated
     - **Minutes Recorded**: Total duration of calls that have been recorded
     - **Credits Spent & Avg Cost Estimate**: Comparison between actual and estimated credit usage

3. **Date Range Filter**
   - **Location**: Top-right of the Statistics tab
   - **Usage**: Click to open a date picker that allows filtering data by specific time periods
   - **Default**: Current month
   - **Options**: Custom date range, Last 7 days, Last 30 days, Last 90 days

### How to Use

1. Navigate to the Statistics tab by clicking "Statistics" in the tab bar
2. Review the overview metrics in the Evaluation Overview section
3. Check process tracking metrics to monitor operational efficiency
4. Use the date range filter to view data for specific time periods:
   - Click the date range selector
   - Choose a predefined range or set custom dates
   - Click "Apply" to update the dashboard

## Conversations Management

### Overview

The Conversations tab allows users to manage and evaluate call recordings. This is where most of the quality assurance work happens.

### Key Components

1. **Filters Bar**
   - **Location**: Top of the Conversations tab
   - **Purpose**: Allows filtering conversations by various criteria
   - **Filter Options**:
     - Date range
     - Department
     - Operator/Agent
     - Evaluation status (Evaluated/Not Evaluated)
     - Score range

2. **Upload Button**
   - **Location**: Top-right corner of the Conversations tab
   - **Purpose**: Allows uploading new call recordings

3. **Departments List**
   - **Location**: Main content area of the Conversations tab
   - **Purpose**: Organizes conversations by department
   - **Display**: Shows department name, conversation count, and evaluation progress

4. **Conversation Table**
   - **Location**: Displayed after selecting a department
   - **Purpose**: Lists all conversations for the selected department
   - **Columns**:
     - Recording date/time
     - Duration
     - Operator name
     - Evaluation status
     - Score (if evaluated)
     - Actions (Play, Evaluate, Delete)

### How to Upload a Conversation

1. Navigate to the Conversations tab
2. Click the "Upload Conversation" button in the top-right corner
3. In the upload dialog:
   - Select the department from the dropdown
   - Select the operator/agent from the dropdown
   - Click "Choose File" to select the audio recording
   - Supported formats: MP3, WAV, M4A, OGG
   - Maximum file size: 50MB
4. Click "Upload" to start the upload process
5. Wait for the upload and processing to complete (this may take a few minutes for longer recordings)
6. The new conversation will appear in the selected department's conversation list

### How to Evaluate a Conversation

1. Navigate to the Conversations tab
2. Select the department containing the conversation
3. Find the conversation in the table and click "Evaluate" or click on the conversation row
4. In the evaluation screen:
   - Use the audio player at the top to listen to the recording
   - Review each rule listed below the player
   - For each rule, mark as:
     - Passed (✓): The operator followed the rule correctly
     - Failed (✗): The operator did not follow the rule
     - Not Applicable (N/A): The rule doesn't apply to this conversation
   - Add comments in the text field for each rule if needed
5. When all rules have been evaluated, click "Submit Evaluation"
6. The system will calculate the score and update the conversation's status

### How to Review an Evaluation

1. Navigate to the Conversations tab
2. Select the department containing the evaluated conversation
3. Find the conversation in the table (it will show a score if evaluated)
4. Click on the conversation row to open the details
5. Review the evaluation results, including:
   - Overall score
   - Individual rule assessments
   - Comments
   - Evaluator information
6. To modify an evaluation, click "Edit Evaluation" and make changes following the same process as evaluation

## Department Configuration

### Overview

The Departments tab allows administrators to create and configure departments with their own set of evaluation rules and scoring mechanisms.

### Key Components

1. **Departments Grid**
   - **Location**: Main content area of the Departments tab
   - **Purpose**: Displays all configured departments
   - **Display**: Shows department name, description, and scoring type

2. **Add Department Button**
   - **Location**: Top-right corner of the Departments tab
   - **Purpose**: Allows creating new departments

3. **Department Details**
   - **Location**: Displayed after selecting a department
   - **Purpose**: Shows department configuration and rules
   - **Sections**:
     - Department information (name, description, scoring type)
     - Rules list
     - Rule management controls

### How to Create a Department

1. Navigate to the Departments tab
2. Click the "Add Department" button in the top-right corner
3. In the creation dialog:
   - Enter a department name (required)
   - Enter a description (optional)
   - Select a scoring type:
     - **Flat Scoring**: All rules have equal weight
     - **Weighted Scoring**: Rules have different weights based on importance
4. Click "Create" to save the department

### How to Configure Department Rules

1. Navigate to the Departments tab
2. Click on a department to open its details
3. In the department details page, click "Add Rule" or "Edit Rules"
4. For each rule:
   - Enter a rule name (required)
   - Enter a description (required)
   - If using weighted scoring, assign a weight (1-10)
5. To reorder rules (affects display order during evaluation):
   - Drag and drop rules in the desired order
6. Click "Save Changes" to update the department configuration

### How to Edit or Delete a Department

1. Navigate to the Departments tab
2. Click on a department to open its details
3. To edit:
   - Click "Edit Department" 
   - Modify the name, description, or scoring type
   - Click "Save Changes"
4. To delete:
   - Click "Delete Department"
   - Confirm the deletion in the confirmation dialog
   - Note: Deleting a department will also delete all associated rules and evaluations

## Staff Management

### Overview

The Staff tab allows administrators to manage operators and view their performance metrics.

### Key Components

1. **Search Bar**
   - **Location**: Top of the Staff tab
   - **Purpose**: Allows searching for specific operators

2. **Add Agent Button**
   - **Location**: Top-right corner of the Staff tab
   - **Purpose**: Allows adding new operators to the system

3. **Staff Table**
   - **Location**: Main content area of the Staff tab
   - **Purpose**: Lists all operators with key performance metrics
   - **Columns**:
     - Name
     - Departments
     - Evaluations count
     - Average score
     - Last evaluation date
     - Actions

4. **Staff Details**
   - **Location**: Displayed after selecting an operator
   - **Purpose**: Shows detailed performance metrics for the selected operator
   - **Sections**:
     - Performance overview
     - Score trends chart
     - Department-specific performance
     - Rule adherence breakdown

### How to Add a Staff Member

1. Navigate to the Staff tab
2. Click the "Add Agent" button in the top-right corner
3. In the creation dialog:
   - Enter the operator's name (required)
   - Enter the operator's email (optional)
   - Select the departments they belong to (at least one required)
4. Click "Add" to save the operator

### How to View Staff Performance

1. Navigate to the Staff tab
2. Find the operator in the table (use search if needed)
3. Click on the operator's row to view detailed performance
4. In the details page:
   - Review the performance overview at the top
   - Check the score trends chart to see performance over time
   - View department-specific performance metrics
   - Analyze rule adherence to identify strengths and areas for improvement

### How to Edit or Delete a Staff Member

1. Navigate to the Staff tab
2. Find the operator in the table
3. To edit:
   - Click the edit icon in the Actions column
   - Modify the name, email, or department assignments
   - Click "Save Changes"
4. To delete:
   - Click the delete icon in the Actions column
   - Confirm the deletion in the confirmation dialog
   - Note: Deleting an operator will preserve their evaluations for reporting purposes

## Settings

### Overview

The Settings tab allows administrators to configure system-wide settings for the VoiceQA module.

### Key Components

1. **Categories Management**
   - **Location**: Settings tab
   - **Purpose**: Allows creating categories to group related rules
   - **Usage**: Categories can span across departments for consistent reporting

2. **Global Rules**
   - **Location**: Settings tab
   - **Purpose**: Defines rules that can be used across multiple departments
   - **Benefit**: Ensures consistency in evaluation criteria

### How to Manage Categories

1. Navigate to the Settings tab
2. In the Categories section, click "Add Category"
3. Enter a category name and description
4. Select which rules belong to this category
5. Click "Save" to create the category
6. To edit or delete categories, use the respective icons in the categories table

## Evaluation Process

### Step-by-Step Guide

1. **Preparation**
   - Ensure departments and rules are properly configured
   - Make sure operators are added to the system
   - Upload conversation recordings

2. **Evaluation**
   - Navigate to the Conversations tab
   - Select the department and find the conversation to evaluate
   - Open the evaluation screen
   - Listen to the recording
   - Evaluate each rule (Pass/Fail/N/A)
   - Add comments where necessary
   - Submit the evaluation

3. **Review**
   - Check the calculated score
   - Review rule-specific feedback
   - Identify patterns or trends

4. **Feedback**
   - Use evaluation results to provide feedback to operators
   - Focus on both strengths and areas for improvement
   - Reference specific examples from the recordings

### Best Practices for Evaluation

1. **Listen to the entire recording** before starting evaluation
2. **Be consistent** in how rules are applied across different operators
3. **Provide specific comments** that explain why a rule was marked as failed
4. **Use the N/A option appropriately** for rules that don't apply
5. **Evaluate regularly** to maintain quality standards
6. **Review evaluations periodically** to ensure consistency

## Scoring System

### Flat Scoring

In flat scoring, all rules have equal weight in the final score calculation:

- **Formula**: (Number of passed rules / Total applicable rules) × 100%
- **Example**: If an operator passes 8 out of 10 applicable rules, their score is 80%

### Weighted Scoring

In weighted scoring, rules have different weights based on their importance:

- **Formula**: (Sum of weights for passed rules / Total weight of applicable rules) × 100%
- **Example**: 
  - Rule A (weight 5): Passed
  - Rule B (weight 3): Failed
  - Rule C (weight 2): Passed
  - Total weight of passed rules: 7 (5+2)
  - Total weight of all applicable rules: 10 (5+3+2)
  - Score: 70% (7/10 × 100%)

### Score Interpretation

- **90-100%**: Excellent performance
- **75-89%**: Good performance with minor areas for improvement
- **60-74%**: Average performance with several areas needing attention
- **Below 60%**: Performance requires significant improvement

## Common User Questions

### General Questions

**Q: How do I access the VoiceQA module?**  
A: The VoiceQA module can be accessed from the main navigation menu. Look for "VoiceQA" in the sidebar or top navigation.

**Q: Can I use VoiceQA for multiple departments with different evaluation criteria?**  
A: Yes, VoiceQA allows you to create multiple departments, each with its own set of rules and scoring mechanisms.

**Q: Is there a limit to how many conversations I can upload?**  
A: The number of conversations you can upload depends on your subscription plan. Check your plan details in the Billing section.

### Conversations

**Q: What audio formats are supported for conversation uploads?**  
A: VoiceQA supports MP3, WAV, M4A, and OGG audio formats.

**Q: Can I bulk upload multiple conversations at once?**  
A: Currently, conversations must be uploaded individually. Bulk upload is planned for a future release.

**Q: How long does it take to process an uploaded conversation?**  
A: Processing time depends on the length of the recording. Typically, a 10-minute recording takes 1-2 minutes to process.

### Evaluation

**Q: Can multiple evaluators assess the same conversation?**  
A: Currently, each conversation can have only one active evaluation. However, evaluations can be edited by different users with appropriate permissions.

**Q: How is the final score calculated?**  
A: The final score is calculated as a percentage based on the scoring type:
- For flat scoring: (Passed rules / Total applicable rules) × 100%
- For weighted scoring: (Sum of weights for passed rules / Total weight of applicable rules) × 100%

**Q: What does "Not Applicable" mean when evaluating a rule?**  
A: "Not Applicable" means that the rule doesn't apply to the specific conversation being evaluated. Rules marked as N/A are excluded from the score calculation.

### Reporting

**Q: Can I export evaluation data for external analysis?**  
A: Yes, you can export data from the Statistics tab. Look for the "Export" button in the top-right corner of each section.

**Q: How can I see performance trends over time?**  
A: Performance trends can be viewed in the Statistics tab by adjusting the date range filter. Additionally, individual operator trends are available in the Staff details page.

## Troubleshooting

### Audio Playback Issues

**Problem**: Audio doesn't play when evaluating a conversation.  
**Solutions**:
1. Check that your browser has permission to play audio
2. Try refreshing the page
3. Use a different browser (Chrome and Firefox are recommended)
4. Check if the audio file format is supported
5. Ensure your computer's audio output is working correctly

### Upload Errors

**Problem**: Unable to upload conversation recordings.  
**Solutions**:
1. Verify the file is in a supported format (MP3, WAV, M4A, OGG)
2. Check that the file size is under the 50MB limit
3. Ensure you have selected both a department and an operator
4. Try a different browser if the issue persists
5. Check your internet connection stability

### Missing Data

**Problem**: Statistics or evaluations are not showing up.  
**Solutions**:
1. Verify the date range filters are set correctly
2. Check if you have the necessary permissions to view the data
3. Ensure evaluations have been completed and submitted
4. Try clearing your browser cache and reloading the page
5. Contact support if data is still missing after these steps

### Performance Issues

**Problem**: The VoiceQA module is slow or unresponsive.  
**Solutions**:
1. Try refreshing the page
2. Clear your browser cache
3. Close other browser tabs or applications
4. Use a more powerful device if available
5. Check your internet connection speed

## Additional Resources

- [VoiceQA API Documentation](https://api.fineguide.ai/docs)
- [Video Tutorials](https://fineguide.ai/tutorials)
- [Knowledge Base](https://support.fineguide.ai)
- [Contact Support](mailto:support@fineguide.ai)

---

This guide is designed to help support agents assist users with the VoiceQA module. For technical issues beyond the scope of this guide, please escalate to the development team.
