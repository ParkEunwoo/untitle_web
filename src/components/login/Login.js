import React, {
  Component
} from 'react';
import styled from 'styled-components';
import Link from './Link';

const Form = styled.form `
  display: flex;
  flex-direction: column;
  
`;
const Submit = styled.button `
    border-radius: 30px;
    border: 2px solid #ecf0f1;
    background-color: rgba(0,0,0,0);
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
background-color: rgba(0,0,0,0);
padding-left: 1em;
padding-right: 2em;
padding-top: 0.5em;
padding-bottom: 0.5em;
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
      }
      className = "loginBox" >
      </Input> 
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
      }
      className = "pwBox" >
      </Input>
      <Link />
      <Submit type = "submit"
      onClick = {
        () => {
          console.log(this.state)
        }
      } >
      Log In </Submit>



      </Form>
    );
  }
}

export default Login;