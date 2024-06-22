import { Form } from "react-bootstrap";
import IFloatingText from "./interface";

const FloatingTextInput: React.FC<IFloatingText> = ({
    label,
    type = "text",
    id,
    placeholder,
    value,
    onChange,
    name,
    className,
    required = false,
    isInvalid,
    feedbackText,
}) => {
    return (
      <>
        <Form.Floating
          className={`custom-form-floating custom-form-floating-sm form-group mb-3 ${className}`}
        >
          <Form.Control
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
            isInvalid={isInvalid}
          />
          {label && <label htmlFor={id}>{label}</label>}

          {isInvalid && feedbackText && (
            <Form.Control.Feedback type="invalid">
              {feedbackText}
            </Form.Control.Feedback>
          )}
        </Form.Floating>
      </>
    );
};

export default FloatingTextInput;
