export interface BaseClientConfig {
    token: string;
    phoneNumberId: string;
    apiUrl?: string;
    onError?: (error: unknown) => void;
}

export interface MessageResponse {
    messaging_product: string;
    contacts: Array<{ input: string; wa_id: string }>;
    messages: Array<{ id: string }>;
}

export interface MediaResponse {
    id: string;
    url: string;
}

export interface UploadMediaResponse {
    id: string;
}
