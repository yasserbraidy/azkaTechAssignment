import { memo } from "react";

// React Bootstrap
import { Container } from "react-bootstrap";

// Router
import { Link } from "react-router-dom";

const Error500 = memo(() => {
  return (
    <>
      <div className="gradient">
        <Container>
          <h1 style={{ fontSize: "300px", fontWeight: "800" }}>500</h1>
          <h2 className="mb-0 mt-4 text-white">Internal Server Error</h2>
          <p className="mt-2 text-white">
            Oops! Something went wrong on our end.
          </p>
          <Link
            className="btn bg-white text-primary d-inline-flex align-items-center"
            to="/"
          >
            Back to Home
          </Link>
        </Container>
        <div className="box">
          <div className="c xl-circle">
            <div className="c lg-circle">
              <div className="c md-circle">
                <div className="c sm-circle">
                  <div className="c xs-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Error500.displayName = "Error500";
export default Error500;
