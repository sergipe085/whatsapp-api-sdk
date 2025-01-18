import { createAxiosInstance } from '../config';
import { BaseClientConfig } from './types';
import { InstagramMessageClient } from './modules/instagram-message.client';


export class InstagramApiClient {
    public messages: InstagramMessageClient;

    constructor(config: BaseClientConfig) {
        const axiosInstance = createAxiosInstance(config.token, config.phoneNumberId, "https://graph.instagram.com/v21.0");

        this.messages = new InstagramMessageClient(axiosInstance, config.onError);
    }
}
