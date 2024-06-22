import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useProtected from "./functions";
import Layout from "../../layouts";
import ProtectedRouteProps from "./interface";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/actions";

export default function ProtectedRoute(props: ProtectedRouteProps) {
  const {
    element,
    // requiredPermissions = [],
    isParent = false,
  } = props;

  const { authenticated } = useProtected();
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthenticated = authenticated();

    if (!isAuthenticated) {
      dispatch(logout());
    }
  }, [authenticated]);

  try {
    if (!authenticated()) {
      return <Navigate to="/auth/sign-in" replace />;
    }

    return isParent ? <Layout>{element}</Layout> : <>{element}</>;
  } catch (error) {
    console.error("Error in ProtectedRoute:", error);
    return <Navigate to="/error/404" replace />;
  }
}
