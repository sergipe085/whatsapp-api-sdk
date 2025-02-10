import { AxiosInstance } from 'axios';
import { BaseClientConfig, InstagramPostInfo } from '../types';

export class InstagramPostClient {
    private client: AxiosInstance;
    private onError?: (error: unknown) => void;

    constructor(client: AxiosInstance, private config: BaseClientConfig) {
        this.client = client;
        this.onError = this.config.onError;
    }

    async getDetails(postId: string): Promise<InstagramPostInfo> {
        try {
            const response = await this.client.get(`/${postId}?fields=id,comments_count,like_count,media_type,media_url,permalink,timestamp&access_token=${this.config.token}`);
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