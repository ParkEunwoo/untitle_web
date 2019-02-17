import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Apply extends Component{
  state = {
    jNum: 0
  }

  joinNumPlus = () => {
    this.setState({
      jNum: this.state.jNum +1
    });
  }

  render() { 
    return (
      <div>
      <div class = "header" >
        <h2>신청하기</h2>
      </div>

      <div class = "apply_content">
            <div>{/*멘토링/스터디/프로젝트*/} {this.props.type}</div>
            <div>
                <h2>{/*과목명*/}{this.props.title}</h2>
                <h3>{/*팀장명*/}{this.props.leader}</h3>
                <button type= "submit" value = "apply_submit" onClick="location.href='다시모집현황페이지로';joinNumPlus()">신청</button>
            </div>
            <div>{/*수업내용 요약*/}</div>
            <div>활동기간 {this.props.asDate} ~ {this.props.aeDate} </div>
            <div>모집기간 {this.props.rsDate} ~ {this.props.reDate}</div>
            <div>모집인원 {this.props.jNum}/{this.props.rNum}명 </div>
            
            <form action="" method = "post">
              <div>
                <p>
                  스케줄러- 가능한 시간을 체크하세요
                  <br />
                  <button type = "submit" value = "submit">확인</button>
                  <button type = "reset" value = "reset">처음상태로</button>
                  <button>수정</button>
                </p>
                <p>
                  <NavLink to="/jungmin/timetable">내 시간표</NavLink>
                </p>
              </div>
            </form>
      </div>
      </div>
    );
  }


}

export default Apply;