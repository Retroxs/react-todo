import React, { Component } from "react";
import { Button } from "element-react";

class reverseMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World"
    };
  }
  reverse() {
    this.setState({
      message: this.state.message
        .split("")
        .reverse()
        .join("")
    });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <Button onClick={() => this.reverse()}>reverse</Button>
      </div>
    );
  }
}

export default reverseMessage;
