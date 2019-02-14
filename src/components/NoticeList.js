import React, { Component } from 'react';
import NoticeItem from './NoticeItem';

const activity = [
    {
        id : 0,
        type : '멘토링',
        title : '과목이름',
        leader : '팀장이름'
    },
    {
        id : 1,
        type : '멘토링',
        title : '과목이름',
        leader : '팀장이름'
    },
    {
        id : 2,
        type : '멘토링',
        title : '과목이름',
        leader : '팀장이름'
    }
];




class NoticeList extends Component {
    render() {
        const noticeboard = activity.map(activity=><NoticeItem key = {activity.id} type={activity.type} title={activity.title} leader={activity.leader}/>)
        return (
            <div>
                {noticeboard}
            </div>
        );
    }
}

export default NoticeList;