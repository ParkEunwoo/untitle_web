import React, { Component } from 'react';
import { post } from 'axios';
import { withRouter } from 'react-router-dom';
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
  width: 20%;
  border : 2px solid #dddddd; 
  padding: 1% 1.5%;
  margin-top: 1%; 
  margin-left: 2%;
  margin-right : 1%;
`;

const InputTitle = styled.input `
  width: 75%;
  border : 2px solid #dddddd; 
  padding: 1% 1.5%;
  margin-left: 3%;
  margin-top: 1%;
`;

const InputDateStart = styled.input `
  width: 20%;
  border : 2px solid #dddddd; 
  padding: 1% 1.5%;
  margin-right : 1%;
  margin-top: 1%;
  margin-left: 2%;
`;

const InputDateEnd = styled.input `
  width: 20%;
  border : 2px solid #dddddd; 
  padding: 1% 1.5%;
  margin-left: 2%;
  margin-right : 1%;
  margin-top: 1%;
`;

const Textarea = styled.textarea `
  border : 2px solid #dddddd; 
  width: 75%;
  padding-bottom : 20%;
  margin-top: 1%;
  margin-left: 2%;
`;

const CheckBox = styled.input `
  width:2em;
  height:2em;
  cursor: pointer;
`;

const CheckBoxLabel = styled.label `
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  margin-left: 1%;
  margin-right: 2%;
`;

const Label = styled.label `
  margin: 1.5% 5%;
  display : inline-block;
  float:left;
`;

const Title = styled.div `
  margin-bottom: 2%;
`;

const CheckSection = styled.div `
  margin-bottom: 2%;
  margin-left: 5%;
  margin-right: 5%;
`;

const Date = styled.div `
  margin-bottom: 2%;
`;

const RecruitNum = styled.div `
  margin-bottom : 2%;
`;

const Explain = styled.div `
  margin-bottom : 2%;
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
`;

class RegisterForm extends Component{
  state = {
    type: '',
    title: '',
    leader: '',
    explain: '',
    startDate: '',
    endDate: '',
    recruitNum: 0,
    joinNum: 0
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }
  
  registRecruit = () => {
    const url = '/api/recruit/regist';
    const { type, title, explain, startDate, endDate, recruitNum } = this.state;
    const period = {
      startDate,
      endDate
    }
    return post(url, { type, title, explain, period, recruitNum });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.registRecruit()
      .then((response) => {
        console.log(response.data);
        this.props.history.push('/recruit');
      });
  }

  
  render(){
    return (
      <Box>
        <BoxTop>멘토링 / 스터디 / 프로젝트 등록</BoxTop>
        <Form onSubmit= {this.handleSubmit}>
        <Title><Label>과목명</Label><InputTitle type="text" name="title" onChange={this.handleChange}/></Title>
        
        <CheckSection>
        <CheckBox type="checkbox" name="type" value="멘토링" checked= {this.state.type==="멘토링"} onChange= {this.handleChange}/><CheckBoxLabel>멘토링</CheckBoxLabel>
        <CheckBox type="checkbox" name="type" value="스터디" checked= {this.state.type==="스터디"} onChange= {this.handleChange}/><CheckBoxLabel>스터디</CheckBoxLabel>
        <CheckBox type="checkbox" name="type" value="프로젝트" checked= {this.state.type==="프로젝트"} onChange= {this.handleChange}/><CheckBoxLabel>프로젝트</CheckBoxLabel>
        </CheckSection>
        
        <Date><Label>활동기간</Label> 
        <InputDateStart type="date" name="startDate"onChange= {this.handleChange}/> ~ 
        <InputDateEnd type="date" name="endDate" onChange= {this.handleChange}/></Date>
        
        <RecruitNum><Label>모집인원</Label> <Input type="number" name="recruitNum" onChange={this.handleChange}/>명</RecruitNum>
        
        <Explain><Label>수업내용</Label> 
        <Textarea name = "explain" onChange={this.handleChange}></Textarea></Explain>
        
        <Button type = "submit">등록</Button>
      </Form>
      </Box>

    );
  }
}

export default withRouter(RegisterForm);