import React, { Component } from 'react';

class Check extends Component {state = {
    
  name:'',
  student_number:'',
  id:'',
  name_p:'',
  student_number_p:'',
  id_p:''

}

handleChange = (e) => {
  this.setState({
    id: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault();
  this.props.onCreate(this.state);
  this.setState({
    name:'',
    student_number:'',
    id:''
  })
}

render() {
  return (
    <div className="contents">
    <div className="id_check">
            <h3>아이디찾기</h3>
            <div><span id="i">학번</span> 
            <input type="text" 
            placeholder="학번" 
            name="id" 
            value={this.state.student_number}
            onChange={
              (e)=>{
                  this.setState({
                      student_number: e.target.value
                  })
              }
            }
            className="inputs" 
            id="ID"></input>
            </div>
            <div><span>이름</span>
             <input type="text" name="name"
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
              id="name">
              </input></div>
            <button type="submit" 
            onClick={
              ()=> {
                  console.log(this.state)
              }
          }>아이디 찾기</button>
    </div>
    <div className="pw_check">
            <h3>비밀번호 찾기</h3>
            <div><span id="i">학번</span> 
            <input type="text" 
            placeholder="학번" 
            name="id" 
            value={this.state.student_number_p}
            onChange={
              (e)=>{
                  this.setState({
                      student_number_p: e.target.value
                  })
              }
            }
            className="inputs" 
            id="ID"></input>
            </div>
            
            <div><span>이름</span>
             <input type="text" name="name"
              placeholder="이름" 
              value={this.state.name_p}
              onChange={
                (e)=>{
                    this.setState({
                        name_p: e.target.value
                    })
                }
              }

              className="inputs" 
              id="name">
              </input></div>

            <div><span id="i">ID</span> 
            <input type="text"
             name="id"
              placeholder="ID"
              value={this.state.id_p}
              onChange={
                (e)=>{
                    this.setState({
                        id_p: e.target.value
                    })
                }
              }
               className="inputs"

                id="ID"></input>
                </div>
            <button type="submit" 
            onClick={
              ()=> {
                  console.log(this.state)
              }
          } >비밀번호 찾기</button>  
    </div>
    </div>
  );
}
}

export default Check;
