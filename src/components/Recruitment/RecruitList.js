import React, { Component } from 'react';
import RecruitItem from './RecruitItem';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
/*
const Box = styled.div `
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;
  justify-content : flex-start;
  align-items : center;
`;*/

const Box = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23em, 23em));
  grid-auto-rows: minmax(23em, auto);
  grid-gap: 1.5em;
`;

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
      this.state.recruitment.map(info => <NavLink to={{
        pathname:"/recruit/apply",
        state:{
          info
        }
      }}>
        <RecruitItem key = {info._id} title = {info.title}
      type = {info.type}
      leader = {info.leader} 
      startDate = {info.period.startDate} endDate= {info.period.endDate}
      recruitNum = {info.recruitNum} joinNum = {info.member.length} /></NavLink>)
      : '';
    
    return (
      <div>
        <Box>{recruitment}</Box>
      </div>
    );
  }
}

export default RecruitList;
