import React, { Component } from 'react';
import RecruitItem from './RecruitItem';

const recruit = [
  {}
]

class RecruitList extends Component {
  render() {
    const recruitment =recruit.map(info => <RecruitItem key = {info.id} title = {info.title} leader = {info.leader} 
      asDate= {info.asDate} aeDate= {info.aeDate} rsDate= {info.rsDate} reDate= {info.reDate}
      jNum = {info.jNum} rNum = {info.rNum}  />);
    
    return (
      <div class>
        {recruitment}
      </div>
    );
  }
}

export default RecruitList;
