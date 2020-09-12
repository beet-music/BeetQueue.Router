export interface ErrorResponse {
    id: number;
    message: string;
}

export default function makeError(message: string): ErrorResponse {
    return {
        id: -1,
        message,
    };
}

export function notImplementedError(): ErrorResponse {
    return {
        id: 501,
        message: "Not implemented",
    };
}
