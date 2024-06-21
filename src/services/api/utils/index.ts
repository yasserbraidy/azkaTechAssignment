import Cookies from "js-cookie";

export function getToken(): string {
    // const { token } = useAuthentication();
    const token = Cookies.get("token");
    return token ?? "testToken";
}

export const BASE_URL: string = 'http://localhost:5000';
export const LOGIN_API: string = 'https://restful-booker.herokuapp.com';
export const TOKEN: string = getToken();

//auth
export const LOGIN: string = `/auth`;

//Fake Data for testing
export const CREATE_DEPARTMENT: string = `/department/`; //POST
export const EDIT_DEPARTMENT = (id: string | number) => `/department/${id}`; //Patch
export const DELETE_DEPARTMENT = (id: string | number) => `/department/${id}`; //DEL
export const GET_DEPARTMENT = (id: string | number) => `/department/${id}`; //GET
export const GET_All_DEPARTMENTS_BY_BRANCH_ID = (id: string | number) => `/department/branch/${id}`; //GET
export const GET_ALL_DEPARTMENTS: string = `/department/`; //GET
