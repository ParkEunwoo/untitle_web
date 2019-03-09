import React, { Component } from 'react';
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

const activity = [
    {
        id : 0,
        type : '멘토링1',
        title : '과목이름1',
        leader : '팀장이름1'
    },
    {
        id : 1,
        type : '멘토링2',
        title : '과목이름2',
        leader : '팀장이름2'
    },
    {
        id : 2,
        type : '멘토링3',
        title : '과목이름3',
        leader : '팀장이름3'
    }
];


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
        const response = await fetch('/api/active/status/member');
        const body = await response.json();
        return body;
    }

    callLeaderApi = async () => {
        const response = await fetch('/api/active/status/leader');
        const body = await response.json();
        return body;
    }
    
    render() {
        const leaderBoard = this.state.leader!==''?this.state.leader.map(info=><NoticeItem key = {info._id} type={info.type} title = {info.title} leader={info.leader} 
            startDate = {info.period.startDate} endDate= {info.period.endDate}
            recruitNum = {info.recruitNum} joinNum = {info.member.length} lead = {true}/>):
        activity.map(activity=><NoticeItem key = {activity.id} id = {activity.id} type={activity.type} title={activity.title} leader={activity.leader} lead = {true}/>);
        const memberBoard = this.state.member!==''?this.state.member.map(info=><NoticeItem key = {info._id} type={info.type} title = {info.title} leader={info.leader} 
            startDate = {info.period.startDate} endDate= {info.period.endDate}
            recruitNum = {info.recruitNum} joinNum = {info.member.length} lead = {false}/>):
        activity.map(activity=><NoticeItem key = {activity.id} id = {activity.id} type={activity.type} title={activity.title} leader={activity.leader} lead = {false}/>);
        return (
            <div>
            <H2>Leader</H2>
            <Box name="leaderBoard">{leaderBoard}</Box>
            <H2>Member</H2>
            <Box name="memberBoard">{memberBoard}</Box>
            </div>
        );
    }
}

export default NoticeList;