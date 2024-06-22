import { Modal } from "react-bootstrap";
import PostHeaderModal from "../PostHeaderModal";
interface ICreatePostModal{
    show: boolean;
    handleClose: () => void,
}
export default function CreatePostModal(props: ICreatePostModal) {
    return (
      <Modal
        className="fade"
        id="post-modal"
        tabIndex="-1"
        show={props.show}
        onHide={props.handleClose}
        fullscreen="sm-down"
        size="lg"
      >
        <Modal.Header closeButton>
          <h5 className="modal-title" id="post-modalLabel">
            Create Post
          </h5>
        </Modal.Header>
        <Modal.Body>
        <PostHeaderModal 
            // show={props.show} onclick={props.handleClose} 
        />
        </Modal.Body>
      </Modal>
    );
}