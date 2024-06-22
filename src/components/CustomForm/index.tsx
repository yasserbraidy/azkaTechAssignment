import { Form, Row } from "react-bootstrap";
import IForm from "./interface";
import ValidationAlert from "./components/ValidationAlert";

export default function CustomForm(props: IForm) {
    const {
      children,
      validated,
      noValidate,
      onSubmit,
      validationErrorMessage,
      showValidationAlert = false,
    } = props;
    return (
      <>
        <Form noValidate={noValidate} validated={validated} onSubmit={onSubmit}>
          {showValidationAlert && (
            <Row className="mb-3">
              <ValidationAlert
                message={validationErrorMessage}
                show={showValidationAlert}
              />
            </Row>
          )}
          {children}
        </Form>
      </>
    );
}