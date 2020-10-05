import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
// import { AppContextProvider } from "./AppContext";
import { Provider } from 'react-redux'
import store from './store'

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  rootElement
);
