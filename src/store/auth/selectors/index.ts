import { RootState } from "../../interface";

export const selectToken = (state: RootState ): string | null => state.auth.token ?? null;
export const selectUsername = (state: RootState ): string | null => state.auth.username ?? null;
export const selectIsAuthenticated = (state: RootState ): boolean => state.auth.isAuthenticated ?? false;
