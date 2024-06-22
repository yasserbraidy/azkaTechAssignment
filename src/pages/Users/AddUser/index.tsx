import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Form } from "react-router-dom";
import useAddUserHooks from "./hooks";
import Loader3 from "../../../components/Loader";
import CustomForm from "../../../components/CustomForm";

export default function AddUser() {
    const { validated, loader, handleSubmit, validationError } =
      useAddUserHooks();
    return (
        <>
            {loader && <Loader3 />}
            {!loader && (
                <>
                    <Row>
                        <Col sm="12" lg="6" className="m-auto">
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
                                    {/* Company Name */}
                                    <Col md="12">
                                    <FloatingTextInput
                                        type="text"
                                        label={"Company Name"}
                                        value={companyData.name}
                                        name="name"
                                        id="name"
                                        onChange={handleInputChange}
                                        isInvalid={!companyData.name && validated}
                                        placeholder="Company Name"
                                        required
                                        feedbackText="Please enter the Company Name."
                                    />
                                    </Col>

                                    {/* Domain Name */}
                                    <Col md="12">
                                    <FloatingTextInput
                                        type="text"
                                        label={"Domain Name"}
                                        value={companyData.domain_name}
                                        onChange={handleInputChange}
                                        required
                                        name="domain_name"
                                        isInvalid={!companyData.domain_name && validated}
                                        placeholder="Domain Name"
                                        feedbackText="Please enter the Domain Name."
                                    />
                                    </Col>

                                    {/* Description */}
                                    <Col md="12">
                                    <TextAriaInput
                                        value={companyData.description}
                                        onChange={handleInputChange}
                                        id="description"
                                        name="description"
                                        label="Company Description"
                                        rows={3}
                                        placeholder="Please enter the Company Description."
                                    />
                                    </Col>

                                    {/* Founded At */}
                                    <Col md="12">
                                    <DateInput
                                        label="Founded At"
                                        value={
                                        foundedAt
                                            ? foundedAt.toString()
                                            : companyData.founded_at?.toString()
                                        }
                                        onChange={handleFoundedAtChange}
                                        name="foundedAt"
                                        id="foundedAt"
                                        required
                                        isInvalid={!companyData.founded_at && validated}
                                        feedbackText="Kindly choose the date of establishment."
                                    />
                                    </Col>

                                    {/* Submit Button */}
                                    <div className="col-12 mt-4">
                                    <Button type="submit" className="float-end">
                                        {btnName}
                                    </Button>
                                    </div>
                                </Row>
                                </CustomForm>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
}