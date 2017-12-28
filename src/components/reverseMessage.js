import React, { Component } from "react";
import PropTypes from "prop-types";
import {  Button, Form, Input  } from "element-react";
import axios from "axios"
import Clock from "./clock";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      list:[],
      form:{
        username:"",
        password:""
      }
    };
  }

  reverseMessage() {
    this.setState({
      message: this.state.message
        .split("")
        .reverse()
        .join("")
    });
    console.log("message is update");
  }

  componentDidMount(){
   axios.get("https://www.easy-mock.com/mock/5a2f7e7f6ce8af6869ec66e3/api/manage/admin/role").then(res => {
     this.setState({
       list:res.data.data
     })
   }).catch(err => {
     console.log(err)
   })
  }

  onChange(key,value) {
    this.state.form[key] = value;
    this.forceUpdate()
  }
  render() {
    const { message,list,form } = this.state;
    return (
      <div>
        <p>{message}</p>
        <Button onClick={() => this.reverseMessage()}>reverseMessage</Button>
        <h1>loop with ajax</h1>
        {list.map(user => <p key={user.id}>{user.name}</p>)}

        <h1>form</h1>
        <Form model={form} style={{width:300}} >
          <Form.Item label="username" >
            <Input value={form.username} onChange={this.onChange.bind(this, "username")} ></Input>
            </Form.Item>
          <Form.Item label="password" >
            <Input value={form.password} onChange={this.onChange.bind(this, "password")} ></Input>
            </Form.Item>
            <Button onClick={() => console.log(form)} >
              submit
            </Button>
        </Form>

        <Clock></Clock>
      </div>
    );
  }
}

Item.propTypes = {
  message: PropTypes.string
};
export default Item;
