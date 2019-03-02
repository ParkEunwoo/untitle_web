import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Apply extends Component{
  state = {
    jNum: 0
  }

  componentWillMount(){
    const jNum = this.props.jNum;
    this.setState({
        jNum
      }
    );
  }

  render() { 
    return (
      <div>
          <div>{this.props.type}</div>
          <div>{this.props.explain}</div>
          <div>활동기간 {this.props.startDate} ~ {this.props.endDate} </div>
          <div>모집인원 {this.state.joinNum}/{this.props.recruitNum}명 </div>
          
          <form action="" method = "post">
              <p>
                스케줄러- 가능한 시간을 체크하세요
                
                <button type = "submit" value = "submit">확인</button>
                <button type = "reset" value = "reset">처음상태로</button>
                <button>수정</button>
              </p>
              <NavLink to="/recruit/apply/timetable">내 시간표</NavLink>
              <button type= "submit" value = "apply_submit" onClick={this.joinNumPlus}>><NavLink to="/recruit/apply">신청</NavLink></button>
            </form>
      </div>
    );
  }


}

export default Apply;