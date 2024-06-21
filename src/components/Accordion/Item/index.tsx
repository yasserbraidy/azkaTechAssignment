import React from "react";
import { Accordion, OverlayTrigger, Tooltip } from "react-bootstrap";
import CustomToggle from "../../Dropdown";
import IAccordionItem from "./interface";
import Collapse from "../Collapse";

export default function AccordionItem({
    eventKey,
    active,
    name,
    setActive,
    setActiveMenu,
    tooltip,
    leftIcon,
    title,
    rightIcon,
    location,
    items,
    requiredPermissions,
}: IAccordionItem) {

    return (
        <Accordion.Item
            as="li"
            eventKey={eventKey}
            bsPrefix={`nav-item ${active === name ? "active" : ""}`}
            onClick={() => setActive(name)}
        >
            <CustomToggle
            eventKey={eventKey}
            active={active === eventKey}
            onClick={(activeKey: any) => setActiveMenu(activeKey.state)}
            >
            <OverlayTrigger
                placement="right"
                overlay={<Tooltip>{tooltip}</Tooltip>}
            >
                <i className="icon">{leftIcon}</i>
            </OverlayTrigger>
            <span className="item-name">{title}</span>
            <i className="right-icon">
                {rightIcon || (
                <i className="right-icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-18"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                    />
                    </svg>
                </i>
                )}
            </i>
            </CustomToggle>
            <Collapse
            eventKey={eventKey}
            items={items}
            location={location}
            />
        </Accordion.Item>
    );
}
