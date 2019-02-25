import React, {
  Component
} from 'react';
import styled from 'styled-components';

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

class SignUp extends Component {
  state = {

    name: '',
    student_number: '',
    id: '',
    pw: '',
    pw_check: '',
    phone: ''

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
      name: '',
      student_number: '',
      id: '',
      pw: '',
      pw_check: '',
      phone: ''
    })
  }

  render() {
    return (
      <div className = "contents" >

      <Form onSubmit = {
        () => {
          console.log(this.state.name);
          console.log(this.state.student_number);
          console.log(this.state.id);
          console.log(this.state.pw);
          console.log(this.state.pw_check);
          console.log(this.state.phone);
        }
      } >
      <label > NAME </label>
      <Input type = "text"
      name = "name"
      placeholder = "이름"
      value = {
        this.state.name
      }
      onChange = {
        (e) => {
          this.setState({
            name: e.target.value
          })
        }
      }
      className = "inputs"
      id = "name" >
      </Input>
      <label > STUDENT NUMBER </label> 
      <Input type = "text"
      name = "name"
      placeholder = "학번"
      value = {
        this.state.student_number
      }
      onChange = {
        (e) => {
          this.setState({
            student_number: e.target.value
          })
        }
      }
      className = "inputs"
      id = "name" >
      </Input> 
      <label > ID </label> 
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
      className = "inputs"
      id = "ID" >
      </Input>
       <label > PASSWORD </label>  
       <Input type = "password"
      name = "pw"
      placeholder = "PW"
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
      className = "inputs"
      id = "PW" >
      </Input> 
      <Input type = "password"
      name = "checkPw"
      placeholder = "PW"
      value = {
        this.state.pw_check
      }
      onChange = {
        (e) => {
          this.setState({
            pw_check: e.target.value
          })
        }
      }
      className = "inputs"
      id = "PW_check" >
      </Input> 
      <label > PHONE NUMBER </label> 
       <Input type = "text"
      name = "id"
      placeholder = "000-0000-0000"
      value = {
        this.state.phone
      }
      onChange = {
        (e) => {
          this.setState({
            phone: e.target.value
          })
        }
      }
      className = "inputs"
      id = "phone" >
      </Input>



      <Submit type = "submit"
      onClick = {
        () => {
          console.log(this.state)
        }
      } > 등록 </Submit> 
      </Form >
       </div>


    );
  }
}

export default SignUp;