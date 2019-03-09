import React, { Component } from 'react';
import MemberItem from './MemberItem';
import { get } from 'axios';


class MemberList extends Component{
    state = {
        member:[
            {
                name:'',
                number:'',
                phone:''
            }
        ]
    }
    
    showMember = () => {
      const url = `/api/active/member/${this.state._id}`;
      return get(url);
    }
    
    handleSubmit = () => {
      this.showMember()
        .then((response) => {
            const member = response.member;
            this.setState({
                member
            })
        });
    }
    render(){
        const memberList = this.state.member.map(mem => 
            <li>이름: {mem.name} 학번: {mem.number}</li>);
        return(
            <ul>
                {memberList}
            </ul>
        );
    }
}

export default MemberList;