import React, { Component } from "react";
import Item1 from "./components/reverseMessage";

class App extends Component {
  render() {
    return (
      <div>
      <p>1.reverseMessage Tool</p>
      <Item1 message="1222"></Item1>
      </div>
    );
  }
}

export default App;
