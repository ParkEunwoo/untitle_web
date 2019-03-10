import React, {
  Component
} from 'react';
import { post } from 'axios';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Contents = styled.div `
  background-color: #19B3B1 ;
  color: rgba(255,255,255,100);
  text-align: center;
  padding-top : 100px;
  height : 100vh;
`;

const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content : center;
`;

const Submit = styled.button `
    font-size : 1em;
    border-radius: 30px;
    border: 2px solid #ecf0f1;
    background-color: rgba(0,0,0,0);
    color : rgba(255,255,255,100);
    cursor: pointer;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    &:focus {
      outline: none;
    }
`;

const Input = styled.input `
    
    border-radius: 30px;
    border: 2px solid #ecf0f1;
    background-color: rgba(255,255,255,100);
    padding-left: 1em;
    padding-right: 10em;
    padding-top: 1.2em;
    padding-bottom: 1.2em;
    margin-bottom : 1.5em;
    &:focus {
      outline: none;
    }
`;

class SignUp extends Component {
  state = {
    name: '',
    number: '',
    id: '',
    password: '',
    pw_check: '',
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signUpUser = () => {
    const url = 'http://13.209.116.75:9000/api/users/signup';
    const {name, number, id, password, phone} = this.state;
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    return post(url, {name, number, id, password, phone, userInfo});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.signUpUser()
      .then((response) => {
        console.log(response.data);
        this.props.history.push('/login');
      });
  }

  render() {
    return (
      <Contents className = "contents" >
      <h1>UNTITLE</h1>
      <h2>Create an Account</h2>
      <Form onSubmit = {this.handleSubmit} >
      <Input type = "text" name = "name" placeholder = "이름" value = {this.state.name} onChange = {this.handleChange} />
      <Input type = "text" name = "number" placeholder = "학번" value = {this.state.number} onChange = {this.handleChange} />
      <Input type = "text" name = "id" placeholder = "ID" value = {this.state.id} onChange = {this.handleChange} />
      <Input type = "password" name = "password" placeholder = "PASSWORD" value = {this.state.password} onChange = {this.handleChange} />
      <Input type = "password" name = "pw_check" placeholder = "PASSWORD 확인" value = {this.state.pw_check} onChange = {this.handleChange} />
      <Input type = "text" name = "phone" placeholder = "전화번호" value = {this.state.phone} onChange = {this.handleChange} />
      <Submit type = "submit" > SIGN UP </Submit> 
      </Form >
      </Contents>


    );
  }
}

export default withRouter(SignUp);