import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    
    name:'',
    student_number:'',
    id:'',
    pw:'',
    pw_check:'',
    phone:''

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
      name:'',
      student_number:'',
      id:'',
      pw:'',
      pw_check:'',
      phone:''
    })
  }

  render() {
    return (
        <div className="contents">

        
        <div id="name_div" className="check_div">
        <span>NAME</span> 
        <form
          onSubmit={
                    () => {
            console.log(this.state.name)
              }
              }
      >
      <input type="text" 
      name="name" 
      placeholder="이름" 
      value={this.state.name}
      onChange={
        (e)=>{
            this.setState({
                name: e.target.value
            })
        }
      }
      className="inputs"
      id="name"
       >
      </input>
      </form>
      </div>


      <div id="num_div" className="checknum_div">
        <span>STUDENT NUMBER</span> 
        <form
          onSubmit={
                    () => {
            console.log(this.state.student_number)
              }
              }
      >
      <input type="text" 
      name="name" 
      placeholder="학번" 
      value={this.state.student_number}
      onChange={
        (e)=>{
            this.setState({
                student_number: e.target.value
            })
        }
      }
      className="inputs"
      id="name"
       >
      </input>
      </form>
      </div>


      
      <div id="id_div" className="checkid_div">
        <span>ID</span> 
        <form
          onSubmit={
                    () => {
            console.log(this.state.id)
              }
              }
      >
      <input type="text" 
      name="id" 
      placeholder="ID" 
      value={this.state.id}
      onChange={
        (e)=>{
            this.setState({
                id: e.target.value
            })
        }
      }
      className="inputs"
      id="ID"
       >
      </input>
      </form>
      </div>

      <div id="pw_div" className="checkpw_div">
        <span>PASSWORD</span> 
        <form
          onSubmit={
                    () => {
            console.log(this.state.pw)
              }
              }
      >
      <input type="password"
      name="pw"
      placeholder="PW" 
      value={this.state.pw}
      onChange={
        (e)=>{
            this.setState({
              pw: e.target.value
            })
        }
      }
      className="inputs"
      id="PW"
       >
      </input>
      </form>
      </div>


        
       
      <div id="pw_div" className="checkpw_div">
        <span>PASSWORD CHECK</span> 
        <form
          onSubmit={
                    () => {
            console.log(this.state.pw)
              }
              }
      >
      <input type="password"
      name="checkPw"
      placeholder="PW" 
      value={this.state.pw_check}
      onChange={
        (e)=>{
            this.setState({
              pw_check: e.target.value
            })
        }
      }
      className="inputs"
      id="PW_check"
       >
      </input>
      </form>
      </div>


             
      <div id="phone_div" className="check_div">
        <span>PHONE NUMBER</span> 
        <form
          onSubmit={
                    () => {
            console.log(this.state.phone)
              }
              }
      >
      <input type="text"
      name="id" 
      placeholder="000-0000-0000"
      value={this.state.phone}
      onChange={
        (e)=>{
            this.setState({
              phone: e.target.value
            })
        }
      }
      className="inputs"
      id="phone"
       >
      </input>
      </form>
      </div>
       
      
        
        <button type="submit" 
        onClick={
          ()=> {
              console.log(this.state)
          }
      }>등록</button>
        </div>
    
   
    );
  }
}

export default SignUp;
