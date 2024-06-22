import IApiResponse from "../../response/interface";

export default interface IApi {
    get(endPoint: string, headers?: {}): Promise<IApiResponse>;
    post(endPoint: string, body?: {}, headers?: {}): Promise<IApiResponse>;
    fetchFormData(method: string, endPoint: string, formData: FormData, headers?: {}): Promise<IApiResponse>;
    put(endPoint: string, body?: {}, headers?: {}): Promise<IApiResponse>;
    del(endPoint: string, headers?: {}): Promise<IApiResponse>;
    all(requests: Promise<IApiResponse>[]): Promise<IApiResponse[]>;
}