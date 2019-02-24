import React, { Component } from 'react';
import RecruitItem from './RecruitItem';

const recruit = [
  {
    _id: 0,
    type: '멘토링',
    title: '과목명',
    leader: '팀장명',
    asDate:'2019-03-15',
    aeDate:'2019-06-21',
    rsDate:'2019-03-04',
    reDate:'2019-03-14',
    jNum: 8,
    rNum: 20
  },
  {
    _id: 1,
    type: '스터디',
    title: '과목명',
    leader: '팀장명',
    asDate:'2019-03-10',
    aeDate:'2019-04-30',
    rsDate:'2019-03-04',
    reDate:'2019-03-09',
    jNum: 3,
    rNum: 10
  },
  {
    _id: 2,
    type: '프로젝트',
    title: '과목명',
    leader: '팀장명',
    asDate:'2019-03-20',
    aeDate:'2019-08-30',
    rsDate:'2019-03-04',
    reDate:'2019-03-09',
    jNum: 1,
    rNum: 10
  }
]

class RecruitList extends Component {
  render() {
    const recruitment =recruit.map(info => <RecruitItem key = {info._id} title = {info.title} type = {info.type} leader = {info.leader} 
      asDate= {info.asDate} aeDate= {info.aeDate} rsDate= {info.rsDate} reDate= {info.reDate}
      jNum = {info.jNum} rNum = {info.rNum}  />);
    
    return (
      <div>
        {recruitment}
      </div>
    );
  }
}

export default RecruitList;
