import { memo } from "react";

// Components
import Logo from "../../logo";

//React-router-dom
import { Link } from "react-router-dom";
import ISideBarLogo from "./interface";

const Sidebarlogo = memo((props: ISideBarLogo) => {
    const minisidebar = () => {
        document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
    };

    return (
      <>
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <Link to="/" className="navbar-brand">
            <div style={{width: '50px !important'}}>
              <Logo />
            </div>
            <h4 className="logo-title">{props.appName}</h4>
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={minisidebar}
          >
            <i className="icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </i>
          </div>
        </div>
      </>
    );
});

Sidebarlogo.displayName = "Sidebarlogo";
export default Sidebarlogo;
