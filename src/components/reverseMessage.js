import React, { Component } from "react";

class Item1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message
    };
  }

  reverseMessage() {
    this.setState({
      message: this.state.message
        .split("")
        .reverse()
        .join("")
    });
    console.log("message is update")
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.reverseMessage()}>reverseMessage</button>
      </div>
    );
  }
}

export default Item1;