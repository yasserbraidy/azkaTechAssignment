import { Col, Form, Row } from "react-bootstrap";
import IDateInput from "./interface";

export default function DateInput({
    label,
    id,
    value,
    onChange,
    name,
    required,
    isInvalid,
    feedbackText,
}: IDateInput) {
    return (
        <Row>
            <Form.Group className="form-group d-flex">
                {label && (
                    <Col lg="2" md="2" className="mt-2">
                        <Form.Label htmlFor={id}>{label}</Form.Label>
                    </Col>
                )}
                <Col>
                    <Form.Control
                        type="date"
                        value={value}
                        onChange={onChange}
                        name={name}
                        id={id}
                        required={required}
                    />
                    {isInvalid && feedbackText && (
                        <Form.Control.Feedback type="invalid">
                        {feedbackText}
                        </Form.Control.Feedback>
                    )}
                </Col>
            </Form.Group>
        </Row>
    );
}
