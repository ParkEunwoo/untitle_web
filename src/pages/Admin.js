import React, { Component } from 'react';

class Admin extends Component {

  state = {
      info: ""
  }

  componentDidMount() {
    this.callApi()
    .then(res => console.log(res))
        .then(res => this.setState({info: res}))
      .catch(err => console.error(err));
  }

  callApi = async () => {
    const response = await fetch('http://13.209.116.75:9000/api/users/show/admin');
    const body = await response.json();
    return body;
  }

  render() {
      console.log(this.state.info);
    const info =
    this.state.info ?
      this.state.info.map(user => <li key={this.state.info._id}>이름 : {this.state.info.name}</li>
        )
      : '';
    
    return (
        <ul>
            {info}
        </ul>
    );
  }
}

export default Admin;
