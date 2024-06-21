import Cookies from "js-cookie";

export function getToken(): string {
    // const { token } = useAuthentication();
    const token = Cookies.get("token");
    return token ?? "testToken";
}

export const BASE_URL: string = 'http://localhost:5000';
export const LOGIN_API: string = 'https://restful-booker.herokuapp.com';
export const JSON_PLACEHOLDER: string = 'https://jsonplaceholder.typicode.com';
export const TOKEN: string = getToken();

//auth
export const LOGIN: string = `/auth`;

//Users
export const GET_USER = (id: number) => `/users/${id}`; //GET
export const GET_ALL_USERS: string = `/users`; //GET
