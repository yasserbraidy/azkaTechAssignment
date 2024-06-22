import { Card } from "react-bootstrap";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function PostCountCard() {
    const postsCount = 251;

    return (
        <>
            <div className="col-12">
                <Card className="card-block card-stretch card-height">
                <Card.Body>
                    <div className="mb-2 d-flex justify-content-between align-items-center">
                    <span className="text-dark ">No Of Posts</span>
                    <Link
                        className="badge rounded-pill bg-soft-primary"
                        to="announcement/feeds"
                    >
                        View
                    </Link>
                    </div>
                    <h2 className="counter">
                    <CountUp
                        start={0}
                        end={postsCount}
                        duration={10}
                        useEasing={true}
                        separator=","
                    />
                    </h2>
                    <small>Available</small>
                </Card.Body>
                </Card>
            </div>
        </>
    );
}
