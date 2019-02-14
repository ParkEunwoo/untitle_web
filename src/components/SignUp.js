import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
        <div className="contents">
        <div><span>NAME</span> <input type="text" name="name" placeholder="사용할 닉네임을 입력해주세요." class="inputs" id="name"></input></div>
        <div><span id="i">학번</span> <input type="text" name="id"  placeholder="학번(8자리)를 입력해 주세요."class="inputs" id="ID"></input></div>
        <div><span id="i">ID</span> <input type="text" name="id" class="inputs" id="ID"></input></div>
        <div><span id="p">PW</span> <input type="password" name="pw" class="inputs" id="PW"></input></div>
        <div><span id="rp">PW 재확인</span> <input type="password" name="checkPw" class="inputs" id="repw"></input></div>
        <div><span id="i">전화번호</span> <input type="text" name="id" placeholder="000-0000-0000"class="inputs" id="ID"></input></div>
        
        <button type="submit" >등록</button>
        </div>
    
   
    );
  }
}

export default SignUp;
