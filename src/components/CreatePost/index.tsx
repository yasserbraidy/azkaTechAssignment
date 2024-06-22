import { Form } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";

import img5 from "../../assets/modules/social/images/avatar/22.png";
import { icons } from "../Icons";


interface ICreatePost {
    handleShow: () => void;
}
export default function CreatePost(props: ICreatePost) {
    return (
        <>
            <Card>
            <Card.Header>
                <h4 className="mb-0">Create A Post</h4>
            </Card.Header>
            <Card.Body>
                <div className="border-bottom">
                <div className="d-flex align-items-center mb-3 gap-3">
                    <Image
                    className="img-fluid rounded-circle avatar-60 p-1 border border-2 border-primary border-dotted"
                    src={img5}
                    alt=""
                    />
                    <Form className="w-100" onClick={props.handleShow}>
                    <Form.Control
                        type="text"
                        className=" border-0 shadow-none"
                        placeholder="Write Something Here..."
                    />
                    </Form>
                </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                <div className="btn btn-sm btn-soft-light d-flex align-items-center gap-2">
                    <span>Photo</span>
                    {icons.photo}
                </div>
                
                <div className="btn btn-sm btn-soft-light mx-3 d-flex align-items-center gap-2">
                    <span>Tag Friend</span>
                    {icons.tag}
                </div>
                
                <div className="btn btn-sm btn-soft-light">More ...</div>
                </div>
            </Card.Body>
            </Card>
        </>
    );
}