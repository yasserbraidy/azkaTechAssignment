import RecoverPassword from "../../pages/auth/RecoverPassword";
import ResetPassword from "../../pages/auth/ResetPassword";
import SignIn from "../../pages/auth/SignIn";
import SignOut from "../../pages/auth/SignOut";


const authRoutes = [
  { path: "auth/sign-in", element: <SignIn /> },
  { path: "auth/sign-out", element: <SignOut /> },
  { path: "auth/recover-password", element: <RecoverPassword /> },
  { path: "auth/reset-password", element: <ResetPassword /> },
];

export default authRoutes;
