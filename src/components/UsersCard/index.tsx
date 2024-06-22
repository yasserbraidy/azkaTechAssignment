import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import SelectInput from "../SelectInput";
import { Button } from "react-bootstrap";

import table1 from "../../assets/images/table/1.png";
import table2 from "../../assets/images/table/2.png";
import table3 from "../../assets/images/table/3.png";
import table4 from "../../assets/images/table/4.png";
import table5 from "../../assets/images/table/5.png";

export default function UsersCard() {
    const options1 = [
      { value: "Select Your Account", label: "Select Your Account" },
      { value: "5521000120354", label: "5521000120354" },
      { value: "5521000125145", label: "5521000125145" },
      { value: "5521000129665", label: "5521000129665" },
    ];

    const options2 = [
      { value: "Enter Amount in USD", label: "Enter Amount in USD" },
      { value: "100", label: "100" },
      { value: "200", label: "200" },
      { value: "500", label: "500" },
    ];
    return (
        <>
            <Col lg="6" md="12">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md="6">
                                <div className="mb-5">
                                    <div className="mb-2 d-flex justify-content-between align-items-center">
                                    <span className="text-dark">No Of Users</span>
                                    <Link
                                        className="badge rounded-pill bg-soft-primary"
                                        to="users/view-all"
                                    >
                                        View Users
                                    </Link>
                                    </div>
                                    <div className="mb-2">
                                        <h2 className="counter">
                                            <CountUp
                                            start={0}
                                            end={58556}
                                            duration={10}
                                            useEasing={true}
                                            separator=","
                                            />
                                        </h2>
                                        <small>Available</small>
                                    </div>
                                </div>
                                <div>
                                    {/* <div className="d-flex align-items-center mb-3">
                                        <div className="bg-soft-primary avatar-60 rounded">
                                            <svg
                                            width="35"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                opacity="0.4"
                                                d="M17.554 7.29614C20.005 7.29614 22 9.35594 22 11.8876V16.9199C22 19.4453 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35181 3.991 7.29614 6.438 7.29614H7.378L17.554 7.29614Z"
                                                fill="currentColor"
                                            ></path>
                                            <path
                                                d="M12.5464 16.0374L15.4554 13.0695C15.7554 12.7627 15.7554 12.2691 15.4534 11.9634C15.1514 11.6587 14.6644 11.6597 14.3644 11.9654L12.7714 13.5905L12.7714 3.2821C12.7714 2.85042 12.4264 2.5 12.0004 2.5C11.5754 2.5 11.2314 2.85042 11.2314 3.2821L11.2314 13.5905L9.63742 11.9654C9.33742 11.6597 8.85043 11.6587 8.54843 11.9634C8.39743 12.1168 8.32142 12.3168 8.32142 12.518C8.32142 12.717 8.39743 12.9171 8.54643 13.0695L11.4554 16.0374C11.6004 16.1847 11.7964 16.268 12.0004 16.268C12.2054 16.268 12.4014 16.1847 12.5464 16.0374Z"
                                                fill="currentColor"
                                            ></path>
                                            </svg>
                                        </div>
                                        <div className="ms-3" style={{ width: "100%" }}>
                                            <div className="d-flex justify-content-between  ">
                                            <h6>Received</h6>
                                            <h6 className="text-body">$5,674</h6>
                                            </div>
                                            <div
                                            className="progress bg-soft-primary shadow-none w-100"
                                            style={{ height: "6px" }}
                                            >
                                            <div
                                                className="progress-bar bg-primary"
                                                data-toggle="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={70}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{
                                                width: "70%",
                                                transition: "width 2s ease 0s",
                                                }}
                                            ></div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                    <div className="bg-soft-primary avatar-60 rounded">
                                        <svg
                                        width="35"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            opacity="0.4"
                                            d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z"
                                            fill="currentColor"
                                        ></path>
                                        <circle
                                            cx="18"
                                            cy="11.8999"
                                            r="1"
                                            fill="currentColor"
                                        ></circle>
                                        </svg>
                                    </div>
                                    <div className="ms-3" style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between  ">
                                        <h6>Transferred</h6>
                                        <h6 className="text-body">$1,624</h6>
                                        </div>
                                        <div
                                        className="progress bg-soft-info shadow-none w-100"
                                        style={{ height: "6px" }}
                                        >
                                        <div
                                            className="progress-bar bg-info"
                                            data-toggle="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={33}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{
                                            width: "33%",
                                            transition: "width 2s ease 0s",
                                            }}
                                        ></div>
                                        </div>
                                    </div>
                                    </div> */}
                                </div>
                            </Col>

                            <Col md="6" className="mb-5 mb-md-0">
                                <div className="iq-scroller-effect">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-dark">See Active Users</span>
                                        <Link
                                            to="users/view-all"
                                            className="badge rounded-pill bg-soft-primary"
                                        >
                                            All Contacts
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center iq-slider mb-4 gap-2">
                                        <div>
                                            <img
                                            className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2"
                                            src={table1}
                                            alt="profile"
                                            loading="lazy"
                                            />
                                        </div>
                                        <div>
                                            <img
                                            className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2"
                                            src={table2}
                                            alt="profile"
                                            loading="lazy"
                                            />
                                        </div>
                                        <div>
                                            <img
                                            className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2"
                                            src={table3}
                                            alt="profile"
                                            loading="lazy"
                                            />
                                        </div>
                                        <div>
                                            <img
                                            className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2"
                                            src={table4}
                                            alt="profile"
                                            loading="lazy"
                                            />
                                        </div>
                                        <div>
                                            <img
                                            className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2"
                                            src={table5}
                                            alt="profile"
                                            loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    {/* <div>
                                        <div className="form-group custom-choicejs">
                                            <SelectInput options={options1}></SelectInput>
                                        </div>
                                        <div className="form-group custom-choicejs">
                                            <SelectInput options={options2}></SelectInput>
                                        </div>
                                    </div>
                                    <Button className="btn btn-primary w-100 mt-2">
                                    Send Money
                                    </Button> */}
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}