import { createAxiosInstance } from '../config';
import { BaseClientConfig } from './types';
import { TemplateMessagesClient } from './modules/template-messages.client';


export class WhatsappBusinessApiClient {
    public message_templates: TemplateMessagesClient;

    constructor(config: BaseClientConfig) {
        const axiosInstance = createAxiosInstance(config.token, config.businessAccountId, config.apiUrl);

        this.message_templates = new TemplateMessagesClient(axiosInstance, config.onError);
    }
}
