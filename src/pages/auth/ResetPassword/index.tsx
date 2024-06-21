import { memo, useState } from "react";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as SettingSelector from "../../../store/setting/selectors";
import { useSelector } from "react-redux";
import Card from "../../../components/Card";
import { resetPassword } from "../../../services/functions";
import { logout } from "../../../store/auth/actions";
import { useDispatch } from "react-redux";
import auth2 from "../../../assets/images/auth/02.png";
import { icons } from "../../../components/Icons";

function ResetPassword() {
  const appName = useSelector(SettingSelector.app_name);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isOtpValid, setIsOtpValid] = useState(true);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  const dispatch = useDispatch();

  const handleReset = async () => {
    // Check if all fields are filled
    if (!email || !otp || !newPassword) {
      setIsEmailValid(!!email);
      setIsOtpValid(!!otp);
      setIsNewPasswordValid(!!newPassword);
      return;
    }

    try {
        const result = await resetPassword(email, otp, newPassword);
        console.log(result);
        // if (result.data.success)
        //     return;

        dispatch(logout());
        navigate("/auth/sign-in");
    } catch (error) {
      // Handle any errors that occur during the password reset process
      console.error("Password reset failed:", error);

      // You can show an error message or handle it as needed
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
                  Enter your email, OTP, and new password to reset your
                  password.
                </p>
                <Form>
                  <Row>
                    <Col lg="12" className="col-lg-12">
                      {/* Email Input */}
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
                    <Col lg="12" className="col-lg-12">
                      {/* OTP Input */}
                      <Form.Group className="floating-label">
                        <Form.Label htmlFor="otp" className="form-label">
                          OTP
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className={`form-control ${
                            isOtpValid ? "" : "is-invalid"
                          }`}
                          id="otp"
                          placeholder=" "
                          value={otp}
                          onChange={(e: any) => {
                            setOtp(e.target.value);
                            setIsOtpValid(true);
                          }}
                        />
                        {!isOtpValid && (
                          <Form.Control.Feedback type="invalid">
                            Please enter the OTP.
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg="12" className="col-lg-12">
                      {/* New Password Input */}
                      <Form.Group className="floating-label">
                        <Form.Label
                          htmlFor="newPassword"
                          className="form-label"
                        >
                          New Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          className={`form-control ${
                            isNewPasswordValid ? "" : "is-invalid"
                          }`}
                          id="newPassword"
                          placeholder=" "
                          value={newPassword}
                          onChange={(e: any) => {
                            setNewPassword(e.target.value);
                            setIsNewPasswordValid(true);
                          }}
                        />
                        {!isNewPasswordValid && (
                          <Form.Control.Feedback type="invalid">
                            Please enter a new password.
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
            {/* ... (your existing JSX for the sign-bg) */}
          </Col>
        </Row>
      </section>
    </>
  );
}

ResetPassword.displayName = "ResetPassword";
export default memo(ResetPassword);
