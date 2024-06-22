import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handlePostError, handleValidationError, showSweetAlert } from "../../../../utilities/global";
import IUser from "../../../../services/entities/User";
import { IValidationErrorAlert } from "../../../../components/Error/interface";

export default function useAddUserHooks() {
    const [user, setUser] = useState<Partial<IUser>>({});
    const [validated, setValidated] = useState(false);
    const [validationError, setValidationError] = useState<IValidationErrorAlert>({ isError: validated });
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    
    
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUser({
        ...user,
        [name]: value,
        });
    };

    //validation function
    function Validation(userData: Partial<IUser>) {
        try {
            if (!userData.name || !userData.username || !userData.email || !userData.phone) {
            throw new Error("Please enter the needed information")
        }
        setValidated(false);
            return true;
        } catch (error: any) {
            handleValidationError(error, setValidationError, setValidated);
        }
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // Perform individual field validation
        if (!Validation(user)) {
            return;
        }

        try {
            setLoader(true);
                showSweetAlert(
                    "Notice",
                    "There is no actual API to perform this function, but this page has been created for the purpose of UI demonstration, data validation, and handling user addition on the frontend.",
                    "success"
                );

        } catch (error: any) {
            handlePostError(error);
        } finally {
            setLoader(false);
        }
    };


    return {
        validated, handleSubmit, loader, validationError, user, handleInputChange
    }
}