import { Nav, Tab, Card, Image } from "react-bootstrap";

import img28 from "../../assets/modules/social/images/avatar/24.png";
import img29 from "../../assets/modules/social/images/avatar/12.png";
import img30 from "../../assets/modules/social/images/avatar/14.png";
import img31 from "../../assets/modules/social/images/avatar/09.png";
import img32 from "../../assets/modules/social/images/avatar/10.png";
import img33 from "../../assets/modules/social/images/avatar/11.png";
import { icons } from "../Icons";
export default function Message() {
    return (
        <>
            <Card>
                <Card.Header>
                    <div className="header-title d-flex justify-content-between">
                        <h4 className="card-title">Message</h4>
                        <span>
                            {icons.write}
                        </span>
                    </div>
                   
                </Card.Header>
                <Card.Body>
                    <div className="nav">
                        <div className="form-group input-group mb-0 search-input w-100 ">
                            <input
                            type="search"
                            className="form-control"
                            placeholder="Search..."
                            />
                            <span className="input-group-text">
                                {icons.search}
                            </span>
                        </div>
                    </div>
                    <Tab.Container defaultActiveKey="first">
                        <div className="iq-social-message-newsfeed mt-3">
                            <nav className="tab-bottom-bordered">
                                <Nav
                                    className="mb-0 nav-tabs flex-nowrap justify-content-between"
                                    id="nav-tab"
                                    role="tablist"
                                >
                                    <Nav.Link
                                        href="#"
                                        eventKey="first"
                                        id="pills-activeorders-tab1"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-activeorders"
                                        role="tab"
                                        aria-controls="pills-activeorders"
                                        aria-selected="true"
                                    >
                                    <span className="iq-socail-message-tab-text">
                                        Archive
                                    </span>
                                    <span
                                        className="iq-socail-message-tab-icon"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Primary"
                                    >
                                        {icons.archive}
                                    </span>
                                    </Nav.Link>

                                    <Nav.Link
                                        href="#"
                                        eventKey="second"
                                        id="pills-cancelledorders-tab1"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-cancelledorders"
                                        role="tab"
                                        aria-controls="pills-cancelledorders"
                                        aria-selected="false"
                                    >
                                    <span className="iq-socail-message-tab-text">Recent</span>
                                    <span
                                        className="iq-socail-message-tab-icon"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="General"
                                    >
                                        {icons.recent}
                                    </span>
                                    </Nav.Link>

                                    <Nav.Link
                                    eventKey="third"
                                    href="#"
                                    id="pills-mytrades-tab1"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-mytrades"
                                    role="tab"
                                    aria-controls="pills-mytrades"
                                    aria-selected="false"
                                    >
                                    <span className="iq-socail-message-tab-text">New</span>
                                    <span
                                        className="iq-socail-message-tab-icon"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Requests"
                                    >
                                        {icons.new}
                                    </span>
                                    </Nav.Link>
                                </Nav>
                            </nav>
                        </div>
                        <Tab.Content id="pills-tabContent">
                            
                            <Tab.Pane
                                eventKey="first"
                                className="fade"
                                id="pills-activeorders"
                                role="tabpanel"
                            >
                                <div className="tabs-panel">
                                    <ul className="list-unstyled mb-0">
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img33}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Arman Rokni</h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img29}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>MD Alidoost</h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img28}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Afshin Rotni </h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img30}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Salman Shaha </h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img31}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Vida Lakhani </h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-0">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img32}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Goutham</h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                            </Tab.Pane>

                            <Tab.Pane
                                eventKey="second"
                                className="fade"
                                id="pills-cancelledorders"
                                role="tabpanel"
                            >
                                <div className="tabs-panel">
                                    <ul className="list-unstyled mb-0">
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img33}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Arman Rokni</h5>
                                            <small className="text-ellipsis short-1">
                                            Arman Rokni
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img29}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>MD Alidoost</h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img28}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Afshin Rotni </h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img30}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Salman Shaha </h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img31}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Vida Lakhani </h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-0">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img32}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Goutham</h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                            </Tab.Pane>

                            <Tab.Pane
                                eventKey="third"
                                className="fade"
                                id="pills-mytrades"
                                role="tabpanel"
                            >
                                <div className="tabs-panel">
                                    <ul className="list-unstyled mb-0">
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img33}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Arman Rokni</h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img29}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>MD Alidoost</h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img28}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Afshin Rotni </h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img30}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h6>Salman Shaha </h6>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-1">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img31}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Vida Lakhani </h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="py-3 pb-0">
                                        <div className="d-flex align-items-center">
                                        <Image
                                            src={img32}
                                            className="img-fluid avatar-50 me-3 rounded-circle"
                                            alt="profile-image"
                                        />
                                        <div>
                                            <h5>Goutham</h5>
                                            <small className="text-ellipsis short-1">
                                            Active 30m
                                            </small>
                                        </div>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                            </Tab.Pane>

                        </Tab.Content>
                    </Tab.Container>
                </Card.Body>
            </Card>
        </>
    );
}