import { Table } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { icons } from "../Icons";

export default function UserFilterTable() {
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
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$2,298</h6>
                                    </div>
                                </td>
                                <td className="text-primary">ufsoishqbw</td>
                                <td className="text-dark">7 Days Ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-success ">
                                    Processed
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$2,032</h6>
                                    </div>
                                </td>
                                <td className="text-primary">fescijfgbb</td>
                                <td className="text-dark">23 Days </td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-success">
                                    Processed
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$1,514</h6>
                                    </div>
                                </td>
                                <td className="text-primary">eihghndltk</td>
                                <td className="text-dark">1 month ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-success">
                                    Processed
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$1,425</h6>
                                    </div>
                                </td>
                                <td className="text-primary">bvihnfpdfq</td>
                                <td className="text-dark">2 month ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-success">
                                    Processed
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$2,838</h6>
                                    </div>
                                </td>
                                <td className="text-primary">afrtmvdyjp</td>
                                <td className="text-dark">2 month ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-success">
                                    Processed
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$2,613</h6>
                                    </div>
                                </td>
                                <td className="text-primary">jterqcvjxz</td>
                                <td className="text-dark">5 month ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-success">
                                    Processed
                                    </span>
                                </td>
                                </tr>
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
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$2,866</h6>
                                    </div>
                                </td>
                                <td className="text-primary">odqethdqye</td>
                                <td className="text-dark">3 Days Ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-info ">
                                    Process
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$1,637</h6>
                                    </div>
                                </td>
                                <td className="text-primary">nmngvsosnh</td>
                                <td className="text-dark">22 Days Ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-success">
                                    Refunded
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$2,922</h6>
                                    </div>
                                </td>
                                <td className="text-primary">uikgtphcpo</td>
                                <td className="text-dark">1 month ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-success">
                                    Refunded
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$2,563</h6>
                                    </div>
                                </td>
                                <td className="text-primary">cieqrdyqkp</td>
                                <td className="text-dark">2 month ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-info">
                                    Process
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$2,334</h6>
                                    </div>
                                </td>
                                <td className="text-primary">wmdvzpfavx</td>
                                <td className="text-dark">3 month ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-success">
                                    Refunded
                                    </span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <h6 className="mb-0">$2,632</h6>
                                    </div>
                                </td>
                                <td className="text-primary">jplpprjzbr</td>
                                <td className="text-dark">5 month ago</td>
                                <td className="text-end">
                                    <span className="badge rounded-pill bg-danger">
                                    Failed
                                    </span>
                                </td>
                                </tr>
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