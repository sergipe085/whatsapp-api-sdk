export interface BaseClientConfig {
    token: string;
    businessAccountId: string;
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

/**
 * Configuration for MessageTemplate-related operations.
 */
export interface MessageTemplateConfig extends BaseClientConfig {
    namespace: string; // Namespace for the message templates
}

/**
 * Represents a single message template.
 */
export interface MessageTemplate {
    id: string;
    name: string;
    language: string;
    category: string; // e.g., transactional, marketing
    components: Array<MessageTemplateComponent>;
    status: 'APPROVED' | 'PENDING' | 'REJECTED'; // Status of the template
    created_time: string; // ISO date string
}

/**
 * Represents a component of a message template.
 */
export interface MessageTemplateComponent {
    type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTONS'; // Component type
    text?: string; // For HEADER, BODY, and FOOTER components
    buttons?: Array<MessageTemplateButton>; // For BUTTON components
    format?: 'TEXT' | 'IMAGE' | 'VIDEO' | 'DOCUMENT'; // Applicable for HEADER
}

/**
 * Represents a button in a message template.
 */
export interface MessageTemplateButton {
    type: 'QUICK_REPLY' | 'URL'; // Button type
    text: string; // Text displayed on the button
    url?: string; // URL for URL buttons
    payload?: string; // Payload for QUICK_REPLY buttons
}

/**
 * Response when retrieving message templates.
 */
export interface GetMessageTemplatesResponse {
    data: Array<MessageTemplate>; // List of templates
    paging?: {
        cursors: {
            before: string;
            after: string;
        };
    };
}

/**
 * Response when creating a message template.
 */
export interface CreateMessageTemplateResponse {
    id: string; // ID of the created template
}

/**
 * Request payload for creating a message template.
 */
export interface CreateMessageTemplateRequest {
    name: string;
    language: string;
    category: string; // e.g., transactional, marketing
    components: Array<MessageTemplateComponent>;
}

/**
 * Response when deleting a message template.
 */
export interface DeleteMessageTemplateResponse {
    success: boolean; // Indicates if the operation succeeded
}

/**
 * Interface for the MessageTemplate module.
 */
export interface MessageTemplateModule {
    /**
     * Fetches all message templates associated with the account.
     */
    getMessageTemplates(): Promise<GetMessageTemplatesResponse>;

    /**
     * Creates a new message template.
     */
    createMessageTemplate(
        template: CreateMessageTemplateRequest
    ): Promise<CreateMessageTemplateResponse>;

    /**
     * Deletes a message template by ID.
     */
    deleteMessageTemplate(templateId: string): Promise<DeleteMessageTemplateResponse>;
}

