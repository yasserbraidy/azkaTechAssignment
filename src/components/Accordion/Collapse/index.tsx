import { Accordion } from "react-bootstrap";
import ICollapse from "./interface";
import NavItem from "../Nav";
import INavItem from "../Nav/interface";

export default function Collapse(props: ICollapse) {
  return (
    <Accordion.Collapse eventKey={props.eventKey}>
      <ul className="sub-nav">
        {props.items.map((item: INavItem, index: number) => (
          <NavItem
            key={index}
            title={item.title}
            link={item.link}
            location={props.location}
            icon={item.icon}
            overlayTriggerTitle={item.overlayTriggerTitle}
            tooltip={item.tooltip}
            requiredPermissions={item.requiredPermissions}
          />
        ))}
      </ul>
    </Accordion.Collapse>
  );
}
