import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";



ReactDOM.render(
  
    <App />,
  
  document.getElementById("root")
);
