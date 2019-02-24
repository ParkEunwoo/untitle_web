import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {

  state = {
    id: '',
    pw:''
  }
  handleChange = (e) => {
    this.setState({
      id: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      id: '',
      pw: ''
    })
  }
  render() {
    
    return (
      <div className = "contents">
      
      <form
      onSubmit={
        () => {
            console.log(this.state.id)
        }
    }
      ><input type="text" 
      name="id" 
      placeholder="ID" 
      value={this.state.id}
      onChange={
        (e)=>{
            this.setState({
                id: e.target.value
            })
        }
      }
      className="loginBox"
       >
      </input>
      </form>
      <form
       onSubmit={
        () => {
            console.log(this.state.pw)
        }
    }>
      <div><input type="password" 
      name="password" 
      placeholder="PASSWORD"
      value={this.state.pw}
      onChange={
        (e)=>{
            this.setState({
                pw: e.target.value
            })
        }
      }
      className="pwBox">
      </input>
      
      </div>


      </form>
      
      <div><NavLink to="/yena/check">아이디찾기</NavLink>  <NavLink to="/yena/check">비밀번호 찾기</NavLink></div>
      <div><NavLink to="/yena/signup">회원가입</NavLink></div>

      <button type="submit"
       onClick={
        ()=> {
            console.log(this.state)
        }
    }
      >로그인</button>
  </div>
  
  
    );
  }
}

export default Login;
