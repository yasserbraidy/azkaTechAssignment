import { memo } from "react";
import CardComponent, { ICard, ICardBody, ICardFooter, ICardHeader, ICardHeaderAction, ICardHeaderTitle, ICardHeaderComponent } from './interface';

function _CardComponent(props: ICard): JSX.Element {
    return (
        <div className={`card ${props.className ? props.className : ""}`} style={props.style}>
            {props.children}
        </div>
    );
}

function CardHeader(props: ICardHeader) {
    return (
        <div className={`card-header d-flex justify-content-between ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    );
}

function CardHeaderTitle(props: ICardHeaderTitle) {
    return (
        <div className={`header-title ${props.className ? props.className : ""}`}>
        {props.children}
        </div>
    );
}

function CardHeaderAction(props: ICardHeaderAction) {
    return (
        <div className={`header-action ${props.className ? props.className : ""}`}>
        {props.children}
        </div>
    );
}

function CardBody(props: ICardBody) {
    return (
        <div className={`card-body ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    );
}

function CardFooter(props: ICardFooter) {
    return (
        <div className={`card-footer ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    );
}

const Card = memo(_CardComponent) as unknown as CardComponent;
Card.Header = CardHeader as ICardHeaderComponent;
Card.Header.Title = memo(CardHeaderTitle);
Card.Header.Action = memo(CardHeaderAction);
Card.Body = memo(CardBody);
Card.Footer = memo(CardFooter);

Card.displayName = "Card";

// Card = memo(Card);

export default Card;