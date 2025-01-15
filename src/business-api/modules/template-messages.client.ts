import { AxiosInstance } from 'axios';
import { CreateMessageTemplateRequest, CreateMessageTemplateResponse, DeleteMessageTemplateResponse, GetMessageTemplatesResponse } from '../types';

export interface WebhookConfig {
    url: string;
    verify_token?: string;
}

export class TemplateMessagesClient {
    private client: AxiosInstance;
    private onError?: (error: unknown) => void;

    constructor(client: AxiosInstance, onError?: (error: unknown) => void) {
        this.client = client;
        this.onError = onError;
    }

    /**
     * Get message templates
     * @param config Webhook configuration with URL and optional verify token.
     */
    async getMessageTemplates(): Promise<GetMessageTemplatesResponse> {
        try {
            const { data } = await this.client.get('/message_templates');
            return data;
        } catch (error) {
            if (this.onError) this.onError(error);
            throw error;
        }
    }

    async addMessageTemplate(data: CreateMessageTemplateRequest): Promise<CreateMessageTemplateResponse> {
        try {
            const response = await this.client.post('/message_templates', data);
            return response.data;
        } catch (error) {
            if (this.onError) this.onError(error);
            throw error;
        }
    }

    async deleteMessageTemplate(name: string): Promise<DeleteMessageTemplateResponse> {
        try {
            const response = await this.client.post('/message_templates?name=' + name);
            return response.data;
        } catch (error) {
            if (this.onError) this.onError(error);
            throw error;
        }
    }
}
