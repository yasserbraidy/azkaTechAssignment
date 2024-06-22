import { Button } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import img2 from "../../assets/modules/social/images/avatar/01.png";
import img4 from "../../assets/modules/social/images/avatar/09.png";
import img6 from "../../assets/modules/social/images/avatar/15.png";
import img8 from "../../assets/modules/social/images/avatar/23.png";
import img9 from "../../assets/modules/social/images/avatar/26.png";

export default function Suggested() {
    return (
      <>
        <Card>
          <Card.Header className="d-flex align-items-center justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Suggested</h4>
            </div>
            <Link to="#" className="text-body">
              See all
            </Link>
          </Card.Header>
          <Card.Body>
            <div className="iq-social-user-details">
              <div className="d-flex justify-content-center gap-3">
                <Image
                  src={img2}
                  className="img-fluid avatar-48 rounded-circle"
                  alt="profile-image"
                />
                <div className="d-flex align-items-center  justify-content-between  flex-grow-1">
                  <div>
                    <h5>Vida Lakhani</h5>
                    <small className="text-ellipsis short-1">
                      Liked Your Photo
                    </small>
                  </div>
                  <div>
                    <Button variant="primary btn-icon btn-sm  rounded-pill">
                      <span className="btn-inner">
                        <svg
                          width="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.4"
                            d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <div className="d-flex justify-content-center">
                  <div className="iq-newsfeed-img">
                    <Image
                      src={img4}
                      className="img-fluid avatar-48  rounded-circle"
                      alt="profile-image-1"
                    />
                  </div>
                  <div className="d-flex align-items-center  ms-2 justify-content-between  flex-grow-1">
                    <div>
                      <h5>Arman Rokni</h5>
                      <small className="text-ellipsis short-1">
                        Started Following You
                      </small>
                    </div>
                    <div>
                      <Button variant="primary btn-icon btn-sm  rounded-pill">
                        <span className="btn-inner">
                          <svg
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-center">
                  <div className="iq-newsfeed-img">
                    <Image
                      src={img6}
                      className="img-fluid avatar-48  rounded-circle"
                      alt="profile-image-1"
                    />
                  </div>
                  <div className="d-flex align-items-center  ms-2 justify-content-between  flex-grow-1">
                    <div>
                      <h5>Salman Shaha</h5>
                      <small className="text-ellipsis short-1">
                        Liked Your Photo
                      </small>
                    </div>
                    <div>
                      <Button variant="primary btn-icon btn-sm  rounded-pill">
                        <span className="btn-inner">
                          <svg
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <div className="d-flex justify-content-center">
                  <div className="iq-newsfeed-img">
                    <Image
                      src={img8}
                      className="img-fluid avatar-48  rounded-circle"
                      alt="profile-image-1"
                    />
                  </div>
                  <div className="d-flex align-items-center  ms-2 justify-content-between  flex-grow-1">
                    <div>
                      <h5>Afshin Rotni</h5>
                      <small className="text-ellipsis short-1">
                        Started Following You
                      </small>
                    </div>
                    <div>
                      <Button variant="primary btn-icon btn-sm  rounded-pill">
                        <span className="btn-inner">
                          <svg
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <div className="iq-newsfeed-img">
                    <Image
                      src={img9}
                      className="img-fluid avatar-48  rounded-circle"
                      alt="profile-image-1"
                    />
                  </div>
                  <div className="d-flex align-items-center  ms-2 justify-content-between  flex-grow-1">
                    <div>
                      <h5>MD Ali</h5>
                      <small className="text-ellipsis short-1">
                        Liked Your Photo
                      </small>
                    </div>
                    <div>
                      <Button variant="primary btn-icon btn-sm  rounded-pill">
                        <span className="btn-inner">
                          <svg
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
}