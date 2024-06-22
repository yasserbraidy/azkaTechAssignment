import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protected";
import { Navigate } from "react-router-dom";
import testRoutes from "./test";
import authRoutes from "./auth";
import errorsRoutes from "./errors";
import TestPage from "../pages/Test";
import usersRoutes from "./users";
import announcementRoutes from "./Announecement";

const Home = lazy(() => import("../pages/Home"));

  const protectedRoutes = [

    //Users
    ...usersRoutes,

    //Announcement
    ...announcementRoutes,

    //Test
    ...testRoutes,
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
        {
          element: (
            <ProtectedRoute
              element={<TestPage />}
              // requiredPermissions={["view company"]}
            />
          ),
          path: "test",
        },
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
