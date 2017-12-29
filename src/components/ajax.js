import React, { Component } from "react";
import axios from "axios";

class Ajax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5a2f7e7f6ce8af6869ec66e3/api/manage/admin/role"
      )
      .then(res => {
        this.setState({
          list: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { list } = this.state;
    return <div>{list.map(user => <p key={user.id}>{user.name}</p>)}</div>;
  }
}

export default Ajax;
