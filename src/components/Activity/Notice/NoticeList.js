import React, { Component } from 'react';
import NoticeItem from './NoticeItem';
import styled from 'styled-components';

const Box = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23em, 23em));
  grid-auto-rows: minmax(23em, auto);
  grid-gap: 1.5em;
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
    render() {
        const noticeboard = activity.map(activity=><NoticeItem key = {activity.id} id = {activity.id} type={activity.type} title={activity.title} leader={activity.leader}/>)
        return (
            <div>
                <Box>{noticeboard}</Box>
            </div>
        );
    }
}

export default NoticeList;