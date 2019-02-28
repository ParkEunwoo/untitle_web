import React, { Component } from 'react';
import Login from 'components/login'


class LoginPage extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <Login
      onCreate={this.handleCreate}
       />
      
    );
  }
}

export default LoginPage;
