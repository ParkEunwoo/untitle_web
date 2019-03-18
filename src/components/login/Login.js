import React, {
  Component
} from 'react';
import { get } from 'axios';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import Link from './Link';

const Contents = styled.div `
  background-color : #19B3B1; 
  color : rgba(255,255,255,100);
  text-align : center;
  height: 100vh;
  padding-top: 100px;
`;

const Form = styled.form `
  background-color : #19B3B1; 
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content : center;
  
`;
const Submit = styled.button `
    color : #ecf0f1;
    border-radius: 30px;
    border: 2px solid #ecf0f1;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-bottom : 1.5em;
    &:focus {
      outline: none;
    }
    
`;

const Input = styled.input `
  
  margin-bottom : 3em;

  width : 20%;
  border-radius: 30px;
  border: 2px solid #ecf0f1;
  background-color: rgba(255,255,255,100);
  padding-left: 1em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
 
  
  &:focus {
    outline: none;
  }
`;

class Login extends Component {

  state = {
    id: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginUser = () => {
    const {id, password} = this.state;
    const url = `http://13.209.116.75:9000/api/users/login/${id}/${password}`;

    return get(url);

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.loginUser()
      .then((response) => {
        if(response.data.success){
          const {userName, userNumber, userPhone} = response.data.success;
          sessionStorage.setItem('userInfo', JSON.stringify({userName, userNumber, userPhone}));
          this.props.history.push("/");
        }
      });
  }

  render() {

    return ( 
      <Contents>
        <h1>UNTITLE</h1>
        <Form onSubmit = {this.handleSubmit} >
          <Input type = "text" name = "id" placeholder = "ID" value = {this.state.id} onChange = {this.handleChange} />
          <Input type = "password" name = "password" placeholder = "PASSWORD" value = {this.state.password} onChange = {this.handleChange} />
          <Submit type = "submit">Log In </Submit>
          <Link />
        </Form>
      </Contents>
    );
  }
}

export default withRouter(Login);