import { createStore, combineReducers } from "redux";
import counter from "./reducer";
import { routerReducer } from "react-router-redux";


let store = createStore(
  combineReducers({
    counter,
    routing: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store
