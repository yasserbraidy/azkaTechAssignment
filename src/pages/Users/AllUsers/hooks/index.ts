import { useEffect, useState } from "react";
import { IFetchingErrorAlert } from "../../../../components/Error/interface";
import IUser from "../../../../services/entities/User";
import { processApiResponse } from "../../../../services/response";
import { handleFetchingError } from "../../../../utilities/global";
import { getAllUsers } from "../../../../services/apiFunctions";

export default function useAllUsersHooks() {
    const [users, setUsers] = useState<Array<IUser>>([]);

    const [loader, setLoader] = useState<boolean>(false);
    const [fetchingError, setFetchingError] = useState<IFetchingErrorAlert>({ isError: false });
    

    async function fetchUsers() {
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
        fetchUsers();
        // setTimeout(()=> showSweetAlert("Info", "If you want to observe how errors are handled when fetching users, you can simulate this by disconnecting from the internet.", "info"), 3000)
    }, [])


    return {
        loader, users, fetchingError
    }
}