import { AxiosInstance } from 'axios';

export class ContactClient {
    private client: AxiosInstance;
    private onError?: (error: unknown) => void;

    constructor(client: AxiosInstance, onError?: (error: unknown) => void) {
        this.client = client;
        this.onError = onError;
    }

    async addContact(name: string, phone: string): Promise<void> {
        try {
            await this.client.post('/contacts', {
                name,
                phone,
            });
        } catch (error) {
            if (this.onError) this.onError(error);
            throw error;
        }
    }
}
