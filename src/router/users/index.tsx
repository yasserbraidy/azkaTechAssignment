import AddUser from "../../pages/Users/AddUser";
import Users from "../../pages/Users/AllUsers";
import UserPage from "../../pages/Users/UserPage";


const usersRoutes = [
    { path: "users/view-all", element: <Users /> },
    { path: "users/view/:id", element: <UserPage /> },
    { path: "users/add", element: <AddUser /> },
];

export default usersRoutes;
