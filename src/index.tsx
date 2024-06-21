import ReactDOM from "react-dom/client";
//store

import { Provider } from "react-redux";
//reducer
import store from "./store";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
