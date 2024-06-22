import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import img11 from "../../assets/modules/social/images/newsfeed/03.png";
import img12 from "../../assets/modules/social/images/newsfeed/11.png";
import img13 from "../../assets/modules/social/images/newsfeed/04.png";
import img14 from "../../assets/modules/social/images/newsfeed/09.png";
import img15 from "../../assets/modules/social/images/newsfeed/10.png";
import img20 from "../../assets/modules/social/images/newsfeed/02.png";
import { useState } from "react";
interface IExplore {
    imageOnSlide: (nb: number) => void
}
export default function Explore(props: IExplore) {
    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1,
    });
    function imageOnSlide(number: number) {
        setImageController({
        toggler: !imageController.toggler,
        slide: number,
        });
    }
    return (
      <>
        <Card>
          <Card.Header className="d-flex align-items-center justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Explore</h4>
            </div>
            <Link
              to="/"
              onClick={(e: any) => e.preventDefault()}
              className="text-body"
            >
              See all
            </Link>
          </Card.Header>
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between flex-grow-1">
              <div className="d-flex ">
                <div className="btn btn-sm  btn-soft-primary">Website</div>
                <div className="btn btn-sm  btn-soft-primary ms-3">product</div>
              </div>
            </div>
            <div className="iq-grid-explore d-grid mt-3">
              <Link
                onClick={() => imageOnSlide(1)}
                to="#"
                className="iq-item-col-end rounded mb-2"
              >
                <Image className="img-fluid rounded" src={img11} alt="grid-1" />
              </Link>
              <div className="d-flex justify-content-between mb-2">
                <Link
                  onClick={() => imageOnSlide(2)}
                  to="#"
                  className="iq-item-row-end rounded me-1"
                >
                  <Image
                    className="img-fluid rounded"
                    src={img12}
                    alt="grid-2"
                  />
                </Link>
                <Link
                  onClick={() => imageOnSlide(3)}
                  to="#"
                  className="iq-item-row-end rounded ms-1"
                >
                  <Image
                    className="img-fluid rounded"
                    src={img13}
                    alt="grid-3"
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <Link
                onClick={() => imageOnSlide(4)}
                to="#"
                className="iq-item-row-end rounded me-1"
              >
                <Image className="img-fluid rounded" src={img14} alt="grid-4" />
              </Link>
              <Link
                onClick={() => imageOnSlide(5)}
                to="#"
                className="iq-item-row-end rounded ms-1"
              >
                <Image className="img-fluid rounded" src={img15} alt="grid-5" />
              </Link></div>

              <Link
                onClick={() => imageOnSlide(6)}
                to="#"
                className="iq-item-col-end rounded"
              >
                <Image className="img-fluid rounded" src={img20} alt="grid-6" />
              </Link>
            </div>
          </Card.Body>
        </Card>
      </>
    );
}