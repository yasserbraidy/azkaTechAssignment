import SignIn from "../../pages/auth/SignIn";
import SignOut from "../../pages/auth/SignOut";


const authRoutes = [
  { path: "auth/sign-in", element: <SignIn /> },
  { path: "auth/sign-out", element: <SignOut /> },
];

export default authRoutes;
