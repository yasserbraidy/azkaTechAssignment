import Cookies from "js-cookie";

export function getToken(): string {
    // const { token } = useAuthentication();
    const token = Cookies.get("token");
    return token ?? "testToken";
}
export const BASE_URL: string = 'https://jsonplaceholder.typicode.com';
export const TOKEN: string = getToken();

//auth
export const LOGIN: string = `/auth`;

//Users
export const GET_USER = (id: number) => `/users/${id}`; //GET
export const GET_ALL_USERS: string = `/users`; //GET

//Posts
export const GET_ALL_POSTS: string = `/posts`; //GET
export const GET_ALL_COMMENTS: string = `/comments`; //GET
export const GET_POSTS_BY_USER_ID = (id: number) => `/posts?userId=${id}`; //GET
export const GET_COMMENTS_BY_POST_ID = (id: number) => `/posts/${id}/comments`; //GET

