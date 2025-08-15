# Actions Tab Documentation

## What is an Action?
An action in the context of Fineguide, is essentially a configurable HTTP request that can be defined and executed by the Assistant. It allows users to interact with external APIs or services by specifying the details of the request, such as:

- **Request Method**: The HTTP method (e.g., `GET`, `POST`, `PUT`, etc.).
- **URL**: The endpoint to which the request is sent.
- **Headers**: Key-value pairs for request headers (e.g., `Authorization`).
- **Parameters**: Input values required for the request, which can be included in the body, path, query, or headers.
- **Body**: The payload of the request, typically used for methods like `POST` or `PUT`.

Actions are defined in a structured JSON format, ensuring consistency and validation. They can include dynamic placeholders (e.g., `{{price}}`) for values that are resolved at runtime, making them flexible for various use cases.

In summary, an action is a reusable, structured way to define and execute HTTP requests within the Assistant's platform.

## Overview

The **Actions** tab allows users to define actions for the Assistant. An action is essentially an **HTTP request**, which can be configured with specific parameters, headers, and body content.

Each action follows a structured **JSON format**, specifying key details such as the request method, URL, headers, parameters, and body content.

## Action JSON Structure

To define an action, use the following JSON structure:

```json
{
  "name": "",
  "description": "",
  "method": "post",
  "url": "https://",
  "headers": {
    "Authorization": ""
  },
  "content-type": "application/json",
  "parameters": [
    {
      "name": "price",
      "type": "number",
      "required": true,
      "location": "body",
      "description": "Price parameter responsible for setting a price limit in the search."
    },
    {
      "name": "operator",
      "type": "number",
      "required": true,
      "location": "body",
      "description": "Operator parameter responsible for defining the search operation."
    }
  ],
  "body": [
    {
      "content-type": "application/json",
      "data": {}
    }
  ]
}
```

## JSON Schema Definition

The schema below enforces validation for an action's JSON structure:
```typescript
export const jsonSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description:
        'The name of the request in snake_case (must contain only letters and underscores, no spaces or numbers).',
      pattern: '^[a-zA-Z_]+$', // Allows only letters and underscores
    },
    description: {
      type: 'string',
      description: 'A brief description of the request',
    },
    method: {
      type: 'string',
      enum: ['get', 'post', 'put', 'delete', 'patch', 'options', 'head'],
      description: 'The HTTP method used for the request',
    },
    url: {
      type: 'string',
      format: 'uri',
      description: 'The endpoint URL for the request',
    },
    headers: {
      type: 'object',
      additionalProperties: {
        type: 'string',
      },
      description: 'Key-value pairs representing the headers for the request',
    },
    'content-type': {
      // Changed from 'contentType' to 'content-type'
      type: 'string',
      description: 'The Content-Type header for the request',
      default: 'application/json',
      examples: ['application/json', 'application/xml'],
    },
    parameters: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'The name of the parameter',
          },
          type: {
            type: 'string',
            enum: ['string', 'number', 'boolean'],
            description: 'The data type of the parameter',
          },
          required: {
            type: 'boolean',
            description: 'Whether this parameter is required',
          },
          location: {
            type: 'string',
            enum: ['body', 'path', 'query', 'headers'],
            description: 'The location of the parameter in the request',
          },
          description: {
            type: 'string',
            description: 'A description of the parameter',
          },
          values: {
            type: 'object',
            // items: {
            //   type: 'string',
            //   // enum: allowedOperators, // Add enum constraint here
            // },
            description: 'Item values',
          },
        },
        required: ['name', 'type', 'required', 'location', 'description'],
        additionalProperties: false,
      },
      description: 'Array of parameters used in the request',
      additionalItems: false,
    },

    /**
     * The key part here is the `data` property inside each object of the `body` array.
     * We replace the simple { type: 'object' } with a recursive patternProperties
     * definition to allow arbitrary keys and values (including Handlebars).
     */
    body: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          'content-type': {
            type: 'string',
            description: 'The content type of the body',
            default: 'application/json',
            examples: ['application/json', 'application/xml'],
          },
          data: 'string',
        },
        required: ['content-type', 'data'],
        additionalProperties: false,
      },
      additionalItems: false,
      description: 'Body objects with content type and data',
    },
  },

  /**
   * Mark these fields as required at the top-level.
   */
  required: [
    'name',
    'description',
    'method',
    'url',
    'content-type',
    'parameters',
  ],
  additionalProperties: false,

  /**
   * Definitions section for the recursive “data” object.
   * - patternProperties allows any string key (including something like {{price}}).
   * - each value can be either a string or another nested object of the same shape.
   */
  definitions: {
    dataObject: {
      type: 'object',
      description:
        'A recursively-defined object to allow Handlebars in keys/values',
      patternProperties: {
        '^.*$': {
          oneOf: [
            {
              type: 'string',
              // Optionally, you can add a `pattern` here to strictly enforce {{handlebars}} syntax.
              // e.g. "pattern": "^{{[^}]+}}$"
            },
            {
              // Nested objects of the same shape
              $ref: '#/definitions/dataObject',
            },
          ],
        },
      },
      additionalProperties: false,
    },
  },
} as const

// TypeScript type for the JSON schema (optional but recommended)
export type JsonSchemaType = typeof jsonSchema

// Example JSON data conforming to the schema
export const exampleJson = {
  name: '',
  description: '',
  method: 'post',
  url: 'https://',
  headers: {
    Authorization: '',
  },
  'content-type': 'application/json', // Updated key
  parameters: [
    {
      name: 'price',
      type: 'number',
      required: true,
      location: 'body',
      description:
        'Price parameter responsible for setting a price limit in the search.',
    },
    {
      name: 'operator',
      type: 'number',
      required: true,
      location: 'body',
      description:
        'Price parameter responsible for setting a price limit in the search.',
    },
    // Removed operator parameters as per previous instructions
  ],
  body: [
    {
      'content-type': 'application/json', // Updated key
      data: {
        // Handlebars-like key
        // '{{price}}': {
        //   // Handlebars-like key & value
        //   '{{operator}}': '{{value}}',
        // },
        // // Normal keys are still allowed
        // otherKey: 'You can still have normal values, like {{optional}} here',
      },
    },
  ],
} as const

// TypeScript type for the example JSON (optional)
export type ExampleJsonType = typeof exampleJson
```

### Top-Level Properties:
- **`name`** *(string, required)*: Unique name for the request, must be in snake_case (only letters and underscores, no spaces or numbers).
- **`description`** *(string, required)*: Brief description of what the request does.
- **`method`** *(string, required)*: Defines the HTTP method. Allowed values:
  - `get`
  - `post`
  - `put`
  - `delete`
  - `patch`
  - `options`
  - `head`
- **`url`** *(string, required, URI format)*: The endpoint URL where the request will be sent.
- **`headers`** *(object, optional)*: Key-value pairs representing request headers.
- **`content-type`** *(string, required)*: Defines the content type of the request (e.g., `application/json`, `application/xml`).

### Parameters:
Parameters define values required for the request. Each parameter includes:
- **`name`** *(string, required)*: The name of the parameter.
- **`type`** *(string, required)*: Defines the data type of the parameter. Parameters are required to have one of the following types, other tyes are not valid:
    - `string`
    - `number` 
    - `boolean`
- **`required`** *(boolean, required)*: Indicates if the parameter is mandatory.
- **`location`** *(string, required)*: Specifies where the parameter is included in the request:
  - `body`
  - `path`
  - `query`
  - `headers`
- **`description`** *(string, required)*: Explanation of the parameterâ€™s purpose.

### Request Body:
Defines the data payload for requests that include a body (`POST`, `PUT`, etc.).
- **`content-type`** *(string, required)*: Specifies the body format.
- **`data`** *(object, required)*: Contains key-value pairs representing request body content.

## Example Action Definition

Below is an example of an action that sends a `POST` request with required parameters:

```json
{
  "name": "search_by_price",
  "description": "Fetches items based on a price limit.",
  "method": "post",
  "url": "https://api.example.com/search",
  "headers": {
    "Authorization": "Bearer <TOKEN>"
  },
  "content-type": "application/json",
  "parameters": [
    {
      "name": "price",
      "type": "number",
      "required": true,
      "location": "body",
      "description": "Sets a price limit for search results."
    }
  ],
  "body": [
    {
      "content-type": "application/json",
      "data": {
        "price": "{{price}}"
      }
    }
  ]
}
```

## Notes
- Ensure **all required fields** are present when defining an action.
- **Parameter names** should be descriptive and relevant to their purpose.
- **Headers and authentication** should be included when necessary.
- **Data placeholders** (e.g., `{{price}}`) can be used for dynamic values.

This documentation serves as a guide for configuring actions efficiently within the **Actions** tab.