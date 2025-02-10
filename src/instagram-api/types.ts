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

export interface InstagramUserInfo {
    id: string;
    name: string;
    username: string;
    profile_picture_url: string;
}


export interface InstagramPostInfo {
    id: string;
    comments_count: number;
    like_count: number;
    media_type: string;
    media_url: string;
    permalink: string;
    timestamp: number;
}