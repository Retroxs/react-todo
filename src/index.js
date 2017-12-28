import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import counter from "./reducer";
import { increaseAction,decreaseAction } from "./action";
// import todoApp from
import "./index.css";
import app from "./App";
import "element-theme-default";

import registerServiceWorker from "./registerServiceWorker";

function count(state) {
  return {
    value: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => dispatch(increaseAction()),
    onDecrease: () => dispatch(decreaseAction())
  };
}
let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const App = connect(count, mapDispatchToProps)(app);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
