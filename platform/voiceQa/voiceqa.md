# VoiceQA

## Overview
VoiceQA is a powerful analytical tool developed by Fineguide designed to help call centers assess and enhance their call handling performance. By using VoiceQA, call centers can evaluate their interactions, gather valuable insights, and determine how effectively operators are adhering to established protocols and guidelines.

## How It Works
VoiceQA operates by categorizing call centers into various departments, each with its own specific objectives and performance standards. For instance, departments may include Customer Service, Sales, Technical Support, etc. Since each department has a distinct purpose, the evaluation criteria for calls will differ accordingly.

### Defining Evaluation Rules
Every department is governed by a unique set of rules aimed at ensuring quality and consistency in operator performance. These rules may include:
- **Greeting Protocol:** Ensuring the operator uses the corporate greeting.
- **Upselling Efforts:** Checking if the operator attempted to upsell relevant products or services.
- **Problem Resolution:** Assessing whether the operator effectively addressed the customer’s concerns.
- **Politeness and Professionalism:** Verifying the use of courteous language and maintaining a professional tone.

### Scoring Methods
VoiceQA supports two scoring methodologies to measure operator performance. Both methods evaluate how well the operator adhered to the rules. If the operator followed a rule flawlessly, they receive the maximum points for that rule. However, partial compliance is also possible, resulting in scores such as `7 out of 10` or `2 out of 5`.

## Statistics Dashboard

The Statistics dashboard provides a high-level overview of your call center's performance:

### Evaluation Overview

- **Avg. Minutes Recorded Monthly**: Average duration of calls recorded per month
- **Avg. Monthly Cost Estimate (Credits)**: Estimated credit usage based on recording volume
- **Credits Used Current Month**: Actual credit consumption in the current month

### Process Tracking

- **Minutes Evaluated**: Total duration of calls that have been evaluated
- **Minutes Recorded**: Total duration of calls that have been recorded
- **Credits Spent & Avg Cost Estimate**: Comparison between actual and estimated credit usage

## Managing Conversations

The Conversations tab allows you to manage and evaluate call recordings:

1. **Upload Conversations**: Click the upload button in the top-right corner to add new call recordings
2. **Filter Conversations**: Use the filter bar to search for specific conversations by date range, operator, or other criteria
3. **View Departments**: Browse conversations organized by department
4. **Evaluate Conversations**: Click on a conversation to access its details and perform an evaluation

### Conversation Evaluation Process

1. Listen to the recording using the built-in audio player
2. Review each rule applicable to the conversation
3. Mark rules as Passed, Failed, or Not Applicable
4. Add comments or feedback for specific rules when necessary
5. Submit the evaluation when complete

## Department Management

The Departments tab allows you to configure evaluation criteria for different teams:

1. **Create Departments**: Click the "Add Department" button to create a new department
2. **Configure Scoring Mechanism**: Choose between Flat Scoring (equal weight for all rules) or Weighted Scoring (variable importance)
3. **Manage Rules**: Add, edit, or remove evaluation rules for each department

### Creating and Managing Rules

1. Navigate to the desired department
2. Click "Add Rule" to create a new evaluation criterion
3. Provide a descriptive name and detailed explanation of the rule
4. Assign a weight (for weighted scoring) based on the rule's importance
5. Save the rule to add it to the department's evaluation criteria

## Staff Performance Tracking

The Staff tab provides tools to monitor and manage operator performance:

1. **Add Staff Members**: Click "Add Agent" to register new operators in the system
2. **Search Staff**: Use the search bar to find specific operators
3. **View Performance Metrics**: See evaluation scores, trends, and areas for improvement
4. **Detailed Analysis**: Click on an operator to view their complete performance history and rule adherence

### Performance Charts

Staff performance is visualized through various charts:

- Overall score trends over time
- Rule-specific performance metrics
- Comparison with department and organization averages

## Evaluation Process

When evaluating a conversation, each applicable rule is checked against the conversation content:

- **Passed**: The operator adhered to the rule (full points)
- **Failed**: The operator did not adhere to the rule (no points)
- **Not Applicable**: The rule does not apply to this specific conversation (excluded from scoring)

## Scoring Calculation

The final score for an operator is calculated as a percentage of the maximum achievable points:

- **Flat Scoring**: (Number of passed rules / Total applicable rules) × 100%
- **Weighted Scoring**: (Sum of weights for passed rules / Total weight of applicable rules) × 100%

### Score Interpretation

- **90-100%**: Excellent performance, consistently following best practices
- **75-89%**: Good performance with minor areas for improvement
- **60-74%**: Average performance with several areas needing attention
- **Below 60%**: Performance requires significant improvement

## Best Practices

1. **Regular Evaluations**: Evaluate conversations consistently to maintain quality standards
2. **Constructive Feedback**: Provide specific comments when marking rules as failed
3. **Rule Refinement**: Periodically review and update rules to reflect changing requirements
4. **Performance Reviews**: Use the data to conduct informed coaching sessions with operators
5. **Department Benchmarking**: Compare performance across departments to identify best practices

## Troubleshooting

- **Audio Playback Issues**: Ensure your browser has permission to play audio and try refreshing the page
- **Upload Errors**: Check that your audio files are in a supported format (MP3, WAV, etc.)
- **Missing Data**: Verify that the date range filters are set correctly when viewing statistics

## Conclusion

The VoiceQA module provides a structured and efficient approach to evaluating call center performance. By consistently using this tool, you can identify strengths, weaknesses, and areas requiring further training or guidance, ultimately improving the quality of customer interactions across your organization.
