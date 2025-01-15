import { createAxiosInstance } from '../config';
import { BaseClientConfig } from './types';
import { MessageClient } from './modules/message.client';
import { ContactClient } from './modules/contact.client';
import { WebhookClient } from './modules/webhook.client';


export class WhatsappCloudApiClient {
    public messages: MessageClient;
    public contacts: ContactClient;
    public webhook: WebhookClient;

    constructor(config: BaseClientConfig) {
        const axiosInstance = createAxiosInstance(config.token, config.phoneNumberId, config.apiUrl);

        this.messages = new MessageClient(axiosInstance, config.onError);
        this.contacts = new ContactClient(axiosInstance, config.onError);
        this.webhook = new WebhookClient(axiosInstance, config.onError);
    }
}
