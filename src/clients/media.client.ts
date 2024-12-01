// import { AxiosInstance } from 'axios';
// import { MediaResponse, UploadMediaResponse } from '../types';

// export class MediaClient {
//     private client: AxiosInstance;
//     private onError?: (error: unknown) => void;

//     constructor(client: AxiosInstance, onError?: (error: unknown) => void) {
//         this.client = client;
//         this.onError = onError;
//     }

//     async uploadMedia(file: Buffer, type: string): Promise<UploadMediaResponse> {
//         try {
//             const formData = new FormData();
//             formData.append('file', file, { contentType: type });
//             const response = await this.client.post<UploadMediaResponse>('/media', formData, {
//                 headers: formData.getHeaders(),
//             });
//             return response.data;
//         } catch (error) {
//             if (this.onError) this.onError(error);
//             throw error;
//         }
//     }

//     async getMedia(mediaId: string): Promise<MediaResponse> {
//         try {
//             const response = await this.client.get<MediaResponse>(`/media/${mediaId}`);
//             return response.data;
//         } catch (error) {
//             if (this.onError) this.onError(error);
//             throw error;
//         }
//     }
// }
