import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RecruitList from 'components/RecruitList'

class RecruitPage extends Component {
  
  render() {
    return (
      <div>
        <div class = "header">
          <h1>RECRUITMENT</h1>
          <button><NavLink to="/jungmin/apply">등록</NavLink></button>
        </div>
        <div class = "recruit_content">
          <div class = "container" OnClick="location.href='신청페이지'">
            <RecruitList />
          </div>
        </div>
      </div>
    );
  }
}

export default RecruitPage;
