import React, { useEffect, useState } from "react";
import { Nav, Collapse } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../sidebarstyle/VerticalNav/Data";
import { icons } from "../../../Icons";
import "./style/index.css";

const MobileNavBar = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();

  const handleItemClick = (item: string) => {
    if (item !== "dashboard") {
      setExpandedItem(expandedItem === item ? null : item);
    }
  };

  useEffect(() => {
    const pathname = location.pathname;
    const activeItem = pathname === "/" ? "dashboard" : null;
    setExpandedItem(activeItem);
  }, [location.pathname]);


  return (
    <div className="offcanvas-body">
      <ul className="iq-nav-menu list-unstyled">
        {/* Static Dashboard Item */}
        <Nav.Item
          as="li"
          className={`${expandedItem === "dashboard" ? "active" : ""}`}
        >
          <Nav.Link
            className="menu-arrow justify-content-start"
            onClick={() => handleItemClick("dashboard")}
            aria-controls="dashboard"
            aria-expanded={expandedItem === "dashboard"}
            role="button"
          >
            <Link
              className={`home-link ${
                location.pathname === "/" ? "active" : ""
              } nav-link `}
              to="/"
            >
              {icons.dashboard}
              <span className="ms-2 m-2 p-1">{"Home"}</span>
            </Link>
          </Nav.Link>
        </Nav.Item>

        {/* Dynamic Menu Items from menuData */}
        {Object.entries(menuData).map(([key, value]) => (
          <Nav.Item
            key={key}
            as="li"
            className={expandedItem === key ? "active" : ""}
          >
              <>
                <Nav.Link
                  className="menu-arrow justify-content-start"
                  onClick={() => handleItemClick(key)}
                  aria-controls={value.name}
                  aria-expanded={expandedItem === key}
                  role="button"
                >
                  {value.leftIcon}
                  <span className="ms-2 m-2">{value.title}</span>
                </Nav.Link>
                <Collapse in={expandedItem === key}>
                  <ul
                    className="iq-header-sub-menu list-unstyled"
                    id={value.name}
                  >
                    {value.items
                      .map((item) => (
                        <Nav.Item key={item.link} as="li">
                          <Link
                            className={`${
                              location.pathname === `/${item.link}`
                                ? "active"
                                : ""
                            } nav-link `}
                            to={`/${item.link}`}
                          >
                            {item.title}
                          </Link>
                        </Nav.Item>
                      ))}
                  </ul>
                </Collapse>
              </>
          </Nav.Item>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavBar;
