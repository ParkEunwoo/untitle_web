import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div `
  border: 1px solid #d9dbdb;
  background-color: white;
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 4%;
`;

const BoxTop = styled.h2 `
  margin: 0;
  color: #ffffff;
  font-weight: bold;
  padding: 2.5% 4%;
  width :100%;
  border-bottom: 1px solid #d9dbdb;
  background-color: #034B61 ;
`;

const Form = styled.form `
  margin-top: 3%;
  margin-bottom: 3%;
`;


const Input = styled.input `
  width: 10%;
  border : 2px solid #dddddd; 
  padding :1%;
  margin-top: 1%; 
  margin-left: 4%;
  margin-right : 1%;
  font-size: 1em;
`;

const InputTitle = styled.input `
  width: 75%;
  border : 2px solid #dddddd; 
  padding: 1% 1.5%;
  margin-left: 3%;
  margin-top: 1%;
  &::placeholder {
    font-size : 1.25em;
  }
`;

const Textarea = styled.textarea `
  border : 2px solid #dddddd; 
  width: 92%;
  padding-bottom : 20%;
  margin-left: 4%;
  resize: none;
  display : block;
  &::placeholder {
    color : transparent;
  }
`;

const Button = styled.button `
  border: none;
  background-color: #000000;
  color: #ffffff;
  padding: 1% 2%;
  font-size : 1.1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top : 2%;
`;

const Label1 = styled.label `
  font-size : 1.25em;
`;

const Label2 = styled.div `
  margin-top: 1.75%; 
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom : 1%;
  font-size : 1.25em;
`;

class InputForm extends Component {

    state = {
        week: 1,
        title:'',
        content : '',
        file : {
          data: null,
          name: ''  
        },
        work : {
            title:'',
            content:''
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
          [e.target.name]: value
        });
    }

    handleWorkChange = (e) => {
        const value = e.target.value;
        
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            work:{
                [e.target.name] : value
            }
        });
        console.log(this.state);
    }

    handleFileChange = (e) => {

    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <Box>
                <BoxTop>게시글 작성</BoxTop>
                <Form>
                    <div>
                    <Input type="number" 
                    value={this.state.week}
                    onChange={this.handleChange} 
                    name="week" min="1" placeholder="1"/><Label1>주차</Label1>

                    <InputTitle type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title" placeholder="제목"/></div>

                    <div>
                    <Label2>내용 입력</Label2>
                    <Textarea
                    name="content"
                    value = {this.state.content}
                    onChange={this.handleChange} 
                    placeholder="내용을 입력하세요"/></div>

                    <Button type="submit"
                    onClick={this.handleSubmit}>저장</Button>
                </Form>
            </Box>
        );
    }
}

export default InputForm;