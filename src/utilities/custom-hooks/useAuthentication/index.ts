import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectToken, selectUsername } from "../../../store/auth/selectors";
import { useMemo } from "react";

export default function useAuthentication() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const token = useSelector(selectToken);
    const username = useSelector(selectUsername);


    return useMemo(() => {
        return {
            isAuthenticated,
            token,
            username,
        };
    }, [isAuthenticated, username, token]);
}
