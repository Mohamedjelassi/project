import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/store";
import Navbar from "./components/Navbar";
import App from "./App";
import Fouter from "./components/Fouter";

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <App />
    <Fouter />
  </Provider>,
  document.getElementById("root")
);
