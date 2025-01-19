import { AxiosInstance } from 'axios';
import { MessageResponse } from '../types';
export interface ReplyButton {
    type: 'reply';
    reply: {
        id: string;
        title: string;
    };
}

export interface CtaUrlButton {
    type: 'cta_url';
    display_text: string; // The text displayed on the CTA button
    url: string; // The URL that the button links to
}

export interface ButtonMessageOptions {
    to: string;
    body: string; // Main body of the message
    footer?: string; // Optional footer text
    header?: string; // Optional header text
    buttons: ReplyButton[]; // Only reply buttons here
}

export interface CtaMessageOptions {
    to: string;
    body: string; // Main body of the message
    footer?: string; // Optional footer text
    header?: string; // Optional header text
    button: CtaUrlButton; // A single CTA button
}

export interface TemplateMessageOptions {
    to: string;
    name: string;
    language: string;
}

export class MessageClient {
    private client: AxiosInstance;
    private onError?: (error: unknown) => void;

    constructor(client: AxiosInstance, onError?: (error: unknown) => void) {
        this.client = client;
        this.onError = onError;
    }

    /**
     * Sends a text message.
     */
    async sendText(to: string, message: string): Promise<MessageResponse> {
        try {
            const response = await this.client.post<MessageResponse>('/messages', {
                messaging_product: 'whatsapp',
                to,
                type: 'text',
                text: { body: message },
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * Sends a message with reply buttons.
     */
    async sendButtonMessage(options: ButtonMessageOptions): Promise<MessageResponse> {
        try {
            // Prepare the body of the request with the reply buttons
            const response = await this.client.post<MessageResponse>('/messages', {
                messaging_product: 'whatsapp',
                to: options.to,
                type: 'interactive',
                interactive: {
                    type: 'button',
                    body: { text: options.body },
                    footer: options.footer ? { text: options.footer } : undefined,
                    header: options.header ? { type: 'text', text: options.header } : undefined,
                    action: {
                        buttons: options.buttons,
                    },
                },
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * Sends a message with a CTA URL button.
     */
    async sendCtaMessage(options: CtaMessageOptions): Promise<MessageResponse> {
        try {
            // Prepare the body of the request for the CTA URL message
            const response = await this.client.post<MessageResponse>('/messages', {
                messaging_product: 'whatsapp',
                to: options.to,
                type: 'interactive',
                interactive: {
                    type: 'cta_url',
                    body: { text: options.body },
                    footer: options.footer ? { text: options.footer } : undefined,
                    header: options.header ? { type: 'text', text: options.header } : undefined,
                    action: {
                        name: 'cta_url',
                        parameters: {
                            display_text: options.button.display_text,
                            url: options.button.url,
                        }
                    },
                },
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async sendTemplateMessage(options: TemplateMessageOptions): Promise<MessageResponse> {
        try {
            // Prepare the body of the request for the CTA URL message
            const response = await this.client.post<MessageResponse>('/messages', {
                messaging_product: 'whatsapp',
                to: options.to,
                type: 'template',
                template: {
                    name: options.name,
                    language: {
                        code: options.language
                    }
                }
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async readMessage(messageId: string) {
        try {
            // Prepare the body of the request with the reply buttons
            const response = await this.client.post<MessageResponse>('/messages', {
                messaging_product: 'whatsapp',
                status: "read",
                message_id: messageId
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Error handling utility (can be expanded)
    private handleError(error: unknown) {
        if (this.onError) {
            this.onError(error);
        } else {
            console.error('Error:', error);
        }
    }
}