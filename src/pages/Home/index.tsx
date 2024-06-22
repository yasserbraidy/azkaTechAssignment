import {memo} from 'react'
import { Row,Col,Dropdown, Table, Card, Tab, Nav} from 'react-bootstrap'

import { Link } from 'react-router-dom'

//apexcharts
import Chart from "react-apexcharts";

//component
import CustomToggle from '../../components/Dropdown';



// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../../store/setting/selectors'

import HomeHeader from '../../components/HomeHeader';
import Impressions from '../../components/Impressions';
import PostCountCard from '../../components/PostsCountCard';
import CommentCountCard from '../../components/CommentCountCard';
import UsersCard from '../../components/UsersCard';
import CommentsChart from '../../components/CommentsChart';

const Home = memo((props) => {
    useSelector(SettingSelector.theme_color)

    return (
      <>
        <HomeHeader />

        <Row>
            <Impressions />

            <Col lg="3" md="6">
                <Row>
                <PostCountCard />
                <CommentCountCard />
                </Row>
            </Col>
            <UsersCard />
            <CommentsChart />
            
          <Col lg="6" md="12">
            <Card className="card-block">
              <Tab.Container defaultActiveKey="first">
                <div className="tab-bottom-bordered">
                  <Nav
                    className="mb-0 nav-tabs justify-content-around d-flex"
                    id="nav-tab1"
                    role="tablist"
                  >
                    <Nav.Link
                      className="py-3 "
                      eventKey="first"
                      data-bs-toggle="tab"
                      data-bs-target="#payment"
                      type="button"
                      role="tab"
                      aria-controls="payment"
                      aria-selected="true"
                    >
                      Payments
                    </Nav.Link>
                    <Nav.Link
                      className="py-3"
                      eventKey="second"
                      data-bs-toggle="tab"
                      data-bs-target="#set"
                      type="button"
                      role="tab"
                      aria-controls="set"
                      aria-selected="false"
                    >
                      Settlements
                    </Nav.Link>
                    <Nav.Link
                      className="py-3"
                      eventKey="three"
                      data-bs-toggle="tab"
                      data-bs-target="#refund"
                      type="button"
                      role="tab"
                      aria-controls="refund"
                      aria-selected="false"
                    >
                      Refunds
                    </Nav.Link>
                  </Nav>
                </div>
                <Tab.Content className="iq-tab-fade-up" id="nav-tabContent">
                  <Tab.Pane
                    eventKey="first"
                    id="payment"
                    role="tabpanel"
                    aria-labelledby="payment"
                  >
                    <div className="table-responsive">
                      <table
                        id="basic-table"
                        className="table mb-0 table-striped"
                        role="grid"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <h6 className="mb-0">$1,833</h6>
                              </div>
                            </td>
                            <td className="text-primary">vxnnjigakm</td>
                            <td className="text-dark">1 Hour Ago</td>
                            <td className="text-end">
                              <span className="badge rounded-pill bg-success ">
                                Processed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <h6 className="mb-0">$1,204</h6>
                              </div>
                            </td>
                            <td className="text-primary">uwsxaiuhhs</td>
                            <td className="text-dark">23 Days Ago</td>
                            <td className="text-end">
                              <span className="badge rounded-pill bg-success">
                                Processed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <h6 className="mb-0">$2,833</h6>
                              </div>
                            </td>
                            <td className="text-primary">taxrcfzhny</td>
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
                                <h6 className="mb-0">$2,235</h6>
                              </div>
                            </td>
                            <td className="text-primary">pknfotsmhl</td>
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
                                <h6 className="mb-0">$2,442</h6>
                              </div>
                            </td>
                            <td className="text-primary">xqgczqbgto</td>
                            <td className="text-dark">3 month ago</td>
                            <td className="text-end">
                              <span className="badge rounded-pill bg-success">
                                Processed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <h6 className="mb-0">$1,924</h6>
                              </div>
                            </td>
                            <td className="text-primary">eoasrkizdw</td>
                            <td className="text-dark">4 month ago</td>
                            <td className="text-end">
                              <span className="badge rounded-pill bg-success">
                                Processed
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="second"
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
                    eventKey="three"
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
                <Link to="#javascript:void(0);">
                  <span className="me-2">View all Settlements</span>
                  <svg
                    width="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 5L15.5 12L8.5 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
    }
)

Home.displayName="Home"
export default Home
