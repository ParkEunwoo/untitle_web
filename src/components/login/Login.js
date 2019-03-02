import React, {
  Component
} from 'react';
import styled from 'styled-components';
import Link from './Link';

const Contents = styled.div `
  background-color : #19B3B1; 
  color : rgba(255,255,255,100);
  text-align : center;
`;

const Form = styled.form `
  background-color : #19B3B1; 
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content : center;
  
`;
const Submit = styled.button `
<<<<<<< HEAD
=======
    width : 6%;
>>>>>>> 02c72792b6f7287267901f8808f33d3a5908e077
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
    pw: ''
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
      <Contents className = "contents">
      <h1>UNTITLE</h1>
      <Form onSubmit = {
        () => {
          console.log(this.state.id);
          console.log(this.state.pw);
        }
      } >
      <Input type = "text"
      name = "id"
      placeholder = "ID"
      value = {
        this.state.id
      }
      onChange = {
        (e) => {
          this.setState({
            id: e.target.value
          })
        }
      }/>
      <Input type = "password"
      name = "password"
      placeholder = "PASSWORD"
      value = {
        this.state.pw
      }
      onChange = {
        (e) => {
          this.setState({
            pw: e.target.value
          })
        }
      }/>
      <Submit type = "submit"
      onClick = {
        () => {
          console.log(this.state)
        }
      } >
      Log In </Submit>
      <Link />
      </Form>
      </Contents>
    );
  }
}

export default Login;