import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/body-main-bottom.css";
import "./css/body-main-left.css";
import "./css/body-main-right.css";
import "./css/footer.css";
import "./css/navbar-head.css";
import "./css//navbar-main.css";
import "./css/result-search.css";
import "./css/style.css";
import "./css/review.css";
import store from "./redux/index";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
