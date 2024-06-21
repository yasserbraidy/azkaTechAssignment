import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../../store/auth/actions";

const SignOut: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  return <Navigate to="/auth/sign-in" />;
};

export default SignOut;
