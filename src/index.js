import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { AppContextProvider } from "./AppContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <ScrollToTop />
    <React.StrictMode>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </React.StrictMode>
  </Router>,
  rootElement
);
