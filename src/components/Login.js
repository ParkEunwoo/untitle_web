import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {

  state = {
    id: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      idvalue: '',
      pwvalue: ''
    })
  }
  render() {
    
    return (
      <div class = "contents">
      
      <form><input type="text" 
      name="id" 
      placeholder="ID" 
      value={this.state.idvalue}
      onChange={this.handleChange}
      class="loginBox" >
      </input>
      </form>
      <div><input type="password" 
      name="password" 
      placeholder="PASSWORD"
      value={this.state.pwvalue}
      onChange={this.handleChange}  
      class="pwBox"></input>
      <div>{this.state.name}</div>
      </div>
      <div><NavLink to="/yena/check">아이디찾기</NavLink>  <NavLink to="/yena/check">비밀번호 찾기</NavLink></div>
      <div><NavLink to="/yena/signup">회원가입</NavLink></div>
      
      <button type="submit">로그인</button>
  </div>
  
    );
  }
}

export default Login;
