import React, { Component } from "react";
import { Button } from "element-react";

import {connect } from "react-redux";
import {bindActionCreators } from "redux";
import {increaseAction, decreaseAction } from "../reducer";

class Counter extends Component {
  render() {
    const { onIncrease, onDecrease, counter } = this.props;
    return (
      <div>
        <h1>{counter.count}</h1>
        <Button onClick={onIncrease}>Increase</Button>
        <Button onClick={onDecrease}>Decrease</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: bindActionCreators(increaseAction, dispatch),
    onDecrease: bindActionCreators(decreaseAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
