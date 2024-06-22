export default interface IApiResponse {
    status? : number,

    statusText ?: string,

    data?: any
    
    message?: string,
}

export interface ApiResponseResult<T> {
    data: T | null;
    isError: boolean;
    errorMessage?: string;
    status?: number;
}