import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protected";
import { Navigate } from "react-router-dom";
import authRoutes from "./auth";
import errorsRoutes from "./errors";
import usersRoutes from "./users";
import announcementRoutes from "./Announecement";

const Home = lazy(() => import("../pages/Home"));

  const protectedRoutes = [

    //Users
    ...usersRoutes,

    //Announcement
    ...announcementRoutes,
  ];

const routesConfig = createBrowserRouter(
  [
    {
      path: "/",
      element: <ProtectedRoute element={<Home />} isParent />,
      errorElement: <Navigate to="/error/404" replace />,
      children: [
        { index: true, element: <Home /> },
        ...protectedRoutes.map((route) => {
          return {
            ...route,
            element: <ProtectedRoute element={route.element} />,
          };
        }),
      ],
    },

    ...authRoutes,
    ...errorsRoutes.map((route) => {
      return {
        ...route,
        element: <ProtectedRoute element={route.element} />,
      };
    }),
  ],
  { basename: process.env.PUBLIC_URL }
);
export default routesConfig;
