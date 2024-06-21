import { memo } from "react";
import Card from './../Card';
import IAnalyticsCard from "./interface";

const AnalyticsCard = memo((props: IAnalyticsCard) => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="text-center">
            <h3 className="text-primary">{props.count}</h3>
            <p className="mb-0">{props.content}</p>
            <small>
              <span className={props.textColor}>{props.number} </span>
              <span>{props.content1}</span>
            </small>
          </div>
        </Card.Body>
      </Card>
    </>
  );
});

AnalyticsCard.displayName = "AnalyticsCard";
export default AnalyticsCard;
