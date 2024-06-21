import { authSlice } from './../reducers';
import Cookies from "js-cookie";

export const { setCredentials, logout } = authSlice.actions;

export const initialCheckUser = () => async (dispatch: any) => {
    const username = Cookies.get("username");
    const token = Cookies.get("token");
    const isAuthenticated = Cookies.get("isAuthenticated");
    
    if (!token || !username || !isAuthenticated) {            
        dispatch(logout());
        return;
    }

    try {
        dispatch(setCredentials({ token, username, isAuthenticated: true}));
    } catch (error) {
        dispatch(logout());
    }

};