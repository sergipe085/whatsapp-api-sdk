import { AxiosInstance } from 'axios';

export interface WebhookConfig {
    url: string;
    verify_token?: string;
}

export class WebhookClient {
    private client: AxiosInstance;
    private onError?: (error: unknown) => void;

    constructor(client: AxiosInstance, onError?: (error: unknown) => void) {
        this.client = client;
        this.onError = onError;
    }

    /**
     * Sets up a webhook URL.
     * @param config Webhook configuration with URL and optional verify token.
     */
    async setWebhook(config: WebhookConfig): Promise<void> {
        try {
            await this.client.post('/webhook', {
                object: 'whatsapp_business_account',
                callback_url: config.url,
                verify_token: config.verify_token || '',
            });
        } catch (error) {
            if (this.onError) this.onError(error);
            throw error;
        }
    }

    /**
     * Retrieves the current webhook configuration.
     */
    async getWebhook(): Promise<{ url: string; verify_token: string }> {
        try {
            const response = await this.client.get<{ url: string; verify_token: string }>('/webhook');
            return response.data;
        } catch (error) {
            if (this.onError) this.onError(error);
            throw error;
        }
    }

    /**
     * Deletes the current webhook configuration.
     */
    async deleteWebhook(): Promise<void> {
        try {
            await this.client.delete('/webhook');
        } catch (error) {
            if (this.onError) this.onError(error);
            throw error;
        }
    }
}
