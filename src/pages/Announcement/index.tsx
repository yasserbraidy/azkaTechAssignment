import { Row, Col } from "react-bootstrap";

import Activity from "../../components/Activity";
import Explore from "../../components/Explore";
import Message from "../../components/Message";
import Suggested from "../../components/suggested";
import CreatePost from "../../components/CreatePost";
import CreatePostModal from "../../components/CreatePostModal";
import Loader3 from "../../components/Loader";
import ErrorAlert from "../../components/Error";
import useAnnouncementHooks from "./hooks";
import useProfileHooks from "../Users/UserPage/hooks";
import Post from "../../components/Post";

export default function Announcement() {
    const { imageOnSlide, show1, handleClose1, handleShow1} = useAnnouncementHooks();
    const { user, posts, fetchingError, loader } = useProfileHooks(1);


    return (
        <>
                {loader && <Loader3 />}
                {!loader && fetchingError.isError && <ErrorAlert {...fetchingError} />}
                {!loader && !fetchingError.isError && (
                    <Row>
                        {/* Left Column 'Activity' & 'Explore' */}
                        <Col lg="3" xl="3">
                            <Activity />
                    
                            <Explore imageOnSlide={imageOnSlide} />
                        </Col>
                    
                        <Col lg="6" xl="6">
                            {/* Create Post Components */}
                            <CreatePost handleShow={handleShow1} />
                            <CreatePostModal show={show1} handleClose={handleClose1} />
                        
                            {posts.map((post, index) => (
                                <Post
                                    key={index}
                                    userFullName={user?.name}
                                    username={`@${user?.username}`}
                                    post={post}
                                    count={index + 1}
                                />
                            ))}
                        </Col>
                    
                        <Col lg="3" xl="3">
                            {/* Messages */}
                            <Message />
                    
                            {/* Suggested */}
                            <Suggested />
                        </Col>
                    
                    </Row>
                )}
        </>
    );
}