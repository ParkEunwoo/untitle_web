import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
class RecruitItem extends Component {    
    render() {
      return (
        <div className = "recruitList"> <NavLink to="/jungmin/apply"></NavLink>{/*상자를 클릭하면 신청페이지 주소로*/} 
            <div className = "kind">{this.props.type}</div>
            <div className = "name">
                <h2>{/*과목명*/}{this.props.title}</h2>
                <h3>{/*팀장명*/}{this.props.leader}</h3>
            </div>
            {/*활동기간-모집기간보다 글자 크게*/}
            <div>{/*활동기간*/}{this.props.asDate} ~ {this.props.aeDate}</div>
            <div>모집기간:{this.props.rsDate} ~ {this.props.reDate} </div>
            <div>{/*모집인원*/}{this.props.jNum}/{this.props.rNum}명</div>
        </div>
      );
    }
  
  }
  
  export default RecruitItem;