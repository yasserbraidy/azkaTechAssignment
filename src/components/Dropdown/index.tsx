import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
// import IDropdown from "./interface";
import "./style/index.css";
import { useAccordionButton } from "react-bootstrap";

interface ICustomToggleProps {
  children: React.ReactNode | string;
  eventKey?: any;
  onClick: (event: { state: boolean; eventKey: any }) => void;
  className?: string;
  active?: boolean;
}

function CustomToggle(props: ICustomToggleProps, ref: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { eventKey } = props; // Capture the eventKey value

  const decoratedOnClick = useAccordionButton(props.eventKey, (active: any) => {
    setIsExpanded(!active);
    props.onClick({ state: isExpanded, eventKey });
  });

  return (
    <Link
      to="#"
      aria-expanded={isExpanded ? "true" : "false"}
      className={`nav-link ${props.className}`}
      role="button"
      onClick={decoratedOnClick}
    >
      {props.children}
    </Link>
  );
}

export default forwardRef(CustomToggle);
