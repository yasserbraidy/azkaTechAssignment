import Error403 from "../../pages/Errors/Error403";
import Error404 from "../../pages/Errors/Error404";
import Error500 from "../../pages/Errors/Error500";

const errorsRoutes = [
    { path: "error/404", element: <Error404 /> },
    { path: "error/403", element: <Error403 /> },
    { path: "error/500", element: <Error500 /> },
];
export default errorsRoutes;
