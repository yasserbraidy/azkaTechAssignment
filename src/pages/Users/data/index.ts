import IApiResponse from "../../../services/api/response";
import { GAPosts, GAUsers, GComment, GPosts, GUser } from "../../../services/functions";

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

export async function getAllPosts(){
    const response = await GAPosts();
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}

export async function getPostsByUserId(userId: number){
    const response = await GPosts(userId);
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}

export async function getCommentsByPostId(postId: number){
    const response = await GComment(postId);
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}