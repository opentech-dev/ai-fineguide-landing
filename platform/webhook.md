# Webhook Documentation

## What is a Webhook?
A webhook is a way for one system to send real-time notifications or data to another system when specific events occur. It works by making an HTTP POST request to a predefined URL whenever the event is triggered.

In the context of this platform, webhooks are used to notify external systems about events such as:
- A user sending a message (`MESSAGE` event).
- A message being rated (`RATE_MESSAGE` event).
- A ticket being created (`TICKET` event).
- A lead being created (`CREATE_LEAD` event).

Webhooks allow seamless integration between the platform and external systems, enabling automation and real-time communication. The payload sent in the webhook contains structured data (in JSON format) about the event, which the receiving system can process and act upon.

## Overview
To create a webhook, go to `Settings > Webhooks`. 
The API emits webhooks for various events in the system. This document describes the webhook payloads and their structure.

### Retry Policy
- Failed webhook deliveries will be retried up to 3 times
- Retries follow an exponential backoff pattern (1 minute, 5 minutes, 15 minutes)
- After 3 failed attempts, the webhook will be marked as failed

## Common Fields
All webhook payloads share these common fields:
- `event`: The type of event (MESSAGE, RATE_MESSAGE, TICKET)
- `botId`: Unique identifier of the bot
- `sessionId`: Unique identifier of the chat session

## Event Types and Their Specific Fields

### 1. MESSAGE Event
```json
{
  "event": "MESSAGE",
  "botId": "string",
  "sessionId": "string",
  "role": "USER",  // Indicates who sent the message
  "message": "string",  // The actual message content
  "messageId": "string"  // Unique identifier of the message
}
```

### 2. RATE_MESSAGE Event
```json
{
  "event": "RATE_MESSAGE",
  "botId": "string",
  "sessionId": "string",
  "rating": number,  // Rating value (1 in your example)
  "messageId": "string"  // ID of the message being rated
}
```

### 3. TICKET Event
```json
{
  "event": "TICKET",
  "customerName": "string",  // Name of the customer
  "customerEmail": "string",  // Email of the customer
  "customerMessage": "string",  // Message from the customer
  "botId": "string",
  "sessionId": "string"
}
```

### 4. CREATE_LEAD Event
```json
{
  "event": "CREATE_LEAD",
  "userId": "string",  // Unique identifier of the user
  "email": "string",  // Email address of the user
  "intent": "string",  // The user's intent or reason for creating the lead
  "name": "string",  // Name of the user
  "botId": "string",  // Unique identifier of the bot
  "sessionId": "string"  // Unique identifier of the chat session
}
```

## Notes
- All IDs (botId, sessionId, messageId) are UUIDs
- The `role` field in MESSAGE events indicates who sent the message (USER in your example)
- The `rating` in RATE_MESSAGE events appears to be a numeric value
- TICKET events contain customer information and their message

## Example Payloads

### MESSAGE Event Example
```json
{
  "event": "MESSAGE",
  "botId": "6434515b-8541-4861-bb24-8acd6e77e8c4",
  "sessionId": "b8e034be-90d8-477d-b919-8fcfcf37dc10",
  "role": "USER",
  "message": "hi",
  "messageId": "733b7d55-61ea-450f-b585-27755b015596"
}
```

### RATE_MESSAGE Event Example
```json
{
  "event": "RATE_MESSAGE",
  "botId": "6434515b-8541-4861-bb24-8acd6e77e8c4",
  "sessionId": "ee9181d5-33b0-4433-ad88-2c1e6e28a26b",
  "rating": 1,
  "messageId": "ad2deddc-6f36-4af7-8b2f-3ddeab122b64"
}
```

### TICKET Event Example
```json
{
  "event": "TICKET",
  "customerName": "jd",
  "customerEmail": "test@email.com",
  "customerMessage": "hello",
  "botId": "6434515b-8541-4861-bb24-8acd6e77e8c4",
  "sessionId": "ee9181d5-33b0-4433-ad88-2c1e6e28a26b"
}
```

## Testing Webhooks 
1. Use a testing app like `https://webhook-test.com/`
2. Test your endpoint with all event types
3. Verify proper handling of malformed requests
4. Simulate failed deliveries and retry scenarios

