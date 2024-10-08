import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import { Provider } from "react-redux";

import store from "./store/storeIndex";

import App from "./App";

ReactDOM.createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
