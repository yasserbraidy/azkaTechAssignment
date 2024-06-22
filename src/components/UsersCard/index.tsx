import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

import table1 from "../../assets/images/table/1.png";
import table2 from "../../assets/images/table/2.png";
import table3 from "../../assets/images/table/3.png";
import table4 from "../../assets/images/table/4.png";
import table5 from "../../assets/images/table/5.png";
interface IUsersCard {
  count: number;
}
export default function UsersCard(props: IUsersCard) {
    
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
                                            end={props.count}
                                            duration={10}
                                            useEasing={true}
                                            separator=","
                                            />
                                        </h2>
                                        <small>Available</small>
                                    </div>
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
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}