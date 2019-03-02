import React, { Component } from 'react';
import styled from 'styled-components';


const Contents = styled.div `
  display : flex;
  flex-direction : row;
  align-items : flex-start;
  justify-content : center;
  background-color : #19B3B1 ;
`;

const Title = styled.h3 `
  text-align : center;
  color : rgba(255,255,255,100);
`;

const IdCheck = styled.div `
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  margin-right:6em;
`;

const PwCheck = styled.div `
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  margin-left:6em;
`;

const Inputs = styled.input `
  
  margin-bottom : 3em;
  border-radius: 30px;
  border: 2px solid #ecf0f1;
  background-color: rgba(255,255,255,100);
  padding-left: 1em;
  padding-right: 8em;
  padding-top: 1em;
  padding-bottom: 1em;

  &:focus {
    outline: none;
  }
`

const Summit  = styled.button `

  text-align : center;
  color : #ecf0f1;
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
    <Contents className="contents">
    <IdCheck className="id_check">
            <Title>아이디찾기</Title>
            <div>{/*<span id="i">학번</span>*/ }
            <Inputs type="text" 
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
            id="ID"></Inputs>
            </div>
            <div>{/*<span>이름</span>*/}
             <Inputs type="text" name="name"
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
              </Inputs></div>
            <Summit type="submit" 
            onClick={
              ()=> {
                  console.log(this.state)
              }
          }>ID 찾기</Summit>
    </IdCheck>
    <PwCheck className="pw_check">
            <Title>비밀번호 찾기</Title>
            <div>{/*<span id="i">학번</span> */}
            <Inputs type="text" 
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
            id="ID"></Inputs>
            </div>
            
            <div>{/*<span>이름</span>*/}
             <Inputs type="text" name="name"
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
              </Inputs></div>

            <div>{/*<span id="i">ID</span> */}
            <Inputs type="text"
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

                id="ID"></Inputs>
                </div>
            <Summit type="submit" 
            onClick={
              ()=> {
                  console.log(this.state)
              }
          } >PW 찾기</Summit>  
    </PwCheck>
    </Contents>
  );
}
}

export default Check;
