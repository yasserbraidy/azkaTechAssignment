import IAuthState from "../interface";

export const initialState: IAuthState = {
    username: null,
    token: null,
    isAuthenticated: false,
};