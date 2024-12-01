import axios, { AxiosInstance } from 'axios';

/**
 * Configuration for Axios client.
 */
export const createAxiosInstance = (token: string, phoneNumberId: string, apiUrl?: string): AxiosInstance => {
    if (!token || !phoneNumberId) {
        throw new Error('Token and phoneNumberId are required.');
    }

    return axios.create({
        baseURL: apiUrl || `https://graph.facebook.com/v21.0/${phoneNumberId}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
};
