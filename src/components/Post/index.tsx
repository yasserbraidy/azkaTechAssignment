import { Card, Image, Form } from "react-bootstrap";
import avatars5 from "../../assets/images/avatars/06.png";
import { Link } from "react-router-dom";
import IPostComponent from "./interface";

export default function Post(props: IPostComponent) {
    return (
        <>
            <Card>
                <Card.Header className="d-flex align-items-center justify-content-between pb-4">
                    <div className="header-title">
                        <div className="d-flex flex-wrap">
                            <div className="media-support-user-img me-3">
                                <Image
                                    className="rounded-pill img-fluid avatar-60 p-1 bg-soft-info"
                                    src={avatars5}
                                    alt=""
                                />
                            </div>
                            <div className="media-support-info mt-2">
                                <h5 className="mb-0">{props.userFullName}</h5>
                                <p className="mb-0 text-primary">{props.username}</p>
                            </div>
                        </div>
                    </div>
                </Card.Header>

                <Card.Body className="p-0">
                    <p className="p-3 mb-0">{props.post?.body}</p>
                    <div className="comment-area p-3">
                    <hr className="mt-0" />
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center message-icon me-3">
                            <svg width="20" height="20" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                            />
                            </svg>
                            <span className="ms-1">{props?.count}</span>
                        </div>
                        <div className="d-flex align-items-center feather-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z"
                            />
                            </svg>
                            <span className="ms-1">{props?.count}</span>
                        </div>
                        </div>
                    </div>
                    <Form
                        className="comment-text d-flex align-items-center mt-3"
                        action=""
                    >
                        <Form.Control
                        type="text"
                        className="rounded"
                        placeholder="Lovely!"
                        />
                        <div className="comment-attagement d-flex">
                        <Link to="#" className="me-2 text-body">
                            <svg width="20" height="20" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                            />
                            </svg>
                        </Link>
                        <Link to="#" className="text-body">
                            <svg width="20" height="20" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z"
                            />
                            </svg>
                        </Link>
                        </div>
                    </Form>
                    </div>
                </Card.Body>
            </Card>
        </>
    );

}