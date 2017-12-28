import React, { Component } from "react";
import Item from "./components/reverseMessage";
import Counter from "./components/counter"
import { Button } from "element-react";
class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
      const {onIncrease,onDecrease,value} = this.props
    return (
      <div>
        <h1>{value}</h1>
        <Button onClick={onIncrease} >Increase</Button>
        <Button onClick={onDecrease} >Decrease</Button>
        <Counter></Counter>
        {/* <p>1.reverseMessage Tool</p> */}
        {/* <Item message="1222" /> */}
      </div>
    );
  }
}


export default App;
