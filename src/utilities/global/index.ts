import Swal from "sweetalert2";
import { IFetchingErrorAlert, IValidationErrorAlert } from "../../components/Error/interface";

export function showSweetAlert(title: string, text: string, icon: 'warning' | 'error' | 'success' | 'info' | 'question') {
    Swal.fire({
        title: title,
        text: text,
        backdrop: `rgba(60,60,60,0.8)`,
        icon: icon,
    });
}

//Error Handling functions
export function handleValidationError(
    error: any,
    errorSetter: React.Dispatch<React.SetStateAction<IValidationErrorAlert>>,
    validationSetter: React.Dispatch<React.SetStateAction<boolean>>,
) {
    errorSetter({
        isError: true,
        message: error.message
    });
    validationSetter(true);
}

export function handlePostError(error: any) {
    showSweetAlert(`Error ${error.status}!`, error.message, 'error');
}

export function handleFetchingError(error: any, errorSetter: React.Dispatch<React.SetStateAction<IFetchingErrorAlert>>) {
        errorSetter({
            isError: true,
            statusCode: error.status,
            message: error.message,
        });
}
