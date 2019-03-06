import React, { Component } from 'react';
import NoticeItem from './NoticeItem';

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
        active:''
    }

    componentDidMount() {
      this.callApi()
        .then(res => this.setState({active: res}))
        .catch(err => console.error(err));
    }
    
    callApi = async () => {
      const response = await fetch('/api/active/status');
      const body = await response.json();
      return body;
    }
    
    render() {
        const noticeboard = this.state.active!==''?this.state.active.map(info=><NoticeItem key = {info._id} type={info.type} title = {info.title} leader={info.leader} 
            startDate = {info.period.startDate} endDate= {info.period.endDate}
            recruitNum = {info.recruitNum} joinNum = {info.member.length/2} />):
        activity.map(activity=><NoticeItem key = {activity.id} id = {activity.id} type={activity.type} title={activity.title} leader={activity.leader}/>);
        return (
            <div>
                {noticeboard}
            </div>
        );
    }
}

export default NoticeList;