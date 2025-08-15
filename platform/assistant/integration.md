# Assistant > Integration tab

## Overview
This documentation provides detailed instructions for integrating the AI Agent widget into your website using Fineguide. The chat window operates as a standalone application with a unique URL, which allows direct access to the chat interface using the following format:

```
https://client.fineguide.ai/{agent_id}
```

Replace `{agent_id}` with the specific ID of your AI agent.

## Installation
Fineguide chat window widget requires two critical script elements for proper functionality:

1. A configuration script that sets your unique agent ID
2. The core Fineguide widget script that powers the chat functionality

Add both scripts exactly as shown below to your HTML file, either in the `<head>` section or immediately before the closing `</body>` tag:

```html
<!-- Insert this code in the header section of your website, or right above the closing </body> tag -->
<script>var FINEGUIDE_CHATBOT_ID = '6434515b-8541-4861-bb24-8acd6e77e8c4';</script>
<script src="https://cdn.fineguide.ai/fineguide.min.js"></script>
```

> **Important:** Both scripts are required and must be included in exactly this order:
> 1. The configuration script **must** be placed first to ensure your agent ID is registered before the widget loads
> 2. The widget script **must** follow immediately after to properly initialize with your agent ID
>
> Modifying the script order or content may prevent the widget from functioning correctly.

Once properly installed, the Chat Widget will automatically display on your website in its default configuration. You can customize its appearance and behavior through the settings described in later sections.

> **Note:** The position and appearance of the widget icon can be modified directly from the 'Appearance' tab within your Fineguide dashboard.

## Additional Configuration Options

Once the integration script is installed on your website, Fineguide provides several JavaScript options to enhance interactivity and customization of the chat window.

### Theme Management
The chat widget supports both dark and light themes, which can be configured dynamically via JavaScript commands.

- **Get Current Theme**  
Returns the current theme of the chat window, either `"dark"` or `"light"`.
```javascript
window.$__fg_window_theme; // returns "dark" or "light"
```

- **Switch Theme**  
Programmatically switch the theme to either `"dark"` or `"light"` mode.
```javascript
window.$__fg_window_switch_theme("dark");
```

### Chat Window Controls
You can also programmatically control the chat window's visibility:

- **Open Chat Window**  
```javascript
window.$__fg_window_open();
```

- **Close Chat Window**  
```javascript
window.$__fg_window_close();
```

- **Toggle Chat Window**  
Toggles the chat window state: opens if closed, closes if open.
```javascript
window.$__fg_window_toggle();
```

These commands provide a flexible way to interact with the chat widget, allowing seamless integration with your website's user experience.

## Conclusion
By following this guide, you can easily integrate the Fineguide AI Agent widget into your website and customize its appearance and behavior as needed. For more advanced customization options, refer to the official Fineguide documentation or your Fineguide dashboard.

