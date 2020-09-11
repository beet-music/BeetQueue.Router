/**
 * The session data as it's stored in the database.
 */
export interface SessionData {
    /** The session's database ID. */
    id: string;

    /** The session's public name. */
    name: string;

    /** The session's user agent. */
    userAgent: string;

    /** When the session was created. */
    created: Date;

    /** When the session will expire. */
    expires: Date;

    /** The hostname (or IP address) of the host computer. */
    hostname: string;

    /** The secret shared between the router and the host. */
    secret: string;

    /** The link ID for the session. */
    linkID: string;

    /** Whether the host will accept requests. */
    acceptRequests: boolean;

    /** Whether the host will moderate requests. */
    moderateRequests: boolean;
}

/**
 * The request to `GET /api/v1/session`.
 */
export interface SessionGetRequest {
    id: string;
}

/**
 * The response to `GET /api/v1/session`.
 */
export interface SessionGetResponse {
    id: string;
    name: string;
    userAgent: string;
    created: Date;
    expires: Date;
}
