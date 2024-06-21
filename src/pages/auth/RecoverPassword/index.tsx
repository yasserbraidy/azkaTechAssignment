import { memo, useState } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth2 from "../../../assets/images/auth/02.png";
import * as SettingSelector from "../../../store/setting/selectors";
import { useSelector } from "react-redux";
import Card from "../../../components/Card";
import { icons } from "../../../components/Icons";
import { sendOTP } from "../../../services/functions";

function RecoverPassword () {
    const appName = useSelector(SettingSelector.app_name);
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleReset = async () => {
        if (!email) {
            setIsEmailValid(false);
            return;
        }

        try {
            const result  = await sendOTP(email);
            console.log(result);

            // if (!result.data.success)
            //     throw new Error("Failed!")

            navigate("/auth/reset-password");
        } catch (error: any) {
            console.error("Password recovery failed:", error);
        }
    };
    return (
      <>
        <section className="login-content">
          <Row className="m-0 align-items-center bg-white vh-100">
            <Col
              md="6"
              className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden"
            >
              <Image
                src={auth2}
                className="img-fluid gradient-main animated-scaleX"
                alt="images"
              />
            </Col>
            <Col md="6" className="p-0">
              <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                <Card.Body>
                  <Link
                    to="/"
                    className="navbar-brand d-flex align-items-center mb-3"
                  >
                    {icons.logo}
                    <h4 className="logo-title ms-3">{appName}</h4>
                  </Link>
                  <h2 className="mb-2">Reset Password</h2>
                  <p>
                    Enter your email address and we'll send you an email with
                    instructions to reset your password.
                  </p>
                  <Form>
                    <Row>
                      <Col lg="12" className="col-lg-12">
                        <Form.Group className="floating-label">
                          <Form.Label htmlFor="email" className="form-label">
                            Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            className={`form-control ${
                              isEmailValid ? "" : "is-invalid"
                            }`}
                            id="email"
                            aria-describedby="email"
                            placeholder=" "
                            value={email}
                            onChange={(e: any) => {
                              setEmail(e.target.value);
                              setIsEmailValid(true);
                            }}
                          />
                          {!isEmailValid && (
                            <Form.Control.Feedback type="invalid">
                              Please enter a valid email.
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      onClick={handleReset}
                      className="mt-3"
                      type="button"
                      variant="primary"
                    >
                      Reset
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <div className="sign-bg sign-bg-right">
                <svg
                  width="280"
                  height="230"
                  viewBox="0 0 431 398"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.05">
                    <rect
                      x="-157.085"
                      y="193.773"
                      width="543"
                      height="77.5714"
                      rx="38.7857"
                      transform="rotate(-45 -157.085 193.773)"
                      fill="#3B8AFF"
                    />
                    <rect
                      x="7.46875"
                      y="358.327"
                      width="543"
                      height="77.5714"
                      rx="38.7857"
                      transform="rotate(-45 7.46875 358.327)"
                      fill="#3B8AFF"
                    />
                    <rect
                      x="61.9355"
                      y="138.545"
                      width="310.286"
                      height="77.5714"
                      rx="38.7857"
                      transform="rotate(45 61.9355 138.545)"
                      fill="#3B8AFF"
                    />
                    <rect
                      x="62.3154"
                      y="-190.173"
                      width="543"
                      height="77.5714"
                      rx="38.7857"
                      transform="rotate(45 62.3154 -190.173)"
                      fill="#3B8AFF"
                    />
                  </g>
                </svg>
              </div>
            </Col>
          </Row>
        </section>
      </>
    );
};

RecoverPassword.displayName = "RecoverPassword";
export default memo(RecoverPassword);
