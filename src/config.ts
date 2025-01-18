import axios, { AxiosInstance } from 'axios';

/**
 * Configuration for Axios client.
 */
export const createAxiosInstance = (token: string, id: string, apiUrl?: string): AxiosInstance => {
    if (!token || !id) {
        console.error("TOKEN AND ID ARE REQUIRED");
    }

    return axios.create({
        baseURL: apiUrl || `https://graph.facebook.com/v21.0/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
};
