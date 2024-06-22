import IApiResponse from "../response/interface";
import IApi from "./interface";

export default class Api implements IApi {
    private readonly baseUrl: string;
    private readonly token: string;
    private readonly language: 'ar' | 'en';

    constructor(baseUrl: string, token: string, language: 'ar' | 'en' = 'en') {
        this.baseUrl = baseUrl;
        this.token = token;
        this.language = language;
    }

    private getRequestHeaders(headers?: {}): HeadersInit {
        const defaultHeaders: HeadersInit = {
            Authorization: `Bearer ${this.token}`,
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/json", // Default to application/json
            "Accept-Language": this.language, 
        };

        return {
            ...defaultHeaders,
            ...headers,
        };
    }

    private determineContentType(headers?: Headers): string {
        if (headers && headers.get("Content-Type")) {
            return headers.get("Content-Type") as string;
        }

        return "application/json";
    }


    async get(endPoint: string, headers?: {}, body?: any): Promise<IApiResponse> {
        const requestHeaders = this.getRequestHeaders(headers);
        const requestConfig: RequestInit = {
            method: "GET",
            headers: requestHeaders,
            body: body ? JSON.stringify(body) : undefined,
        };

        const response = await fetch(`${this.baseUrl}${endPoint}`, requestConfig);
        const data = await response.json();

        return {
            data: data,
            statusText: response.statusText,
            status: response.status
        } as IApiResponse;
    }

    async post(endPoint: string, body?: {}, headers?: {}): Promise<IApiResponse> {
        const requestHeaders = this.getRequestHeaders(headers);
        const requestConfig: RequestInit = {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(body),
        };
        const response = await fetch(`${this.baseUrl}${endPoint}`, requestConfig);
        const data = await response.json();

        return {
            data: data,
            statusText: response.statusText,
            status: response.status
        } as IApiResponse;
    }

    async fetchFormData(method: string, endPoint: string, formData: FormData, headers?: Headers): Promise<IApiResponse> {
        const requestHeaders = this.getRequestHeaders(headers) as Record<string, string>;
        
        // Remove Content-Type header if it exists
        if (requestHeaders.hasOwnProperty('Content-Type')) {
            delete requestHeaders['Content-Type'];
        }

        
        const requestConfig: RequestInit = {
            method: method,
            headers: requestHeaders,
            body: formData,
        };

        const response = await fetch(`${this.baseUrl}${endPoint}`, requestConfig);
        const data = await response.json();

        return {
            data: data,
            statusText: response.statusText,
            status: response.status,
        } as IApiResponse;
    }



    async put(endPoint: string, body?: {}, headers?: {}): Promise<IApiResponse> {
        const requestHeaders = this.getRequestHeaders(headers);
        const requestConfig: RequestInit = {
            method: "PUT",
            headers: requestHeaders,
            body: JSON.stringify(body),
        };

        const response = await fetch(`${this.baseUrl}${endPoint}`, requestConfig);
        const data = await response.json();

        return {
            data: data,
            statusText: response.statusText,
            status: response.status
        } as IApiResponse;
    }

    async patch(endPoint: string, body?: {}, headers?: {}): Promise<IApiResponse> {
        const requestHeaders = this.getRequestHeaders(headers);
        const requestConfig: RequestInit = {
            method: "PATCH",
            headers: requestHeaders,
            body: JSON.stringify(body),
        };
        const response = await fetch(`${this.baseUrl}${endPoint}`, requestConfig);
        const data = await response.json();

        return {
            data: data,
            statusText: response.statusText,
            status: response.status
        } as IApiResponse;
    }

    async del(endPoint: string, headers?: {}): Promise<IApiResponse> {
        const requestHeaders = this.getRequestHeaders(headers);
        const requestConfig: RequestInit = {
            method: "DELETE",
            headers: requestHeaders,
        };

        const response = await fetch(`${this.baseUrl}${endPoint}`, requestConfig);
        const data = await response.json();

        return {
            data: data,
            statusText: response.statusText,
            status: response.status
        } as IApiResponse;
    }

    async all(requests: Promise<IApiResponse>[]): Promise<IApiResponse[]> {
        return Promise.all(requests);
    }

    // a function to send data in x-www-form-urlencoded format
    private urlEncodeFormData(data: {}): string {
        const urlSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(data)) {
            urlSearchParams.append(key, (value as any).toString());
        }
        return urlSearchParams.toString();
    }

    async fetchUrlEncoded(method: string = "POST", endPoint: string, data: {}, headers?: {}): Promise<IApiResponse> {
        const urlEncodedData = this.urlEncodeFormData(data);
        const requestHeaders = this.getRequestHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
            ...headers,
        });

        const requestConfig: RequestInit = {
            method: method,
            headers: requestHeaders,
            body: urlEncodedData,
        };
        const response = await fetch(`${this.baseUrl}${endPoint}`, requestConfig);
        const dataResult = await response.json();

        return {
            data: dataResult,
            statusText: response.statusText,
            status: response.status
        } as IApiResponse;
    }
}