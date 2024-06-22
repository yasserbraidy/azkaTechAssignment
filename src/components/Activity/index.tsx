import { Button } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../assets/modules/social/images/avatar/31.png";
import img2 from "../../assets/modules/social/images/avatar/01.png";
import img3 from "../../assets/modules/social/images/newsfeed/06.png";
import img4 from "../../assets/modules/social/images/avatar/09.png";
import img6 from "../../assets/modules/social/images/avatar/15.png";
import img7 from "../../assets/modules/social/images/newsfeed/05.png";
import img8 from "../../assets/modules/social/images/avatar/23.png";
import img9 from "../../assets/modules/social/images/avatar/26.png";
import img10 from "../../assets/modules/social/images/newsfeed/07.png";
import { icons } from "../Icons";

export default function Activity() {
    return (
      <>
        <Card>
          <Card.Header className="pb-3 d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Activity</h4>
            </div>
            <Link
              to=""
              onClick={(e: any) => e.preventDefault()}
              className="text-body"
            >
              See all
            </Link>
          </Card.Header>
          <Card.Body>
            <h5 className="mb-3">Stories About You</h5>
            <div className="d-flex align-items-center mb-4 gap-3">
              <Image
                src={img1}
                className="img-fluid avatar-50 me-2 rounded-circle"
                alt="img2"
              />
              <div>
                <p className="mb-0">Mentions</p>
                <small>2 stories mention you</small>
              </div>
            </div>
            <h5 className="mb-4">New</h5>
            <div className="iq-social-user-details">
              <div className="d-flex justify-content-center gap-3 mb-3">
                <div className="iq-newsfeed-img">
                  <Image
                    src={img2}
                    className="img-fluid avatar-48 rounded-circle"
                    alt="img3"
                  />
                </div>
                <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                  <div>
                    <h5>sepid</h5>
                    <small className="text-ellipsis short-1">
                      Liked Your Photo
                    </small>
                  </div>
                  <div>
                    <Image
                      src={img3}
                      className="img-fluid avatar-40 rounded object-contain"
                      alt="profile-image"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-3  mb-3">
                <div className="iq-newsfeed-img">
                  <Image
                    src={img4}
                    className="img-fluid avatar-48  rounded-circle"
                    alt="profile-image-1"
                  />
                </div>
                <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                  <div>
                    <h5>Rokni</h5>
                    <small className="text-ellipsis short-1">
                      Started Following You
                    </small>
                  </div>
                  <div>
                    <Button variant="primary  btn-sm btn-icon rounded-pill">
                      <span className="btn-inner">
                        {icons.add}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-3  mb-3">
                <div className="iq-newsfeed-img">
                  <Image
                    src={img6}
                    className="img-fluid avatar-48  rounded-circle"
                    alt="profile-image-1"
                  />
                </div>
                <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                  <div>
                    <h5>Arman</h5>
                    <small className="text-ellipsis short-1">
                      Liked Your Photo
                    </small>
                  </div>
                  <div>
                    <Image
                      src={img7}
                      className="img-fluid avatar-40 rounded object-contain"
                      alt="profile-image-2"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-3  mb-3">
                <div className="iq-newsfeed-img">
                  <Image
                    src={img8}
                    className="img-fluid avatar-48  rounded-circle"
                    alt="profile-image-1"
                  />
                </div>
                <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                  <div>
                    <h5>Medra</h5>
                    <small className="text-ellipsis short-1">
                      Started Following You
                    </small>
                  </div>
                  <div>
                    <Button variant="primary  btn-sm btn-icon rounded-pill">
                      <span className="btn-inner">
                        {icons.add}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-3">
                <div className="iq-newsfeed-img">
                  <Image
                    src={img9}
                    className="img-fluid avatar-48  rounded-circle"
                    alt="profile-image-1"
                  />
                </div>
                <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                  <div>
                    <h5>Afshin</h5>
                    <small className="text-ellipsis short-1">
                      Liked Your Photo
                    </small>
                  </div>
                  <div>
                    <Image
                      src={img10}
                      className="img-fluid avatar-40 rounded object-contain"
                      alt="profile-image-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
}