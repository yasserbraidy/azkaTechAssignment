import { ReactNode } from "react";

export default interface IDrowpdown{
    children: ReactNode;
    className: string;
    onClick?: () => void;
    
}