import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../state";
import Cookies from "js-cookie";
import IAuthState from "../interface";

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<IAuthState>) => {
            const username = action.payload.username;
            const token = action.payload.token;
            const isAuthenticated = action.payload.isAuthenticated;
            
            state.username = username;
            state.token = token;
            state.isAuthenticated = isAuthenticated;

            Cookies.set("username", username?.toString() || "");
            Cookies.set("token", token?.toString() || "");
            Cookies.set("isAuthenticated", isAuthenticated.toString());
            
        },
    
        logout: (state) => {
            Cookies.remove("isAuthenticated");
            Cookies.remove("token");
            Cookies.remove("username");
            state.username = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    }
});

export default authSlice.reducer;

