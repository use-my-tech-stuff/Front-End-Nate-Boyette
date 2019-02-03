import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// Imported Components
import App from "./App";

// Imported Dependencies
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"

import rootReducer from "./store/reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);




ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
