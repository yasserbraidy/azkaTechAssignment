import useAuthentication from "../../../utilities/custom-hooks/useAuthentication";

export default function useProtected() {
    const { isAuthenticated, token, username } = useAuthentication();
    
    
    function authenticated() {
        try {            

            const _token = (token !== null && token.trim() !== "");
            const _username = (username !== null && username.trim() !== "")
            const _isAuthenticated = (isAuthenticated !== undefined && isAuthenticated !== false);

            return (_token && _username && _isAuthenticated);

        } catch (error) {
            return false;
        }
    }


    return {
        authenticated,
    };
}
