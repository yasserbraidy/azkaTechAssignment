import React, { useEffect } from "react";
import "./styles/index.css"; // You can create a CSS file for styling
import { Button } from "react-bootstrap";
import Card from "../Card";
import IModal from "./interface";

const CustomModal: React.FC<IModal> = ({
    show,
    onHide,
    header,
    body,
    footer,
    onConfirm,
    confirmButtonText
    }) => {
    useEffect(() => {
            
    }, [show]);

    const renderHeader = () => {
        if (header) {
            return <div className="modal-header">{header}</div>;
        }
        return null;
    };

    const renderFooter = () => {
        if (footer) {
            return <div className="modal-footer">{footer}</div>;
        }
        return null;
    };

    return (
        <>
            {show && (
                <div className="modal-backdrop" onClick={onHide}>
                    <Card className="card">
                        <div className="modal-container" onClick={(e) => e.stopPropagation()} >
                            {renderHeader()}
                            <hr />
                        <div className="modal-body py-5">{body}</div>
                            {renderFooter()}
                            <hr />
                            <div className="w-fit float-end">
                                {confirmButtonText &&
                                    <Button className="close-button btn btn-primary mx-3" onClick={onConfirm} >
                                        {confirmButtonText}
                                    </Button>
                                }
                                <Button className="close-button btn btn-outline-danger" onClick={onHide} >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
};

export default CustomModal;
