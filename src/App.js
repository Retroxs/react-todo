import React, { Component } from "react";

import Clock from "./components/clock";
import { Route, Link } from "react-router-dom";
import Reverse from "./components/reverseMessage";
import Counter from "./components/counter";
import Form from "./components/form";
import Ajax from "./components/ajax";
class App extends Component {
  render() {
    const { match} = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={match.path}>Home</Link>
          </li>
          <li>
            <Link to={`${match.path}/reverseMessage`}>ReverseMessage+Mobx</Link>
          </li>
          <li>
            <Link to={`${match.path}/clock`}>Clock</Link>
          </li>
          <li>
            <Link to={`${match.path}/counter`}>Counter+Redux</Link>
          </li>
          <li>
            <Link to={`${match.path}/form`}>Form</Link>
          </li>
          <li>
            <Link to={`${match.path}/ajax`}>Ajax</Link>
          </li>
        </ul>
        <Route path={`${match.path}/reverseMessage`} component={Reverse} />
        <Route path={`${match.path}/clock`} component={Clock} />
        <Route path={`${match.path}/counter`} component={Counter} />
        <Route path={`${match.path}/form`} component={Form} />
        <Route path={`${match.path}/ajax`} component={Ajax} />
      </div>
    );
  }
}

export default App;
