import { useEffect } from "react";

//scss
// import "shepherd.js/dist/css/shepherd.css";
import "flatpickr/dist/flatpickr.css";
// import "choices.js/public/assets/styles/choices.min.css";
import "./assets/scss/ui.scss";
import "./assets/scss/pro.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/customizer.scss";
import "./assets/custom/scss/custom.scss";

// Redux Selector / Action
import { useDispatch } from "react-redux";

// import state selectors
import { setSetting } from "./store/setting/actions";
import { RouterProvider } from "react-router-dom";
import routes from "./router";
import { initialCheckUser } from "./store/auth/actions";
function App() {
  const dispatch = useDispatch<any>();
  dispatch(setSetting());
  dispatch(initialCheckUser());

  useEffect(() => {}, []);
  return (
    <RouterProvider router={routes}>
      <div className="App"></div>;
    </RouterProvider>
  );
}

export default App;
