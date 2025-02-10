import { AxiosInstance } from 'axios';
import { BaseClientConfig, InstagramUserInfo } from '../types';
export class InstagramUserClient {
    private client: AxiosInstance;
    private onError?: (error: unknown) => void;

    constructor(client: AxiosInstance, private config: BaseClientConfig) {
        this.client = client;
        this.onError = this.config.onError;
    }

    async getDetails(userId: string): Promise<InstagramUserInfo> {
        try {
            const response = await this.client.get(`/${userId}?fields=id,profile_picture_url,username,name&access_token=${this.config.token}`);
            return response.data;
        } catch (error) {
            this.handleError(error)
        }
    }


    private handleError(error: unknown) {
        if (this.onError) {
            this.onError(error);
        } else {
            console.error('Error:', error);
        }
    }
}