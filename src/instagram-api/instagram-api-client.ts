import { createAxiosInstance } from '../config';
import { BaseClientConfig } from './types';
import { InstagramMessageClient } from './modules/instagram-message.client';
import { InstagramUserClient } from './modules/instagram-user.client';
import { InstagramPostClient } from './modules/instagram-post';
import { InstagramCommentClient } from './modules/instagram-comment';

export class InstagramApiClient {
    public messages: InstagramMessageClient;
    public users: InstagramUserClient;
    public posts: InstagramPostClient;
    public comments: InstagramCommentClient;

    constructor(config: BaseClientConfig) {
        const axiosInstance = createAxiosInstance(config.token, config.phoneNumberId, "https://graph.instagram.com/v21.0");

        this.messages = new InstagramMessageClient(axiosInstance, config);
        this.users = new InstagramUserClient(axiosInstance, config);
        this.posts = new InstagramPostClient(axiosInstance, config);
    }
}
