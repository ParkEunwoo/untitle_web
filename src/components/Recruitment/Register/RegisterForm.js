import React, { Component } from 'react';
import { post } from 'axios';
import { withRouter } from 'react-router-dom';

class RegisterForm extends Component{
  state = {
    type: '',
    title: '',
    leader: '',
    explain: '',
    startDate: '',
    endDate: '',
    recruitNum: 2,
    joinNum: 1
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
      <form onSubmit= {this.handleSubmit}>
        <label>과목명</label><input type="text" name="title" onChange={this.handleChange}/>
        
        <div>
        <input type="checkbox" name="type" value="멘토링" checked= {this.state.type==="멘토링"} onChange= {this.handleChange}/><label>멘토링</label>
        <input type="checkbox" name="type" value="스터디" checked= {this.state.type==="스터디"} onChange= {this.handleChange}/><label>스터디</label>
        <input type="checkbox" name="type" value="프로젝트" checked= {this.state.type==="프로젝트"} onChange= {this.handleChange}/><label>프로젝트</label>
        </div>
        
        <div>활동기간 
        <input type="date" name="startDate"onChange= {this.handleChange}/> ~ 
        <input type="date" name="endDate" onChange= {this.handleChange}/></div>
        
        <div>모집인원 <input type="number" name="recruitNum" onChange={this.handleChange}/></div>
        
        <div>수업내용 
        <textarea name = "explain" onChange={this.handleChange}></textarea></div>
        
        <button type = "submit">등록</button>
      </form>
    );
  }
}

export default withRouter(RegisterForm);