import React, { useState, memo, useEffect } from "react";
import { Alert } from "react-bootstrap";

interface IValidationAlert {
    show: boolean,
    message?: string;
    alertType?: string;
    onClose?: () => void;
}

function ValidationAlert(props: IValidationAlert) {
    const [show, setShow] = useState(props.show);
    const autoHideDuration = 10000; // 10 seconds
    
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setShow(false);
            }, autoHideDuration);

            return () => clearTimeout(timer);
        }
    }, [show]);

    const handleClose = () => {
        setShow(false);
        if (props.onClose) props.onClose();
    };
    
    return show ? (
        <div className="bd-example">
            <Alert
                variant={`${
                    props.alertType || "danger"
                    } alert-left alert-dismissible fade show mb-3`}
                role="alert"
                onClose={handleClose}
                dismissible
            >
                <p>{props.message}</p>
            </Alert>
        </div>
    ) : <> </>;
}

export default memo(ValidationAlert);
