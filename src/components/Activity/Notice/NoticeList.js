import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import NoticeItem from './NoticeItem';
import styled from 'styled-components';

const Box = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23em, 23em));
  grid-auto-rows: minmax(23em, auto);
  grid-gap: 1.5em;
`;

const H2 = styled.h2 `
    margin-top: 1.5em;
    margin-bottom : 1.5em;
    padding-bottom : 1em;
    padding-left : 1em;
    border-bottom : 2px solid #eeeeee;
`;

class NoticeList extends Component {
    state = {
        leader:'',
        member:''
    }

    componentDidMount() {
        this.callMemberApi()
          .then(res => this.setState({member: res}))
          .catch(err => console.error(err));

        this.callLeaderApi()
            .then(res => this.setState({leader: res}))
            .catch(err => console.error(err));
    }
    
    callMemberApi = async () => {
        const response = await fetch('http://13.209.116.75:9000/api/active/status/member');
        const body = await response.json();
        return body;
    }

    callLeaderApi = async () => {
        const response = await fetch('http://13.209.116.75:9000/api/active/status/leader');
        const body = await response.json();
        return body;
    }
    
    render() {
        const leaderBoard = this.state.leader!==''?this.state.leader.map(info=><NoticeItem key = {info._id} id = {info._id} type={info.type} title = {info.title} leader={info.leader} 
            explain = {info.explain} startDate = {info.period.startDate} endDate= {info.period.endDate}
            recruitNum = {info.recruitNum} joinNum = {info.member.length} lead = {true}/>):'';
        const memberBoard = this.state.member!==''?this.state.member.map(info=><NoticeItem key = {info._id} id = {info._id} type={info.type} title = {info.title} leader={info.leader} 
            startDate = {info.period.startDate} endDate= {info.period.endDate}
            recruitNum = {info.recruitNum} joinNum = {info.member.length} lead = {false}/>):'';
        return (
            <div>
            <H2>Leader</H2>
            <Box>{leaderBoard}</Box>
            <H2>Member</H2>
            <Box>{memberBoard}</Box>
            </div>
        );
    }
}

export default withRouter(NoticeList);