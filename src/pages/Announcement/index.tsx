import { useState } from "react";

import img2 from "../../assets/modules/social/images/avatar/01.png";
import img5 from "../../assets/modules/social/images/avatar/22.png";
import img6 from "../../assets/modules/social/images/avatar/15.png";
import img11 from "../../assets/modules/social/images/newsfeed/03.png";
import img12 from "../../assets/modules/social/images/newsfeed/11.png";
import img13 from "../../assets/modules/social/images/newsfeed/04.png";
import img14 from "../../assets/modules/social/images/newsfeed/09.png";
import img15 from "../../assets/modules/social/images/newsfeed/10.png";
import img20 from "../../assets/modules/social/images/newsfeed/02.png";
import img27 from "../../assets/modules/social/images/avatar/11.png";
import img28 from "../../assets/modules/social/images/avatar/24.png";
import img30 from "../../assets/modules/social/images/avatar/14.png";
import img35 from "../../assets/modules/social/images/app/01.png";
import img36 from "../../assets/modules/social/images/avatar/16.png";
import img37 from "../../assets/modules/social/images/avatar/17.png";
import img38 from "../../assets/modules/social/images/avatar/18.png";
import img39 from "../../assets/modules/social/images/avatar/19.png";
import img40 from "../../assets/modules/social/images/avatar/20.png";

import { Row, Col, Card, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import Activity from "../../components/Activity";
import Explore from "../../components/Explore";
import Message from "../../components/Message";
import Suggested from "../../components/suggested";

export default function Announcement() {
    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1,
    });
    function imageOnSlide(number: number) {
        setImageController({
            toggler: !imageController.toggler,
            slide: number,
        });
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // stories
    const stories = [
      {
        id: "yourstory",
        photo: img2,
        name: "Your Story",
        link: "https://ramon.codes",
        preview: [
          {
            storyid: "yourstory-1",
            type: "photo",
            length: 3,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },
          {
            storyid: "yourstory-12",
            type: "video",
            length: 0,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },
        ],
      },
      {
        id: "ali",
        photo: img30,
        name: "Ali",
        link: "",
        preview: [
          {
            storyid: "ali-1",
            type: "video",
            length: 0,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },
          {
            storyid: "ali-2",
            type: "photo",
            length: 3,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },

          {
            storyid: "ali-3",
            type: "photo",
            length: 3,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
            link: "https://ramon.codes",
            linkText: "Visit my Portfolio",
            seen: "false",
          },
        ],
      },
      {
        id: "ammy",
        photo: img6,
        name: "Ammy",
        link: "",
        preview: [
          {
            storyid: "ammy-1",
            type: "photo",
            length: 5,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },
          {
            storyid: "ammy-2",
            type: "photo",
            length: 3,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
            link: "http://ladygaga.com",
            linkText: "false",
            seen: "false",
          },
        ],
      },
      {
        id: "roger-1",
        photo: img36,
        name: "Roger",
        link: "",
        preview: [
          {
            storyid: "roger-1",
            type: "photo",
            length: 5,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },
        ],
      },
      {
        id: "justin",
        photo: img37,
        name: "Justin",
        link: "",
        preview: [
          {
            storyid: "justin-1",
            type: "photo",
            length: 10,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },
        ],
      },
      {
        id: "roy",
        photo: img38,
        name: "Roy",
        link: "",
        preview: [
          {
            storyid: "roy-1",
            type: "photo",
            length: 10,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },
        ],
      },
      {
        id: "johan",
        photo: img39,
        name: "Johan",
        link: "",
        preview: [
          {
            storyid: "johan-1",
            type: "photo",
            length: 10,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },
        ],
      },
      {
        id: "sado",
        photo: img40,
        name: "Sado",
        link: "",
        preview: [
          {
            storyid: "sado-1",
            type: "photo",
            length: 10,
            src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
            storypreview:
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
            link: "",
            linkText: "false",
            seen: "false",
          },
        ],
      },
    ];

    return (
      <>
        <FsLightbox
          toggler={imageController.toggler}
          sources={[img11, img12, img13, img14, img15, img20]}
          slide={imageController.slide}
        />

        <Row>
            {/* Left Column 'Activity' & 'Explore' */}
            <Col lg="3" xl="3">
                <Activity />
                
                <Explore imageOnSlide={imageOnSlide} />
            </Col>
                
            <Col lg="6" xl="6">
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
                        <Form className="w-100" onClick={handleShow1}>
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
                        <svg
                        width="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M21.9999 14.7024V16.0859C21.9999 16.3155 21.9899 16.5471 21.9699 16.7767C21.6893 19.9357 19.4949 22 16.3286 22H7.67126C6.06806 22 4.71535 21.4797 3.74341 20.5363C3.36265 20.1864 3.042 19.7753 2.7915 19.3041C3.12217 18.9021 3.49291 18.462 3.85363 18.0208C4.46485 17.289 5.05603 16.5661 5.42677 16.0959C5.97788 15.4142 7.43078 13.6196 9.44481 14.4617C9.85563 14.6322 10.2164 14.8728 10.547 15.0833C11.3586 15.6247 11.6993 15.7851 12.2705 15.4743C12.9017 15.1335 13.3125 14.4617 13.7434 13.76C13.9739 13.388 14.2043 13.0281 14.4548 12.6972C15.547 11.2736 17.2304 10.8926 18.6332 11.7348C19.3346 12.1559 19.9358 12.6872 20.4969 13.2276C20.6172 13.3479 20.7374 13.4592 20.8476 13.5695C20.9979 13.7198 21.4989 14.2211 21.9999 14.7024Z"
                            fill="currentColor"
                        ></path>
                        <path
                            opacity="0.4"
                            d="M16.3387 2H7.67134C4.27455 2 2 4.37607 2 7.91411V16.086C2 17.3181 2.28056 18.4119 2.79158 19.3042C3.12224 18.9022 3.49299 18.4621 3.85371 18.0199C4.46493 17.2891 5.05611 16.5662 5.42685 16.096C5.97796 15.4143 7.43086 13.6197 9.44489 14.4618C9.85571 14.6323 10.2164 14.8729 10.5471 15.0834C11.3587 15.6248 11.6994 15.7852 12.2705 15.4734C12.9018 15.1336 13.3126 14.4618 13.7435 13.759C13.9739 13.3881 14.2044 13.0282 14.4549 12.6973C15.5471 11.2737 17.2305 10.8927 18.6333 11.7349C19.3347 12.1559 19.9359 12.6873 20.497 13.2277C20.6172 13.348 20.7375 13.4593 20.8477 13.5696C20.998 13.7189 21.499 14.2202 22 14.7025V7.91411C22 4.37607 19.7255 2 16.3387 2Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M11.4543 8.79668C11.4543 10.2053 10.2809 11.3783 8.87313 11.3783C7.46632 11.3783 6.29297 10.2053 6.29297 8.79668C6.29297 7.38909 7.46632 6.21509 8.87313 6.21509C10.2809 6.21509 11.4543 7.38909 11.4543 8.79668Z"
                            fill="currentColor"
                        ></path>
                        </svg>
                    </div>
                    <div className="btn btn-sm btn-soft-light mx-3 d-flex align-items-center gap-2">
                        <span>Tag Friend</span>
                        <svg
                        width="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                            fill="currentColor"
                        ></path>
                        <path
                            opacity="0.4"
                            d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                            fill="currentColor"
                        ></path>
                        </svg>
                    </div>
                    <div className="btn btn-sm btn-soft-light">More ...</div>
                    </div>
                </Card.Body>
                </Card>
                <Modal
                className="fade"
                id="post-modal"
                tabIndex="-1"
                show={show1}
                onHide={handleClose1}
                fullscreen="sm-down"
                size="lg"
                >
                <Modal.Header closeButton>
                    <h5 className="modal-title" id="post-modalLabel">
                    Create Post
                    </h5>
                </Modal.Header>
                <Modal.Body>
                    <Postheadermodal show={show1} onclick={handleClose1} />
                </Modal.Body>
                </Modal>
                <Card>
                <Card.Header className=" pb-0">
                    <div className="header-title">
                    <div className="d-flex justify-content-center flex-wrap gap-3">
                        <div className="media-support-user-img">
                        <Image
                            className="img-fluid rounded-circle p-1 border border-2 border-primary border-dotted avatar-50"
                            src={img5}
                            alt=""
                        />
                        </div>
                        <div className="media-support-info">
                        <div className="d-flex align-items-center mb-2 gap-2">
                            <h6 className="mb-0">Joshua Martin</h6>
                            <small className="text-dark">Added New Post</small>
                        </div>
                        <p className="mb-0 text-muted">3 hrs Ago</p>
                        </div>
                    </div>
                    </div>
                    <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} className="">
                        <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                            fill="#8A92A6"
                        />
                        </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className=" d-flex align-items-center">
                        <svg
                            width="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            opacity="0.4"
                            d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z"
                            fill="currentColor"
                            ></path>
                            <path
                            d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z"
                            fill="currentColor"
                            ></path>
                            <path
                            opacity="0.4"
                            d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z"
                            fill="currentColor"
                            ></path>
                        </svg>
                        <span className="ms-2">Edit Post</span>
                        </Dropdown.Item>
                        <Dropdown.Item className=" d-flex align-items-center">
                        <svg
                            width="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8885V17.8254C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8254V12.8885C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z"
                            fill="currentColor"
                            ></path>
                            <path
                            opacity="0.4"
                            d="M17.523 7.39595V8.86667C17.1673 8.7673 16.7913 8.71761 16.4052 8.71761H15.7447V7.39595C15.7447 5.37868 14.0681 3.73903 12.0053 3.73903C9.94257 3.73903 8.26594 5.36874 8.25578 7.37608V8.71761H7.60545C7.20916 8.71761 6.83319 8.7673 6.47754 8.87661V7.39595C6.4877 4.41476 8.95692 2 11.985 2C15.0537 2 17.523 4.41476 17.523 7.39595Z"
                            fill="currentColor"
                            ></path>
                        </svg>
                        <span className="ms-2">Security</span>
                        </Dropdown.Item>
                        <Dropdown.Item className=" d-flex align-items-center">
                        <svg
                            width="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            opacity="0.4"
                            d="M22 12C22 17.524 17.523 22 12 22C6.477 22 2 17.524 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12Z"
                            fill="currentColor"
                            ></path>
                            <path
                            d="M15.5739 15.8145C15.4429 15.8145 15.3109 15.7805 15.1899 15.7095L11.2639 13.3675C11.0379 13.2315 10.8989 12.9865 10.8989 12.7225V7.67554C10.8989 7.26154 11.2349 6.92554 11.6489 6.92554C12.0629 6.92554 12.3989 7.26154 12.3989 7.67554V12.2965L15.9589 14.4195C16.3139 14.6325 16.4309 15.0925 16.2189 15.4485C16.0779 15.6835 15.8289 15.8145 15.5739 15.8145Z"
                            fill="currentColor"
                            ></path>
                        </svg>
                        <span className="ms-2">Timer</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <Card.Body>
                    <div className="user-post">
                    <Link to="#">
                        <Image
                        src={img35}
                        alt="post-image"
                        className="img-fluid rounded"
                        onClick={handleShow}
                        />
                    </Link>
                    </div>
                    <div className="comment-area pt-3">
                    <Likeshare noLikes="120" noComments="02" />
                    <hr />
                    <ul className="list-inline mt-4">
                        <li className="mb-4">
                        <Friendcomment
                            userName="Larry Robbins"
                            userComment="So True!!"
                            commentDuration="2 Min Ago"
                            userImage={img27}
                        />
                        </li>
                    </ul>
                    <Commentfromcontrol placeholder="Enter Your Comment Here..." />
                    </div>
                </Card.Body>
                </Card>
                <Card>
                <Card.Header className="d-flex align-items-center justify-content-between pb-0">
                    <div className="header-title">
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="media-support-user-img me-3">
                        <Image
                            className="img-fluid rounded-circle p-1 border border-2 border-primary border-dotted avatar-50"
                            src={img28}
                            alt=""
                        />
                        </div>
                        <div className="media-support-info">
                        <div className="d-flex align-items-center mb-2 gap-2">
                            <h6 className="mb-0 ">Ella Martina</h6>
                            <small className="text-dark">Updated Her Status</small>
                        </div>
                        <p className="mb-0 text-muted">5 hrs Ago</p>
                        </div>
                    </div>
                    </div>
                    <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} className="">
                        <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                            fill="#8A92A6"
                        />
                        </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className=" d-flex align-items-center">
                        <svg
                            width="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            opacity="0.4"
                            d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z"
                            fill="currentColor"
                            ></path>
                            <path
                            d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z"
                            fill="currentColor"
                            ></path>
                            <path
                            opacity="0.4"
                            d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z"
                            fill="currentColor"
                            ></path>
                        </svg>
                        <span className="ms-2">Edit Post</span>
                        </Dropdown.Item>
                        <Dropdown.Item className=" d-flex align-items-center">
                        <svg
                            width="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8885V17.8254C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8254V12.8885C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z"
                            fill="currentColor"
                            ></path>
                            <path
                            opacity="0.4"
                            d="M17.523 7.39595V8.86667C17.1673 8.7673 16.7913 8.71761 16.4052 8.71761H15.7447V7.39595C15.7447 5.37868 14.0681 3.73903 12.0053 3.73903C9.94257 3.73903 8.26594 5.36874 8.25578 7.37608V8.71761H7.60545C7.20916 8.71761 6.83319 8.7673 6.47754 8.87661V7.39595C6.4877 4.41476 8.95692 2 11.985 2C15.0537 2 17.523 4.41476 17.523 7.39595Z"
                            fill="currentColor"
                            ></path>
                        </svg>
                        <span className="ms-2">Security</span>
                        </Dropdown.Item>
                        <Dropdown.Item className=" d-flex align-items-center">
                        <svg
                            width="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            opacity="0.4"
                            d="M22 12C22 17.524 17.523 22 12 22C6.477 22 2 17.524 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12Z"
                            fill="currentColor"
                            ></path>
                            <path
                            d="M15.5739 15.8145C15.4429 15.8145 15.3109 15.7805 15.1899 15.7095L11.2639 13.3675C11.0379 13.2315 10.8989 12.9865 10.8989 12.7225V7.67554C10.8989 7.26154 11.2349 6.92554 11.6489 6.92554C12.0629 6.92554 12.3989 7.26154 12.3989 7.67554V12.2965L15.9589 14.4195C16.3139 14.6325 16.4309 15.0925 16.2189 15.4485C16.0779 15.6835 15.8289 15.8145 15.5739 15.8145Z"
                            fill="currentColor"
                            ></path>
                        </svg>
                        <span className="ms-2">Timer</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <Card.Body>
                    <p>
                    “Essentials to happiness in this life are something to do,
                    something to love, and something to hope for.”
                    </p>
                    <div className="comment-area pt-3">
                    <Likeshare noLikes="15" noComments="20" />
                    <hr />
                    <ul className="list-inline mt-4">
                        <Friendcomment
                        userName="Larry Robbins"
                        userComment="So True!!"
                        commentDuration="5 Min Ago"
                        userImage={img27}
                        />
                    </ul>
                    <Commentfromcontrol placeholder="Enter Your Comment Here..." />
                    </div>
                </Card.Body>
                </Card>
                <Imagemodal show={show} onclick={handleClose} />
            </Col>
                
                <Col lg="3" xl="3">
                    {/* Messages */}
                    <Message />
                    
                    {/* Suggested */}
                    <Suggested />
            </Col>
        </Row>
      </>
    );
}