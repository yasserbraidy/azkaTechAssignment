//React-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

import img1 from "../../assets/modules/social/images/avatar/01.png";
import { icons } from "../Icons";
import { showSweetAlert } from "../../utilities/global";

interface IPostHeaderModal{
    onClick: () => void
}
export default function PostHeaderModal(props: IPostHeaderModal) {
    function onClck() {
        showSweetAlert(
            "Notice",
            "There is no actual API to perform this function, but this page has been created for the purpose of UI demonstration, data validation, and handling user addition on the frontend.",
            "success"
        );
        props.onClick();
    }
    return (
        <>
        <div className="d-flex align-items-center border-bottom pb-3 mb-4">
            <div className="user-img">
            <Image
                src={img1}
                alt="userimg"
                className="avatar-60 rounded-circle img-fluid"
                loading="lazy"
            />
            </div>
            <Form className="w-100" action="#">
            <input
                type="text"
                className="form-control shadow-none border-0"
                placeholder="Write something here..."
            />
            </Form>
        </div>
            <Row as="ul" className="flex-wrap align-items-center list-inline m-0 p-0">
                <Col md="6" as="li" className="mb-3">
                    <div className="bg-body rounded p-2 pointer">
                        {icons.photo}
                        Photo/Video
                    </div>
                </Col>
                
                <Col md="6" as="li" className="mb-3">
                    <div className="bg-body rounded p-2 pointer">
                        {icons.tag}
                        Tag Friend
                    </div>
                </Col>
                
                <Col md="6" as="li" className="mb-3">
                    <div className="bg-body rounded p-2 pointer">
                        {icons.feelings}
                        Feeling/Activity
                    </div>
                </Col>
                
                <Col md="6" as="li" className="mb-3">
                    <div className="bg-body rounded p-2 pointer">
                        {icons.checkIn}
                        Check in
                    </div>
                </Col>
                
                <Col md="6" as="li" className="mb-3">
                    <div className="bg-body rounded p-2 pointer">
                        {icons.liveVd}
                        Live Video
                    </div>
                </Col>
                
                <Col md="6" as="li" className="mb-3">
                    <div className="bg-body rounded p-2 pointer">
                        {icons.gif}
                        GIF
                    </div>
                </Col>
                
                <Col md="6" as="li" className="mb-3">
                    <div className="bg-body rounded p-2 pointer">
                        {icons.party}
                        Watch Party
                    </div>
                </Col>
                
                <Col md="6" as="li" className="mb-3">
                    <div className="bg-body rounded p-2 pointer">
                        {icons.play}
                        Play with Friends
                    </div>
                </Col>
                
            </Row>
            <Button type="submit" variant="primary d-block w-100 mt-3" onClick={onClck}>
                Post
            </Button>
        </>
    );
};
