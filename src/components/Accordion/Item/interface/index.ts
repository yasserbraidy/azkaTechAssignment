import { SetStateAction } from "react";
import INavItem from "../../Nav/interface";

export default interface IAccordionItem{
    name: string;
    title: string;
    eventKey: string;
    tooltip: string;

    items: Array<INavItem>;

    rightIcon?: React.ReactElement;
    leftIcon: React.ReactElement;

    active: string;
    setActive: React.Dispatch<SetStateAction<string>>;

    setActiveMenu: React.Dispatch<SetStateAction<boolean>>;
    
    location: any;
    
    requiredPermissions: Array<string>;

}

export interface AccordionDTO extends Omit<IAccordionItem, 'active' | 'setActive' | 'setActiveMenu' | 'location'> {}