import { memo } from "react";


import { Outlet } from "react-router-dom";

const Auth = memo((props) => {
    return (
        <>
        <div className="wrapper">
            <Outlet />
        </div>
        </>
    );
});

Auth.displayName = "Auth";
export default Auth;
