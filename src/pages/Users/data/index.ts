import IApiResponse from "../../../services/api/response";
import { GAUsers, GUser } from "../../../services/functions";

export async function getAllUsers(){
    const response = await GAUsers();
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}

export async function getUser(id: number){
    const response = await GUser(id);
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}