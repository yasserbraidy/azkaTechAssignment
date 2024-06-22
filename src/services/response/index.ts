import { BadRequestError, ForbiddenError, NotFoundError, ServerError, UnauthorizedError } from "../entities/Error";
import IApiResponse, { ApiResponseResult } from "./interface";

export function processApiResponse<T>(
    response: IApiResponse,
    fetchType: 'fetchOne' | 'fetchAll' | 'update' | 'create' | 'delete',
    entityType: string,
    ): ApiResponseResult<T> {
        const result: ApiResponseResult<T> = {
            data: response.data,
            isError: false,
            status: response.status,
        };
    try {
        let action: string;

        switch (fetchType) {
            case 'fetchOne':
            case 'fetchAll':
                action = 'retrieving';
                break;
            case 'create':
                action = 'creating';
                break;
            case 'delete':
                action = 'deleting';
                break;
            default:
                action = 'performing';
        }

        switch (response.status) {
            case 200:
                if (fetchType === 'create' || fetchType === 'update' || fetchType === 'delete') {
                    // Don't perform null validation for non-error fetch types
                    result.data = response.data as T;
                } else {
                    if (response.data === null || !response.data || (Array.isArray(response.data) && response.data.length === 0)) {
                        result.status = 404;
                        result.isError = true;
                        result.errorMessage = `Unable to locate the ${entityType}. Please ensure that you have added one with the corresponding ID.`;
                    } else {
                        result.data = response.data as T;
                    }
                }
                break;

            case 400:
                throw new BadRequestError(response.message || `Bad request while ${action} ${entityType}.`);
            
            case 401:
                throw new UnauthorizedError(response.message || `Unauthorized access while ${action} ${entityType}.`);

            case 403:
                throw new ForbiddenError(response.message || `Forbidden access while ${action} ${entityType}.`);
            
            case 404:
                throw new NotFoundError(response.message || `No ${entityType} found while ${action}.`);

            default:
                throw new ServerError(response.message || `Unexpected error (${response.status}) while ${action} ${entityType}.`);
        }
    } catch (error: any) {
        result.status = error.status;
        result.isError = true;
        result.errorMessage = error.message;
        throw error;
    }

    return result;
}