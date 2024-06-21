import { memo } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button, Alert } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//components
import auth1 from "../../../assets/images/auth/01.png";


import { useSignInHooks } from "./hooks";
import Card from './../../../components/Card/index';
import ModalWithLoader from "../../../components/ModalWithLoader";

const SignIn = memo(() => {

   const {
     email,
     setEmail,
     password,
     setPassword,
     isEmailValid,
     setIsEmailValid,
     isPasswordValid,
     setIsPasswordValid,
     appName,
     handleSignIn,
     message,
     loader,
   } = useSignInHooks();

   return (
      <>
         {loader && <ModalWithLoader />}
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                           <Card.Body>
                              <Link
                                 to="/"
                                 className="navbar-brand d-flex align-items-center mb-3"
                              >
                                 <svg
                                    width="30"
                                    className="text-primary"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <rect
                                    x="-0.757324"
                                    y="19.2427"
                                    width="28"
                                    height="4"
                                    rx="2"
                                    transform="rotate(-45 -0.757324 19.2427)"
                                    fill="currentColor"
                                    />
                                    <rect
                                    x="7.72803"
                                    y="27.728"
                                    width="28"
                                    height="4"
                                    rx="2"
                                    transform="rotate(-45 7.72803 27.728)"
                                    fill="currentColor"
                                    />
                                    <rect
                                    x="10.5366"
                                    y="16.3945"
                                    width="16"
                                    height="4"
                                    rx="2"
                                    transform="rotate(45 10.5366 16.3945)"
                                    fill="currentColor"
                                    />
                                    <rect
                                    x="10.5562"
                                    y="-0.556152"
                                    width="28"
                                    height="4"
                                    rx="2"
                                    transform="rotate(45 10.5562 -0.556152)"
                                    fill="currentColor"
                                    />
                                 </svg>
                                 <h4 className="logo-title ms-3">{appName}</h4>
                              </Link>
                              <h2 className="mb-2 text-center">Sign In</h2>
                              <p className="text-center">Login to stay connected.</p>
                              <Form>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="form-group" >
                                          <Form.Label htmlFor="email" className="">
                                             Email
                                          </Form.Label>
                                          <Form.Control
                                             type="email"
                                             className=""
                                             id="email"
                                             aria-describedby="email"
                                             placeholder=" "
                                             value={email}
                                             onChange={(e: any) => { setEmail(e.target.value); setIsEmailValid(true);}}
                                             required
                                             isInvalid={!isEmailValid}
                                          />
                                          {!isEmailValid && (
                                             <Form.Control.Feedback type="invalid">
                                                Please enter a valid email.
                                             </Form.Control.Feedback>
                                          )}
                                       </Form.Group>
                                    </Col>
                                    
                                    <Col lg="12" className="" >
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">
                                             Password
                                          </Form.Label>
                                          <Form.Control
                                             type="password"
                                             className=""
                                             id="password"
                                             aria-describedby="password"
                                             placeholder=" "
                                             value={password}
                                             onChange={(e: any) => {
                                                setPassword(e.target.value);
                                                setIsPasswordValid(true);
                                             }}
                                             isInvalid={!isPasswordValid}
                                             required
                                                />
                                             {!isPasswordValid && (
                                                <Form.Control.Feedback type="invalid">
                                                   Please enter a password.
                                                </Form.Control.Feedback>
                                             )}
                                       </Form.Group>
                                    </Col>
                                    
                                    <Col lg="12" className="d-flex justify-content-between">
                                       <Link to="/auth/recover-password">
                                          Forgot Password?
                                       </Link>
                                    </Col>
                                    
                                 </Row>
                                 
                                 <div className="d-flex justify-content-center">
                                    <Button
                                       onClick={handleSignIn}
                                       type="button"
                                       variant="btn btn-primary"
                                       >
                                       Sign In
                                    </Button>
                                 </div>
                                 <div className="mt-3">{message && <Alert variant="danger">{message}</Alert>}</div>
                                 
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                  <div className="sign-bg">
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
               <Col
                  md="6"
                  className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden"
               >
                  <Image
                     src={auth1}
                     className="Image-fluid gradient-main animated-scaleX"
                     alt="images"
                  />
               </Col>
            </Row>
         </section>
      </>
   );
});

SignIn.displayName = "SignIn";
export default SignIn;
