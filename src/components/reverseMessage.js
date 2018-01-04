import React, { Component } from "react";
import { Button } from "element-react";
import { inject, observer } from "mobx-react";

@inject("CommonStore")
@observer
class reverseMessage extends Component {
  reverse() {
        this.props.CommonStore.appName = this.props.CommonStore.appName.split("")
        .reverse()
        .join("")
  }
  render() {
    const {CommonStore} = this.props
    return (
      <div>
        <h1>{CommonStore.appName}</h1>
        <Button onClick={this.reverse.bind(this)}>reverse</Button>
      </div>
    );
  }
}

export default reverseMessage;
