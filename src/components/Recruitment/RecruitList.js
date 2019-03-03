import React, { Component } from 'react';
import RecruitItem from './RecruitItem';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  grid-gap: 2em;
`;

const r = [{
  type:"멘토링",
  title:'예시 짧을 때',
  leader: '박은우',
  recruitNum: 19,
  joinNum:1,
  period:{
    startDate:'19-03-02',
    endDate:'19-06-05'
  }
},{
  type:"스터디",
  title:'예시 길 때 이거는 제목이 이정도는 되는데 넘치지 않게 해줄 수 있는가요',
  leader: '박은우',
  recruitNum: 19,
  joinNum:1,
  period:{
    startDate:'19-03-02',
    endDate:'19-06-05'
  }
}];

class RecruitList extends Component {

  state = {
    recruitment: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({recruitment: res}))
      .catch(err => console.error(err));
  }

  callApi = async () => {
    const response = await fetch('/api/recruit/status');
    const body = await response.json();
    return body;
  }

  render() {
    const recruitment =
    this.state.recruitment ?
      this.state.recruitment.map(info => <RecruitItem key = {info._id} title = {info.title}
      type = {info.type}
      leader = {info.leader} 
      startDate = {info.period.startDate} endDate= {info.period.endDate}
      recruitNum = {info.recruitNum} joinNum = {info.joinNum}  />)
      : r.map(info => <RecruitItem key = {info._id} title = {info.title}
        type = {info.type}
        leader = {info.leader} 
        startDate = {info.period.startDate} endDate= {info.period.endDate}
        recruitNum = {info.recruitNum} joinNum = {info.joinNum}  />);
    
    return (
      <div>
        <NavLink to="/recruit/apply"><Box>{recruitment}</Box></NavLink>
      </div>
    );
  }
}

export default RecruitList;
