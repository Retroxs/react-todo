import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "element-react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        password: ""
      }
    };
  }

  onChange(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
  }
  render() {
    const {form} = this.state;
    return (
      <div>
        <h1>form</h1>
        <Form model={form} style={{ width: 300 }}>
          <Form.Item label="username">
            <Input
              value={form.username}
              onChange={this.onChange.bind(this, "username")}
            />
          </Form.Item>
          <Form.Item label="password">
            <Input
              value={form.password}
              onChange={this.onChange.bind(this, "password")}
            />
          </Form.Item>
          <Button onClick={() => alert("submit!")}>submit</Button>
        </Form>
      </div>
    );
  }
}

Item.propTypes = {
  message: PropTypes.string
};
export default Item;
