import { useEffect, useState } from "react";
import IUser from "../../../services/entities/User";
import IPost from "../../../services/entities/IPost";
import IComment from "../../../services/entities/Comment";
import { getAllComments, getAllPosts, getAllUsers } from "../../../services/apiFunctions";
import { processApiResponse } from "../../../services/response";
import { handleFetchingError } from "../../../utilities/global";
import { IFetchingErrorAlert } from "../../../components/Error/interface";
import IUserPostCount from "../../../services/entities/UserPostCount";

export default function useDashboardHooks() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);
    const [userPostCounts, setUserPostCounts] = useState<IUserPostCount[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const [fetchingError, setFetchingError] = useState<IFetchingErrorAlert>({ isError: false });
    const [totalComments, setTotalComments] = useState<number>(0);
    const [totalPosts, setTotalPosts] = useState<number>(0);
    const [totalUsers, setTotalUsers] = useState<number>(0);
    const [totalImpressions, setTotalImpressions] = useState<number>(0);
    async function fetchData() {
        try {
            setLoader(true);
            setUsers([]);
            setPosts([]);
            setComments([]);

            const userList = await getAllUsers();
            const userResult = processApiResponse(userList, 'fetchAll', 'users');
            if (!userResult.isError) setUsers(userResult.data as Array<IUser>);

            const postList = await getAllPosts();
            const postResult = processApiResponse(postList, 'fetchAll', 'posts');
            if (!postResult.isError) {
                const postsWithDates = (postResult.data as Array<IPost>).map(post => ({
                    ...post,
                    date: getRandomDateIn2024()
                }));
                setPosts(postsWithDates);
            }
            const commentList = await getAllComments();
            const commentResult = processApiResponse(commentList, 'fetchAll', 'comments');
            if (!commentResult.isError) setComments(commentResult.data as Array<IComment>);
            console.log(posts)
        } catch (error: any) {
            handleFetchingError(error, setFetchingError);
        } finally {
            setLoader(false);
        }
    }

    function getRandomDateIn2024() {
        const start = new Date(2024, 0, 1);
        const end = new Date(2024, 11, 31);
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date.toISOString();
    }
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setUserPostCounts([]);
        setTotalComments(0);
        setTotalPosts(0);
        setTotalUsers(0);
        setTotalImpressions(0);

        if (users.length && posts.length && comments.length) {
            const userPostCountsData: Array<IUserPostCount> = users.map(user => {
                const userPosts = posts.filter(post => post.userId === user.id);
                const userComments = comments.filter(comment => userPosts.some(post => post.id === comment.postId));
                return {
                    userId: user.id,
                    userName: user.name,
                    username:user.username,
                    postCount: userPosts.length,
                    commentCount: userComments.length,
                };
            });
            setUserPostCounts(userPostCountsData);
            setTotalComments(comments.length);
            setTotalPosts(posts.length);
            setTotalUsers(users.length);
            setTotalImpressions(comments.length + posts.length);
        }
        
    }, [users, posts, comments]);

    return {
        userPostCounts, loader, fetchingError, totalComments, totalPosts, totalUsers, totalImpressions, posts, fetchData
    }
}