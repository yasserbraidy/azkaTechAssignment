import { useEffect, useState } from "react";
import IUser from "../../../../services/entities/User";
import { IFetchingErrorAlert } from "../../../../components/Error/interface";
import { getUser } from "../../data";
import { processApiResponse } from "../../../../services/api/response";
import { handleFetchingError } from "../../../../utilities/global";

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
            setUsers([]);
            const userList = await getAllUsers();
            const result = processApiResponse(userList, 'fetchAll', 'users');

            if (!result.isError) setUsers(result.data as Array<IUser>);
            
        } catch (error: any) {
            handleFetchingError(error, setFetchingError);
        } finally {
            setLoader(false);
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])


    return {
        loader, user, fetchingError
    }
}