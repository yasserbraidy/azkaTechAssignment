import Api from "../api";
import { BASE_URL, TOKEN,LOGIN_API } from "../endpoints";
import * as endpoints from "../endpoints";
import IApiResponse from "../response/interface";

const api = new Api(BASE_URL, TOKEN);

//Users
export async function getAllUsers(): Promise<IApiResponse>  {
    const response = await api.get(endpoints.GET_ALL_USERS);
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}
export async function getUser(id: number): Promise<IApiResponse>  {
    const response = await api.get(endpoints.GET_USER(id));
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}

//Posts
export async function getAllPosts(): Promise<IApiResponse>  {
    const response = await api.get(endpoints.GET_ALL_POSTS);
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}
export async function getPostsByUserId(userId: number): Promise<IApiResponse>  {
    const response = await api.get(endpoints.GET_POSTS_BY_USER_ID(userId));
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}
export async function getCommentsByPostId(postId: number): Promise<IApiResponse>  {
    const response = await api.get(endpoints.GET_COMMENTS_BY_POST_ID(postId));
    return {
        status: response.status,
        data: response.data,
        message: response.data.message,
    } as IApiResponse;
}

//auth
export async function login(username: string, password: string) {
    // Creating a new instance of Api without passing the token
    const apiWithoutToken = new Api(LOGIN_API, '');
    
    const response = await apiWithoutToken.post(endpoints.LOGIN, { username, password });
    return response;
}


