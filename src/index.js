import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "element-theme-default";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store";
import App from "./App";


render(
  <Router>
    <Provider store={store}>
      <Route path="/app" component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
