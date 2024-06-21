import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import INavItem from "./interface";

export default function NavItem(props: INavItem) {
  return (
    <Nav.Item as="li">
      <Link
        to={props.link}
        className={`${
          props.location.pathname === props.link ? "active" : ""
        } nav-link`}
      >
        <i className="icon">
          {props.icon || (
            <svg
              className="icon-10"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g>
                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
              </g>
            </svg>
          )}
        </i>
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>{props.tooltip}</Tooltip>}
        >
          <i className="sidenav-mini-icon">{props.overlayTriggerTitle}</i>
        </OverlayTrigger>
        <span className="item-name">{props.title}</span>
      </Link>
    </Nav.Item>
  );
}
