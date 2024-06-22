import { Table } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { icons } from "../Icons";
import IUserPostCount from "../../services/entities/UserPostCount";
import CountUp from "react-countup";
interface IUserFilterTable {
  filters: IUserPostCount[];
}
export default function UserFilterTable(props: IUserFilterTable) {
    return (
        <>
            <Col lg="6" md="12">
            <Card className="card-block">
                <Tab.Container defaultActiveKey="second">
                    <div className="tab-bottom-bordered">
                        <Nav
                        className="mb-0 nav-tabs justify-content-around d-flex"
                        id="nav-tab1"
                        role="tablist"
                        >
                        <Nav.Link
                            className="py-3"
                            eventKey="first"
                            data-bs-toggle="tab"
                            data-bs-target="#set"
                            type="button"
                            role="tab"
                            aria-controls="set"
                            aria-selected="false"
                        >
                            Filter By Posts
                        </Nav.Link>
                        <Nav.Link
                            className="py-3"
                            eventKey="second"
                            data-bs-toggle="tab"
                            data-bs-target="#refund"
                            type="button"
                            role="tab"
                            aria-controls="refund"
                            aria-selected="false"
                        >
                            Filter By Comments

                        </Nav.Link>
                        </Nav>
                    </div>
                    <Tab.Content className="iq-tab-fade-up" id="nav-tabContent">
                        <Tab.Pane
                        eventKey="first"
                        id="set"
                        role="tabpanel"
                        aria-labelledby="set"
                        >
                        <div className="table-responsive">
                            <Table
                            id="basic-table"
                            className="table mb-0 table-striped"
                            role="grid"
                            >
                            <tbody>
                                {props.filters.slice(0, 7).map((userPostCount, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <h6 className="mb-0">
                                                    <CountUp
                                                        start={0}
                                                        end={userPostCount.postCount || 0}
                                                        duration={4}
                                                        useEasing={true}
                                                        separator=","
                                                    /> Posts
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="text-primary">{userPostCount.userName}</td>
                                        <td className="text-dark">@{userPostCount.username}</td>
                                        <td className="text-end">
                                            <span className="badge rounded-pill bg-primary">
                                            user
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </Table>
                        </div>
                        </Tab.Pane>
                        <Tab.Pane
                        eventKey="second"
                        id="refund"
                        role="tabpanel"
                        aria-labelledby="refund"
                        >
                        <div className="table-responsive">
                            <Table
                            id="basic-table"
                            className="table mb-0 table-striped"
                            role="grid"
                            >
                            <tbody>
                                {props.filters.sort((a, b) => (a.userName ?? "").localeCompare(b.userName ?? "")).slice(0, 7).map((userPostCount, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <h6 className="mb-0">
                                                    <CountUp
                                                        start={0}
                                                        end={userPostCount.commentCount || 0}
                                                        duration={5}
                                                        useEasing={true}
                                                        separator=","
                                                    /> Comments
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="text-primary">{userPostCount.userName}</td>
                                        <td className="text-dark">@{userPostCount.username}</td>
                                        <td className="text-end">
                                            <span className="badge rounded-pill bg-primary">
                                            user
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </Table>
                        </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                    
                <div className="card-footer text-end">
                    <Link to="users/view-all">
                        <span className="me-2">View all Settlements</span>
                        {icons.leftArrow}
                    </Link>
                </div>
            </Card>
            </Col>
        </>
    );
}