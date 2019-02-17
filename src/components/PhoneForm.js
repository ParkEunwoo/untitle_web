import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    id: '',
	ex_password: '',
	new_password: '',
	re_password: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
  }
  checkPW(){
	if(this.state.new_password !== this.state.re_password)
	return alert('비밀번호가 일치하지 않습니다')	;
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="아이디"
          value={this.state.id}
          onChange={this.handleChange}
          name="id"
        />
        <button onClick ={()=>alert('사용 가능한 아이디입니다.')}>중복확인</button>		
		<br></br>
        <input
          placeholder="기존 비밀번호"
          value={this.state.ex_password}
          onChange={this.handleChange}
          name="ex_password"
        />
		<br></br>
        <input
          placeholder="새 비밀번호"
          value={this.state.new_password}
          onChange={this.handleChange}
          name="new_password"
        />
		<br></br>
        <input
          placeholder="비밀번호 확인"
          value={this.state.re_password}
          onChange={this.handleChange}
          name="re_password"
        />
		<br></br>
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
		<button onClick ={()=>alert('사용 가능한 전화번호입니다.')}>중복확인</button>		
		<br></br>
        <button type="submit" onClick ={()=>alert('수정되었습니다.')}>수정</button>		
      </form>
    );
  }
}

export default PhoneForm;