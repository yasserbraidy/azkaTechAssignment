import { useEffect, useState } from "react";
import IUser from "../../../../services/entities/User";
import { IFetchingErrorAlert } from "../../../../components/Error/interface";
import { getUser } from "../../data";
import { processApiResponse } from "../../../../services/api/response";
import { handleFetchingError } from "../../../../utilities/global";
import IPost from "../../../../services/entities/IPost";

export default function useProfileHooks(id: number){
    const [user, setUser] = useState<Partial<IUser>>();
    const [posts, setPosts] = useState<Array<IPost>>([]);

    const [loader, setLoader] = useState<boolean>(false);
    const [fetchingError, setFetchingError] = useState<IFetchingErrorAlert>({ isError: false });
    

    async function fetchUser() {
        try {
            setLoader(true);
            setUser({});
            const user = await getUser(id);
            const result = processApiResponse(user, 'fetchOne', 'user');

            if (!result.isError) setUser(result.data as Partial<IUser>);
            
        } catch (error: any) {
            handleFetchingError(error, setFetchingError);
        } finally {
            setLoader(false);
        }
    }

    async function fetchPosts() {
        try {
            setLoader(true);
            setPosts([]);
            const userList = await getAllPosts();
            const result = processApiResponse(userList, 'fetchAll', 'users');

            if (!result.isError) setPosts(result.data as Array<IPost>);
            
        } catch (error: any) {
            handleFetchingError(error, setFetchingError);
        } finally {
            setLoader(false);
        }
    }
    useEffect(() => {
        fetchUser();
        fetchPosts();
    }, []);


    return {
        loader, user, fetchingError, posts
    }
}