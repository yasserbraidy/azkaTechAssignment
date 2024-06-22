import {useState, memo,Fragment} from 'react'
import { Row,Col,Dropdown,Button, Form, Table, Card, Tab, Nav} from 'react-bootstrap'

import { Link } from 'react-router-dom'

//apexcharts
import Chart from "react-apexcharts";

//component
import CustomToggle from '../../components/Dropdown';

//flatpickr
import Flatpickr from "react-flatpickr";


//img
import table1 from "../../assets/images/table/1.png";
import table2 from "../../assets/images/table/2.png";
import table3 from "../../assets/images/table/3.png";
import table4 from "../../assets/images/table/4.png";
import table5 from "../../assets/images/table/5.png";


// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../../store/setting/selectors'

//Count-up
import CountUp from 'react-countup';

//select
import { options, options1, options2, chart1, chart2 } from "./Data";
import SelectInput from '../../components/SelectInput';

const Home = memo((props) => {
    useSelector(SettingSelector.theme_color)
    const [checked, setChecked] = useState(true);

    return (
        <>
            
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 gap-3">
                <div className="d-flex flex-column">
                    <h3>Quick Insights</h3>
                    <p className="text-primary mb-0">Dashboard</p>
                </div>
                <div className="d-flex justify-content-between align-items-center rounded flex-wrap gap-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <Form.Check  className="form-switch mb-0 iq-status-switch" type='switch' id="flexSwitchCheckChecked" defaultChecked={checked} onClick={() => setChecked(!checked)} />
                        <label className="form-check-label iq-reset-status " htmlFor="flexSwitchCheckChecked">
                            {checked === true ?  'Online' : 'Offline' }
                        </label>
                    </div>
                    <div className="form-group mb-0" style={{ minWidth: "145px" }}>
                        <SelectInput options={options}></SelectInput>
                    </div>
                    <div className="form-group mb-0 ">
                    <Flatpickr  options={{mode: "range", minDate: "today"}} className="form-control range_flatpicker" placeholder="24 Jan 2022 to 23 Feb 2022" />
                    </div>
                    <Button type="button" className="primary">Analytics</Button>
                </div>
            </div>

            <Row>
                <Col lg="3" md="6">
                    <Card className="card-block card-stretch card-height">
                        <Card.Body>
                            <div className="d-flex align-items-start justify-content-between mb-2">
                                <p className="mb-0 text-dark">Gross Volume</p>
                                <Link className="badge rounded-pill bg-soft-primary" to="#javascript:void(0);">
                                    View
                                </Link>
                            </div>
                            <div className="mb-3">
                                <h2 className="counter">$
                                    <CountUp
                                        start={0}
                                        end={199556 }
                                        duration={10}
                                        useEasing={true}
                                        separator=","
                                    />
                                </h2>
                                <small>Last updated 1 hour ago.</small>
                            </div>
                            <div>
                                <Chart options={chart1.options} series={chart1.series} type="bar" height="100%"></Chart>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3" md="6">
                    <Row>
                        <div className="col-12">
                            <Card className="card-block card-stretch card-height">
                                <Card.Body>
                                    <div className="mb-2 d-flex justify-content-between align-items-center">
                                        <span className="text-dark ">USD Balance</span>
                                        <Link className="badge rounded-pill bg-soft-primary" to="#javascript:void(0);">
                                            Request Payout
                                        </Link>
                                    </div>
                                    <h2 className="counter">$
                                    <CountUp
                                        start={0}
                                        end={2590}
                                        duration={10}
                                        useEasing={true}
                                        separator=","
                                    />
                                    </h2>
                                    <small>Available to pay out.</small>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-12">
                            <Card className="card-block card-stretch card-height">
                                <Card.Body>
                                    <div className="mb-2 d-flex justify-content-between align-items-center">
                                        <span className="text-dark">No Of Payments</span>
                                        <Link className="badge rounded-pill bg-soft-primary" to="#javascript:void(0);">
                                            View
                                        </Link>
                                    </div>
                                    <h2 className="counter">
                                        <CountUp
                                            start={0}
                                            end={367}
                                            duration={10}
                                            useEasing={true}
                                        />
                                    </h2>
                                    <small>Transactions this month</small>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Col>
                <Col lg="6" md="12">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md="6">
                                    <div className="mb-5">
                                        <div className="mb-2 d-flex justify-content-between align-items-center">
                                            <span className="text-dark">Last Transaction</span>
                                            <Link className="badge rounded-pill bg-soft-primary" to="#javascript:void(0);">
                                                View Report
                                            </Link>
                                        </div>
                                        <div className="mb-2">
                                            <h2 className="counter">$
                                            <CountUp
                                                start={0}
                                                end={58556}
                                                duration={10}
                                                useEasing={true}
                                                separator=","
                                            />
                                            </h2>
                                            <small>This Month</small>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-soft-primary avatar-60 rounded">
                                                <svg width="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M17.554 7.29614C20.005 7.29614 22 9.35594 22 11.8876V16.9199C22 19.4453 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35181 3.991 7.29614 6.438 7.29614H7.378L17.554 7.29614Z" fill="currentColor"></path>
                                                    <path d="M12.5464 16.0374L15.4554 13.0695C15.7554 12.7627 15.7554 12.2691 15.4534 11.9634C15.1514 11.6587 14.6644 11.6597 14.3644 11.9654L12.7714 13.5905L12.7714 3.2821C12.7714 2.85042 12.4264 2.5 12.0004 2.5C11.5754 2.5 11.2314 2.85042 11.2314 3.2821L11.2314 13.5905L9.63742 11.9654C9.33742 11.6597 8.85043 11.6587 8.54843 11.9634C8.39743 12.1168 8.32142 12.3168 8.32142 12.518C8.32142 12.717 8.39743 12.9171 8.54643 13.0695L11.4554 16.0374C11.6004 16.1847 11.7964 16.268 12.0004 16.268C12.2054 16.268 12.4014 16.1847 12.5464 16.0374Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div className="ms-3"style={{width: "100%"}}>
                                                <div className="d-flex justify-content-between  ">
                                                    <h6>Received</h6>
                                                    <h6 className="text-body">$5,674</h6>
                                                </div>
                                                <div className="progress bg-soft-primary shadow-none w-100" style={{height: "6px"}}>
                                                    <div className="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: "70%", transition: "width 2s ease 0s"}}></div>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="bg-soft-primary avatar-60 rounded">     
                                                <svg width="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z" fill="currentColor"></path>
                                                    <path opacity="0.4" d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z" fill="currentColor"></path>
                                                    <circle cx="18" cy="11.8999" r="1" fill="currentColor"></circle>
                                                </svg>
                                            </div>
                                            <div className="ms-3"style={{width: "100%"}}>
                                                <div className="d-flex justify-content-between  ">
                                                    <h6>Transferred</h6>
                                                    <h6 className="text-body">$1,624</h6>
                                                </div>
                                                <div className="progress bg-soft-info shadow-none w-100" style={{height: "6px"}}>
                                                    <div className="progress-bar bg-info" data-toggle="progress-bar" role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} style={{width: "33%", transition: "width 2s ease 0s"}}></div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6" className="mb-5 mb-md-0">
                                    <div className="iq-scroller-effect">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="text-dark">Send Money To</span>
                                            <Link  to="/table/border-table" className="badge rounded-pill bg-soft-primary">
                                                All Contacts
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center iq-slider mb-4 gap-2">
                                            <div>
                                                <img className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2" src={table1} alt="profile" loading="lazy" />
                                            </div>
                                            <div>
                                                <img className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2" src={table2} alt="profile" loading="lazy" />
                                            </div>
                                            <div>
                                                <img className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2" src={table3} alt="profile" loading="lazy" />
                                            </div>
                                            <div>
                                                <img className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2" src={table4} alt="profile" loading="lazy" />
                                            </div>
                                            <div>
                                                <img className="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2" src={table5} alt="profile" loading="lazy" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="form-group custom-choicejs">
                                                <SelectInput options={options1}></SelectInput>
                                            </div>
                                            <div className="form-group custom-choicejs">
                                                <SelectInput options={options2}></SelectInput>
                                            </div>
                                        </div>
                                        <Button className="btn btn-primary w-100 mt-2">Send Money</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="6" md="12">
                    <Card className="card-block card-stretch card-height">
                        <Card.Header>
                                <div className=" d-flex justify-content-between  flex-wrap">
                                <h4 className="card-title">Net Volumes From Sales</h4>
                                <Dropdown>
                                    <Dropdown.Toggle  as={CustomToggle} href="#" variant="text-secondary dropdown-toggle" size="sm" id="dropdownMenuButton1">
                                    This year                                        
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Year</Dropdown.Item>
                                        <Dropdown.Item href="#">Month</Dropdown.Item>
                                        <Dropdown.Item href="#">Week</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Chart options={chart2.options} series={chart2.series} type="line" height="100%" className="dashboard-line-chart"></Chart>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="6" md="12">
                    <Card className="card-block">
                        <Tab.Container defaultActiveKey="first">
                            <div className="tab-bottom-bordered">
                                <Nav className="mb-0 nav-tabs justify-content-around d-flex" id="nav-tab1" role="tablist">
                                    <Nav.Link className="py-3 " eventKey="first" data-bs-toggle="tab" data-bs-target="#payment" type="button" role="tab" aria-controls="payment" aria-selected="true">Payments</Nav.Link>
                                    <Nav.Link className="py-3" eventKey="second" data-bs-toggle="tab" data-bs-target="#set" type="button" role="tab" aria-controls="set" aria-selected="false">Settlements</Nav.Link>
                                    <Nav.Link className="py-3" eventKey="three" data-bs-toggle="tab" data-bs-target="#refund" type="button" role="tab" aria-controls="refund" aria-selected="false">Refunds</Nav.Link>
                                </Nav>
                            </div>
                            <Tab.Content className="iq-tab-fade-up" id="nav-tabContent">
                                <Tab.Pane eventKey="first"  id="payment" role="tabpanel" aria-labelledby="payment">
                                    <div className="table-responsive">
                                        <table id="basic-table" className="table mb-0 table-striped" role="grid">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$1,833</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        vxnnjigakm
                                                    </td>
                                                    <td className="text-dark">1 Hour Ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success ">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$1,204</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        uwsxaiuhhs
                                                    </td>
                                                    <td className="text-dark">23 Days Ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,833</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        taxrcfzhny
                                                    </td>
                                                    <td className="text-dark">1 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,235</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        pknfotsmhl
                                                    </td>
                                                    <td className="text-dark">1 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,442</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        xqgczqbgto
                                                    </td>
                                                    <td className="text-dark">3 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$1,924</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        eoasrkizdw
                                                    </td>
                                                    <td className="text-dark">4 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane  eventKey="second" id="set" role="tabpanel" aria-labelledby="set">
                                    <div className="table-responsive">
                                        <Table id="basic-table" className="table mb-0 table-striped" role="grid">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,298</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        ufsoishqbw
                                                    </td>
                                                    <td className="text-dark">7 Days Ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success ">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,032</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        fescijfgbb
                                                    </td>
                                                    <td className="text-dark">23 Days </td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$1,514</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        eihghndltk
                                                    </td>
                                                    <td className="text-dark">1 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$1,425</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        bvihnfpdfq
                                                    </td>
                                                    <td className="text-dark">2 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,838</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        afrtmvdyjp
                                                    </td>
                                                    <td className="text-dark">2 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,613</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        jterqcvjxz
                                                    </td>
                                                    <td className="text-dark">5 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Processed</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane  eventKey="three" id="refund" role="tabpanel" aria-labelledby="refund">
                                    <div className="table-responsive">
                                        <Table id="basic-table" className="table mb-0 table-striped" role="grid">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,866</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        odqethdqye
                                                    </td>
                                                    <td className="text-dark">3 Days Ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-info ">Process</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$1,637</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        nmngvsosnh
                                                    </td>
                                                    <td className="text-dark">22 Days Ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Refunded</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,922</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        uikgtphcpo
                                                    </td>
                                                    <td className="text-dark">1 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Refunded</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,563</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        cieqrdyqkp
                                                    </td>
                                                    <td className="text-dark">2 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-info">Process</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,334</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        wmdvzpfavx
                                                    </td>
                                                    <td className="text-dark">3 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-success">Refunded</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0">$2,632</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-primary">
                                                        jplpprjzbr
                                                    </td>
                                                    <td className="text-dark">5 month ago</td>
                                                    <td className="text-end">
                                                        <span className="badge rounded-pill bg-danger">Failed</span>
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
                                <span className="me-2">
                                    View all Settlements
                                </span>
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
    }
)

Home.displayName="Home"
export default Home
