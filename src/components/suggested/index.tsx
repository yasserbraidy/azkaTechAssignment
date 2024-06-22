import { Button } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import img2 from "../../assets/modules/social/images/avatar/01.png";
import img4 from "../../assets/modules/social/images/avatar/09.png";
import img6 from "../../assets/modules/social/images/avatar/15.png";
import img8 from "../../assets/modules/social/images/avatar/23.png";
import img9 from "../../assets/modules/social/images/avatar/26.png";
import { icons } from "../Icons";

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
                        {icons.add}
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
                          {icons.add}
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
                          {icons.add}
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
                          {icons.add}
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
                          {icons.add}
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