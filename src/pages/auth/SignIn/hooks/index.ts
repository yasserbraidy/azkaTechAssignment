import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app_name } from "../../../../store/setting/selectors";
import useAlert from "../../../../utilities/custom-hooks/useAlert";
import { setCredentials } from "../../../../store/auth/actions";
import useProtected from "../../../../router/protected/functions";

export function useSignInHooks() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const appName = useSelector(app_name);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { message, setAlert } = useAlert();
    const { authenticated } = useProtected();
    const isLoggedIn = authenticated();
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            if (await isLoggedIn) {
                navigate("/");
            }
        };

        checkAuthentication();
    }, [isLoggedIn, navigate]);

    function testSignIn(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === "admin@email.com" && password === "123") {
                    resolve({
                        data: {
                            success: true,
                            data: {
                                email: email,
                                token: "test token",
                            }
                        }
                    });
                } else {
                    resolve({
                        data: {
                            message: "Invalid credentials. Please try again."
                        }
                    });
                }
            }, 1500);
        });
    }

    async function signIn(_email: string, _password: string) {
        try {
            setLoader(true);

            const loginResponse = await testSignIn(_email, _password);
            const { success, data } = loginResponse.data;

            if (!success) {
                throw new Error(data.message || "Authentication failed.");
            }

            const { email, token } = data;

            if (email && token) {

                return {
                    isAuthenticated: true,
                    token,
                    username: email,
                };
            } else {
                throw new Error("Incomplete user data received.");
            }
        } catch (error: any) {
            setAlert("danger", error.message || "Authentication failed.");
        } finally {
            setLoader(false);
        }
    }

    async function handleSignIn() {
        if (!email || !password) {
            setIsEmailValid(!!email);
            setIsPasswordValid(!!password);
            return;
        }

        try {
            setLoader(true);
            const credentials = await signIn(email, password);
            console.log(credentials);
            if (
                credentials &&
                credentials.isAuthenticated &&
                credentials.token &&
                credentials.username
            ) {
                dispatch(setCredentials(credentials));
                navigate("/");
            } else {
                throw new Error("Invalid credentials. Please try again.");
            }
        } catch (error: any) {
            setAlert("danger", error.message);
        } finally {
            setLoader(false);
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        isEmailValid,
        setIsEmailValid,
        isPasswordValid,
        setIsPasswordValid,
        appName,
        handleSignIn,
        message,
        loader,
    };
}
