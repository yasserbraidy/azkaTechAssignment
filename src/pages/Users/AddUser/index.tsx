import { Card, Button, Col, Row } from "react-bootstrap";
import useAddUserHooks from "./hooks";
import CustomForm from "../../../components/CustomForm";
import FloatingTextInput from "../../../components/Inputs/FloatingText";
import TextAriaInput from "../../../components/Inputs/TextArea";
import ModalWithLoader from "../../../components/ModalWithLoader";

export default function AddUser() {
    const {
      validated,
      loader,
      handleSubmit,
      validationError,
      user,
      handleInputChange,
    } = useAddUserHooks();
    return (
        <>
            {loader && <ModalWithLoader />}
                <>
                    <Row>
                    <Col sm="12" lg="9" className="m-auto">
                        <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                            <h2 className="card-title">Add User</h2>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <CustomForm
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                            showValidationAlert={validationError.isError}
                            validationErrorMessage={validationError.message}
                            >
                            <Row className="mb-3">
                                {/* Name */}
                                <Col md="6">
                                <FloatingTextInput
                                    type="text"
                                    label={"Full Name"}
                                    value={user.name}
                                    name="name"
                                    id="name"
                                    onChange={handleInputChange}
                                    isInvalid={!user.name && validated}
                                    placeholder="Full Name"
                                    required
                                    feedbackText="Please enter the Full Name."
                                />
                                </Col>

                                {/* Username */}
                                <Col md="6">
                                <FloatingTextInput
                                    type="text"
                                    label={"Username"}
                                    value={user.username}
                                    name="username"
                                    id="username"
                                    onChange={handleInputChange}
                                    isInvalid={!user.username && validated}
                                    placeholder="Username"
                                    required
                                    feedbackText="Please enter the Username."
                                />
                                </Col>

                                {/* Email */}
                                <Col md="6">
                                <FloatingTextInput
                                    type="text"
                                    label={"Email"}
                                    value={user.email}
                                    name="email"
                                    id="email"
                                    onChange={handleInputChange}
                                    isInvalid={!user.email && validated}
                                    placeholder="Email"
                                    required
                                    feedbackText="Please enter the Email."
                                />
                                </Col>

                                {/* Phone Number */}
                                <Col md="6">
                                <FloatingTextInput
                                    type="text"
                                    label={"Phone Number"}
                                    value={user.phone}
                                    name="phone"
                                    id="phone"
                                    onChange={handleInputChange}
                                    isInvalid={!user.phone && validated}
                                    placeholder="Phone Number"
                                    required
                                    feedbackText="Please enter the Phone Number."
                                />
                                </Col>

                                {/* Website */}
                                <Col md="8">
                                <FloatingTextInput
                                    type="text"
                                    label={"Website (Optional)"}
                                    value={user.website}
                                    name="website"
                                    id="website"
                                    onChange={handleInputChange}
                                    placeholder="Website (Optional)"
                                />
                                </Col>

                                {/* Company */}
                                <Col md="4">
                                <FloatingTextInput
                                    type="text"
                                    label={"Company Name (Optional)"}
                                    placeholder="Company Name (Optional)"
                                />
                                </Col>

                                {/* Address */}
                                <hr />
                                <h4>Address</h4>
                                <Col md="9">
                                <FloatingTextInput
                                    type="text"
                                    label={"City (Optional)"}
                                    placeholder="City (Optional)"
                                />
                                </Col>
                                <Col md="3">
                                <FloatingTextInput
                                    type="text"
                                    label={"Zip Code (Optional)"}
                                    placeholder="Zip Code (Optional)"
                                />
                                </Col>
                                <Col md="12">
                                <TextAriaInput label={"Street (Optional)"} />
                                </Col>

                                {/* Submit Button */}
                                <div className="col-12 mt-4">
                                <Button type="submit" className="float-end">
                                    Add User
                                </Button>
                                </div>
                            </Row>
                            </CustomForm>
                        </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </>
        </>
    );
}