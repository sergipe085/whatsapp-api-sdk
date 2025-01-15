Here’s a professional and polished README for your WhatsApp SDK, including all the essential sections to guide users:

---

# WhatsApp API SDK

[![npm version](https://badge.fury.io/js/%40sb%2Fwhatsapp-api-sdk.svg)](https://badge.fury.io/js/%40sb%2Fwhatsapp-api-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

The **WhatsApp API SDK** is a powerful and easy-to-use Node.js library for interacting with the official WhatsApp Cloud API. Designed for scalability and ease of use, it supports message sending, webhook integration, interactive buttons, and more—all with TypeScript typings for robust development.

---

## ✨ Features

- **Simple Configuration:** Initialize the client with minimal setup.
- **Send Messages:** Text, media, templates, and interactive messages.
- **Webhooks:** Built-in webhook handling for GET validation and POST callbacks.
- **Interactive Buttons:** Send Call-to-Action (CTA) buttons and quick replies.
- **TypeScript Support:** Includes complete TypeScript definitions for a seamless development experience.

---

## 🚀 Installation

Install the SDK using npm:

```bash
npm install @sergiobanhos/whatsapp-api-sdk
```

---

## 🛠️ Usage

### Initialize the Client

```typescript
import WhatsAppClient from '@sb/whatsapp-api-sdk';

const client = new WhatsAppClient({
  accessToken: 'your-meta-access-token',
  verifyToken: 'your-webhook-verify-token',
  onError: (error) => {
    console.error('WhatsApp API Error:', error);
  },
  webhookCallback: (message) => {
    console.log('Webhook received:', message);
  },
});
```

---

### Sending a Text Message

```typescript
await client.sendTextMessage('<CUSTOMER_PHONE_NUMBER>', 'Hello from WhatsApp API SDK!');
```

---

### Sending an Interactive Message with Buttons

```typescript
await client.sendButtonMessage('<CUSTOMER_PHONE_NUMBER>', {
  body: 'Choose an option:',
  buttons: [
    { type: 'reply', id: '1', title: 'Option 1' },
    { type: 'reply', id: '2', title: 'Option 2' },
  ],
});
```

---

### Sending a Call-to-Action Button (CTA)

```typescript
await client.sendCTAMessage('<CUSTOMER_PHONE_NUMBER>', {
  header: { type: 'text', text: 'Header Text' },
  body: 'Visit our website:',
  footer: 'Footer Text',
  buttons: [
    { type: 'url', url: 'https://example.com', title: 'Go to Website' },
  ],
});
```

---

### Webhook Integration

The SDK provides a built-in webhook handler using Express:

```typescript
import express from 'express';
import WhatsAppClient from '@sb/whatsapp-api-sdk';

const app = express();
const client = new WhatsAppClient({
  accessToken: 'your-meta-access-token',
  verifyToken: 'your-webhook-verify-token',
});

client.setupWebhookRoutes(app);

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});
```

---

## 📚 API Documentation

### WhatsAppClient Options

| Option         | Type       | Description                                                   |
|----------------|------------|---------------------------------------------------------------|
| `accessToken`  | `string`   | Your Meta API access token.                                   |
| `verifyToken`  | `string`   | Token used for webhook validation.                           |
| `onError`      | `Function` | Callback for handling errors from the WhatsApp Cloud API.     |
| `webhookCallback` | `Function` | Callback triggered when webhook events are received.      |

### WhatsAppClient Methods

| Method                | Description                                   |
|-----------------------|-----------------------------------------------|
| `sendTextMessage`     | Sends a simple text message.                 |
| `sendButtonMessage`   | Sends a message with interactive buttons.    |
| `sendCTAMessage`      | Sends a Call-to-Action message with links.   |
| `setupWebhookRoutes`  | Sets up webhook validation and POST routes.  |

---

## 🧪 Testing

To test the library locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sergipe085/whatsapp-api-sdk.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the test suite:
   ```bash
   npm test
   ```

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 💬 Support

For any questions or issues, please [open an issue](https://github.com/sergipe085/whatsapp-api-sdk/issues) or contact us at sergiobanhosf@gmail.com.

---

## 🌟 Acknowledgments

Special thanks to the WhatsApp Cloud API team and the open-source community for their support and documentation.

---

Let me know if you'd like to add custom badges, extended documentation, or other sections!