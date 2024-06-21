import { FC } from "react";

export interface ICard {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export interface ICardHeader {
    className?: string;
    children: React.ReactNode;
}
export interface ICardHeaderComponent extends FC<ICardHeader> {
    Title: FC<ICardHeaderTitle>;
    Action: FC<ICardHeaderAction>;
}
export interface ICardBody{
    className?: string;
    children: React.ReactNode;
}
export interface ICardFooter {
    className?: string;
    children: React.ReactNode;
}
export interface ICardHeaderTitle {
    className?: string;
    children: React.ReactNode;
}
export interface ICardHeaderAction {
    className?: string;
    children: React.ReactNode;
}
export default interface CardComponent extends React.FC<ICard> {
    Header: ICardHeaderComponent;
    Body: React.FC<ICardBody>;
    Footer: React.FC<ICardFooter>;
}
