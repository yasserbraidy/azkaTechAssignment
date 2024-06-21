import { memo, Suspense } from "react";
import { useLocation } from "react-router-dom";
// import { ShepherdTour } from "react-shepherd";
import { useSelector } from "react-redux";
import * as SettingSelector from "../../store/setting/selectors";
// import newSteps, { tourOptions } from "./Default/Steps";
// import Tour from "./Default/Tour";
import { Outlet } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HeaderPro from "../../components/Partials/headerstyle";
import SubHeader from "../../components/Partials/dashboard/headerstyle/SubHeader";
import Sidebar from "../../components/Partials/dashboard/sidebarstyle";
import Footer from "../../components/Partials/dashboard/footerstyle";

const Layout = memo((props) => {
  const location = useLocation();
  const pageLayout = useSelector(SettingSelector.page_layout);
  const appName = useSelector(SettingSelector.app_name);

  let subHeader;
  let common = "";

  switch (location.pathname) {
    case "/special-pages/calender":
    case "/blank-page":
      subHeader = <SubHeader />;
      common = "iq-banner default";
      break;
    default:
      break;
  }

  return (
    <>
      <Sidebar name={appName} />

      <main className="main-content">
        <div className={`${common} position-relative `}>
          <HeaderPro appName={appName} />
          {subHeader}
        </div>

        <div className={` ${pageLayout} content-inner pb-0`}>
          <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={300}>
              <Suspense fallback={<div className="react-load"></div>}>
                <Outlet></Outlet>
              </Suspense>
            </CSSTransition>
          </TransitionGroup>
        </div>

        <Footer />
      </main>

    </>
  );
});

Layout.displayName = "Layout";
export default Layout;
