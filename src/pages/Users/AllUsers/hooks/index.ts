import { useEffect, useState } from "react";
import { IFetchingErrorAlert } from "../../../../components/Error/interface";
import IUser from "../../../../services/entities/User";
import { getAllUsers } from "../../data";
import { processApiResponse } from "../../../../services/api/response";
import { handleFetchingError } from "../../../../utilities/global";

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
    })

    return {
        loader, users, fetchingError
    }
}