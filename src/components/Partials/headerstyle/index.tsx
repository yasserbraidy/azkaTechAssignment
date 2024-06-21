import { useHeaderHooks } from "./Hooks";
import { useHeaderFunctions } from "./Functions";
import { toggleFullScreen } from '../../../utilities/root-var';
import {memo,
    Navbar, Container, Nav, Dropdown, Button,
    Link,
    CustomToggle,
    Logo,
    IHeader
} from "./imports";
import { icons } from "../../Icons";
import MobileNavBar from "../dashboard/mobile-navbar";
import FontSizeSelector from "../../FontSizeSelector";
import RadioBtn from "../../setting/elements/radio-btn";

const HeaderPro = memo((props: IHeader) => {
    const {
        navbarHide,
        themeFontSize,
        headerNavbar,
        show,
        setShow,
        show1,
        setShow1,
    } = useHeaderHooks();
  
    const {
        miniSidebar,
    } = useHeaderFunctions();

    return (
      <Navbar
        expand="xl"
        className={`nav iq-navbar ${headerNavbar} ${navbarHide.join(" ")}`}
      >
        <Container fluid className="navbar-inner">
          {/* Title */}
          <Link to="/" className="navbar-brand">
            <Logo color={true} />
            <h4 className="logo-title d-none d-sm-block">{props.appName}</h4>
          </Link>


          {/* Mobile Navbar content */}
          <div className="d-flex align-items-center justify-content-between product-offcanvas">
            <div
              className={`offcanvas offcanvas-end shadow-none iq-product-menu-responsive ${
                show1 === true ? "show" : ""
              } `}
              tabIndex={-1}
              id="offcanvasBottom"
              style={{ visibility: `${show1 === true ? "visible" : "hidden"}` }}
            >
              {show1 && <MobileNavBar />}
            </div>

            <div
              className={`offcanvas-backdrop fade  ${
                show1 === true ? "show d-block" : "d-none"
              }`}
              onClick={() => setShow1(false)}
            ></div>
          </div>

          {/* navbar expand icon */}
          <div className="d-flex align-items-center">
            <Button
              id="navbar-toggle"
              bsPrefix="navbar-toggler"
              type="button"
              aria-expanded={show1}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              onClick={() => setShow1(!show1)}
            >
              <span className="navbar-toggler-icon">
                <span className="mt-1 navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>
            </Button>
          </div>

          <div
            className={` navbar-collapse ${
              show1 === true ? "collapse show" : "collapse"
            }`}
            id="navbarSupportedContent"
          >
            <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
              {/* Maximize Screen Button */}
              <Nav.Item
                className=" iq-full-screen d-none d-xl-block"
                onClick={() => setShow(!show)}
              >
                <Nav.Link id="btnFullscreen" onClick={toggleFullScreen}>
                  <div className="btn btn-primary btn-icon btn-sm rounded-pill">
                    <span className="btn-inner">
                      <svg
                        className={`normal-screen ${
                          show === true ? "" : "d-none"
                        } icon-24`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5528 5.99656L13.8595 10.8961"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M14.8016 5.97618L18.5524 5.99629L18.5176 9.96906"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5.8574 18.896L10.5507 13.9964"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9.60852 18.9164L5.85775 18.8963L5.89258 14.9235"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        className={`full-normal-screen ${
                          show === false ? "" : "d-none"
                        } icon-24`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7542 10.1932L18.1867 5.79319"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M17.2976 10.212L13.7547 10.1934L13.7871 6.62518"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10.4224 13.5726L5.82149 18.1398"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M6.74391 13.5535L10.4209 13.5723L10.3867 17.2755"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </Nav.Link>
              </Nav.Item>

              {/* Profile dropdown */}
              <Dropdown as="li" className="nav-item iq-tour ps-3 ps-lg-0">
                <Dropdown.Toggle
                  as={CustomToggle}
                  variant="py-0 d-flex align-items-center nav-link"
                >
                  <div className="btn btn-primary btn-icon btn-sm rounded-pill">
                    <span className="btn-inner">
                      <svg
                        width="32"
                        className="icon-32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                          fill="currentColor"
                        ></path>
                        <path
                          opacity="0.4"
                          d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu variant="end">
                  <Dropdown.Item href="/profile">
                    Profile
                  </Dropdown.Item>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item href="/auth/sign-out">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </Container>
      </Navbar>
    );
});

HeaderPro.displayName = "HeaderPro";
export default HeaderPro;
