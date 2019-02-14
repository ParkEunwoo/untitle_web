import React, { Component } from 'react';

class Check extends Component {
  render() {
    return (
      <div class="contents">
      <div class="id_check">
              <h3>아이디찾기</h3>
              <div><span id="i">학번</span> <input type="text" placeholder="학번" name="id" class="inputs" id="ID"></input></div>
              <div><span>이름</span> <input type="text" name="name" placeholder="이름" class="inputs" id="name"></input></div>
              <button type="submit" >아이디 찾기</button>
      </div>
      <div class="pw_check">
              <h3>비밀번호 찾기</h3>
              <div><span id="i">학번</span> <input type="text" placeholder="학번" name="id" class="inputs" id="ID"></input></div>
              <div><span id="i">이름</span> <input type="text" placeholder="이름" name="id" class="inputs" id="ID"></input></div>
              <div><span id="i">ID</span> <input type="text" name="id" placeholder="ID" class="inputs" id="ID"></input></div>
              <button type="submit" >비밀번호 찾기</button>  
      </div>
      </div>
    );
  }
}

export default Check;
