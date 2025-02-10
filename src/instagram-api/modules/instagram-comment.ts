import { AxiosInstance } from 'axios';
import { BaseClientConfig, InstagramPostInfo } from '../types';

export class InstagramCommentClient {
    private client: AxiosInstance;
    private onError?: (error: unknown) => void;

    constructor(client: AxiosInstance, private config: BaseClientConfig) {
        this.client = client;
        this.onError = this.config.onError;
    }

    async delete(commentId: string): Promise<InstagramPostInfo> {
        try {
            const response = await this.client.delete(`/${commentId}?access_token=${this.config.token}`);
            return response.data;
        } catch (error) {
            this.handleError(error)
        }
    }

    async hide(commentId: string): Promise<InstagramPostInfo> {
        try {
            const response = await this.client.post(`/${commentId}?hide=true&access_token=${this.config.token}`);
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