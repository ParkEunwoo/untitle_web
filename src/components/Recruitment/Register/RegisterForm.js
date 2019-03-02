import React, { Component } from 'react';

class RegisterForm extends Component{
  state = {
    type: '',
    title: '',
    leader: '',
    explain: '',
    startDate: '',
    endDate: '',
    recruitNum: '',
    joinNum: 1
  }

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      type: '',
      title: '',
      leader: '',
      explain: '',
      startDate: '',
      endDate: '',
      recruitNum: '',
      joinNum: 1
    })
  }
  
  render(){
    return (
      <form onSubmit= {this.handleSubmit}>
        <label>과목명</label><input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        
        <div>
        <input type="checkbox" name="type" value="멘토링" checked= {this.state.type==="멘토링"} onChange= {this.handleChange}/><label>멘토링</label>
        <input type="checkbox" name="type" value="스터디" checked= {this.state.type==="스터디"} onChange= {this.handleChange}/><label>스터디</label>
        <input type="checkbox" name="type" value="프로젝트" checked= {this.state.type==="프로젝트"} onChange= {this.handleChange}/><label>프로젝트</label>
        </div>
        
        <div>활동기간 
        <input type="date" name="rsday" value={this.state.rsDate} onChange= {this.handleChange}/> ~ 
        <input type="date" name="reday" value={this.state.reDate} onChange= {this.handleChange}/></div>
        
        <div>모집인원 <input type="number" name="rNum" value = {this.state.rNum} onChange={this.handleChange}/></div>
        
        <div>수업내용 
        <textarea name = "explain" value={this.state.explain} onChange={this.handleChange}></textarea></div>
        
        <div>수업가능 시간 입력<input/></div>
        
        <button type = "submit">등록</button>
      </form>
    );
  }
}

export default RegisterForm;