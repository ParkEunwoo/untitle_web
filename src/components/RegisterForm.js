import React, { Component } from 'react';

class RegisterForm extends Component{
  state = {
    title: '',
    type: {
      mentor:'true',
      study: 'false',
      project:'false' 
    },
    leader: '',
    explain: '',
    rsDate: '',
    reDate: '',
    asDate: '',
    aeDate: '',
    rNum: '',
    jNum: 0
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
      title: '',
      type: {
        mentor:'true',
        study: 'false',
        project:'false' 
      },
      leader: '',
      explain: '',
      rsDate: '',
      reDate: '',
      asDate: '',
      aeDate: '',
      rNum: '',
      jNum: 0
    })
  }
  
  render(){
    return (
      <form onSubmit= {this.handleSubmit}>
        <div>과목명 <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/></div>
        
        <div>
        <input type="checkbox" name="type" value="멘토링" checked= {this.state.type['mentor']} onChange= {this.handleChange}/>멘토링
        <input type="checkbox" name="type" value="스터디" checked= {this.state.type['study']} onChange= {this.handleChange}/>스터디 
        <input type="checkbox" name="type" value="프로젝트" checked= {this.state.type['project']} onChange= {this.handleChange}/>프로젝트 
        </div>
        
        <div>활동기간 
        <input type="date" name="rsday" value={this.state.rsDate} onChange= {this.handleChange}/> ~ 
        <input type="date" name="reday" value={this.state.reDate} onChange= {this.handleChange}/></div>
        
        <div>모집기간 
        <input type="date" name="asday" value={this.state.asDate} onChange= {this.handleChange}/> ~ 
        <input type="date" name="aeday" value={this.state.rsDate} onChange= {this.handleChange}/></div>
        
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