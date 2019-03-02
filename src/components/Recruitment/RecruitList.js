import React, { Component } from 'react';
import RecruitItem from './RecruitItem';
import {NavLink} from 'react-router-dom';

const recruit = [
  {
    _id: 0,
    type: '멘토링',
    title: '1학년을 위한 프로그래밍',
    leader: '류정민',
    period: {
      startDate:'2019-03-11',
      endDate:'2019-06-21'
    },
    recruitNum: 20,
    joinNum: 0
  },
  {
    _id: 1,
    type: '멘토링',
    title: '웹 프론트앤드',
    leader: '박은우',
    period: {
      startDate:'2019-03-11',
      endDate:'2019-06-21'
    },
    recruitNum: 20,
    joinNum: 0
  },
  {
    _id: 2,
    type: '멘토링',
    title: '디자인을 위한 얕고 넓은 멘토링',
    leader: '김윤회',
    period: {
      startDate:'2019-03-11',
      endDate:'2019-06-21'
    },
    recruitNum: 20,
    joinNum: 0
  },
]

class RecruitList extends Component {
  render() {
    const recruitment =recruit.map(info => <RecruitItem key = {info._id} title = {info.title}
      type = {info.type}
      leader = {info.leader} 
      startDate = {info.period.startDate} endDate= {info.period.endDate}
      recruitNum = {info.recruitNum} joinNum = {info.joinNum}  />);
    
    return (
      <div>
        <NavLink to="/recruit/apply">{recruitment}</NavLink>
      </div>
    );
  }
}

export default RecruitList;
