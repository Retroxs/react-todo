import React from "react";
import { render } from "react-dom";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "element-theme-default";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "mobx-react"
// import store from "./store";
import CommonStore from "./Mobx";
import App from "./App";


const stores = {
  CommonStore
}

render(
  <Router>
    <Provider {...stores}>
      <Route path="/app" component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
