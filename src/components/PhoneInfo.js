import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
		id: '',
		ex_password: '',
		new_password: '',
		re_password: '',
		phone: ''
    }
  }
  
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      id, ex_password, new_password, re_password, phone
    } = this.props.info;
    
    return (
      <div style={style}>
        <div><b>{id}</b></div>
        <div>{ex_password}</div>
		<div>{new_password}</div>
        <div>{re_password}</div>
        <div>{phone}</div>
		
      </div>
    );
  }
}

export default PhoneInfo;