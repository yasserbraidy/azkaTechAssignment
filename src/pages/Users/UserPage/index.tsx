import { memo} from "react";

//react-bootstrap
import { Row, Col, Image, Form, Nav, Dropdown, Tab, Card } from "react-bootstrap";


//router
import { Link } from "react-router-dom";


// img
import avatars22 from "../../../assets/images/avatars/avtar_1.png";
import { useParams } from "react-router-dom";
import useProfileHooks from "./hooks";
import Loader3 from "../../../components/Loader";
import ErrorAlert from "../../../components/Error";
import Post from "../../../components/Post";

function UserProfile() {
    const { id } = useParams();
    const { loader, user, fetchingError, posts } = useProfileHooks(id);
    return (
        <>
            {loader && <Loader3 />}
            {!loader && fetchingError.isError && <ErrorAlert {...fetchingError} />}
            {!loader && !fetchingError.isError && (
                <Tab.Container defaultActiveKey="second">
                    <Row>

                        {/* Header */}
                        <Col lg="12" >
                            <Card>
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="d-flex flex-wrap align-items-center">
                                            <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                                <Image
                                                    className="img-fluid rounded-pill avatar-100"
                                                    src={avatars22}
                                                    alt="profile-pic"
                                                />
                                            </div>
                                            <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                                                <h4 className="me-2 h4">{user?.name}</h4>
                                                <span> - {user?.company?.name}</span>
                                            </div>
                                        </div>
                                        <Nav
                                            as="ul"
                                            className="d-flex nav-pills mb-0 text-center profile-tab"
                                            data-toggle="slider-tab"
                                            id="profile-pills-tab"
                                            role="tablist"
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="first">Feed</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="second">Profile</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col lg="10" className="m-auto">
                            <Tab.Content className="profile-content">
                                {/* Feed Tab Pane */}
                                <Tab.Pane eventKey="first" id="profile-feed">
                                    {posts.map((post, index) => (
                                        <Post
                                            key={index}
                                            userFullName={user?.name}
                                            username={`@${user?.username}`}
                                            post={post}
                                            count={index + 1}
                                        />
                                    ))}
                                </Tab.Pane>

                                {/* Profile Tab Pane */}
                                <Tab.Pane eventKey="second" id="profile-profile">
                                    {/* Profile */}
                                    <Card>
                                        <Card.Header>
                                            <div className="header-title">
                                                <h4 className="card-title">Profile</h4>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="text-center">
                                                <div className="user-profile">
                                                    <Image
                                                        className="theme-color-purple-img rounded-pill avatar-130 img-fluid"
                                                        src={avatars22}
                                                        alt="profile-pic"
                                                    />
                                                </div>
                                                <div className="mt-3">
                                                    <h3 className="d-inline-block">{user?.name}</h3>
                                                    <p className="d-inline-block pl-3">{` - ${user?.company?.name}`}</p>
                                                    <p className="mb-0">
                                                        <b>'Static': </b> Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                    {/* About User */}
                                    <Card>
                                        <Card.Header>
                                            <div className="header-title">
                                                <h4 className="card-title">About User</h4>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="user-bio">
                                                <p>
                                                    <b>'Static': </b>  About: Tart I love sugar plum I love oat cake. Sweet roll
                                                    caramels I love jujubes. Topping cake wafer.
                                                </p>
                                            </div>
                                            <div className="mt-2">
                                                <h6 className="mb-1">Joined:</h6>
                                                <p>Feb 15, 2021</p>
                                            </div>
                                            <div className="mt-2">
                                                <h6 className="mb-1">Lives:</h6>
                                                <p>{`${user?.address?.city} - ${user?.address?.street}`}</p>
                                            </div>
                                            <div className="mt-2">
                                                <h6 className="mb-1">Email:</h6>
                                                <p>
                                                    <Link to={`mailto:${user?.email}`} className="text-body">
                                                        {user?.email}
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="mt-2">
                                                <h6 className="mb-1">Url:</h6>
                                                <p>
                                                    <Link to={`www.${user?.website}`} className="text-body">
                                                        {`www.${user?.website}`}
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="mt-2">
                                                <h6 className="mb-1">Contact:</h6>
                                                <p>
                                                    <Link to={`tel:${user?.phone}`} className="text-body">
                                                        {user?.phone}
                                                    </Link>
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            )}
        </>
    );
};

UserProfile.displayName = "UserProfile";
export default memo(UserProfile);
