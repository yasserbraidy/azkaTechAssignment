import { useEffect, useState } from "react";
import IUser from "../../../../services/entities/User";
import { IFetchingErrorAlert } from "../../../../components/Error/interface";
import { getAllPosts, getPostsByUserId, getUser } from "../../data";
import { processApiResponse } from "../../../../services/api/response";
import { handleFetchingError } from "../../../../utilities/global";
import IPost from "../../../../services/entities/IPost";

export default function useProfileHooks(id: number){
    const [user, setUser] = useState<Partial<IUser>>();
    const [posts, setPosts] = useState<Array<IPost>>([]);

    const [postLoader, setPostLoader] = useState<boolean>(false);
    const [userLoader, setUserLoader] = useState<boolean>(false);
    const [loader, setLoader] = useState<boolean>(true);
    const [fetchingError, setFetchingError] = useState<IFetchingErrorAlert>({ isError: false });
    

    async function fetchUser() {
        try {
            setUserLoader(true);
            setUser({});
            const user = await getUser(id);
            const result = processApiResponse(user, 'fetchOne', 'user');

            if (!result.isError) setUser(result.data as Partial<IUser>);
            
        } catch (error: any) {
            handleFetchingError(error, setFetchingError);
        } finally {
            setUserLoader(false);
        }
    }

    async function fetchPosts() {
        try {
            setPostLoader(true);
            setPosts([]);
            const userList = await getPostsByUserId(id);
            const result = processApiResponse(userList, 'fetchAll', 'posts');

            if (!result.isError) setPosts(result.data as Array<IPost>);
            
        } catch (error: any) {
            handleFetchingError(error, setFetchingError);
        } finally {
            setPostLoader(false);
        }
    }
    useEffect(() => {
        fetchUser();
        fetchPosts();
    }, []);

    useEffect(() => {
        setLoader(true)
        if (!userLoader && !postLoader)
            setLoader(false);

    }, [postLoader, userLoader]);

    return {
        loader, user, fetchingError, posts
    }
}