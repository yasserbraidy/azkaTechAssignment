import { Alert } from "react-bootstrap";
import IErrorAlert from "./interface";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../../store/auth/actions";

export default function ErrorAlert(props: IErrorAlert) {
    const { isError, statusCode, message } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        // Centralized logout logic for handling unauthorized/forbidden errors.
        // This condition checks if the API response indicates an unauthorized (403) error,
        // triggering an immediate logout. Centralizing the logic ensures a consistent
        // approach and easier maintenance. While placing this logic after each API call is
        // advantageous for immediate response and clarity, it may lead to duplication.
        // By centralizing in the ErrorAlert component, we aim for a more organized and
        // reusable solution, even if the logout action might be delayed until the error
        // alert is displayed. Consider your project's priorities and preferences when choosing
        // between centralized logic and immediate response.
        if (isError && statusCode === 403) {
            dispatch(logout());
        }
        // alert(statusCode)
    });
    return (
      <div className="bd-example">
        <Alert variant="danger mb-0" role="alert">
          <h2 className="alert-heading">Error {statusCode}!</h2>
          <p>
            Uh-oh, it seems like an error has occurred:{" "}
              <b>
                <i>
                  <u>{message}</u>
                </i>
              </b>
          </p>
          <hr />
          <p className="mb-0">
            We apologize for the inconvenience. Please try again. If the issue
            persists, contact support for assistance.
          </p>
        </Alert>
      </div>
    );
}