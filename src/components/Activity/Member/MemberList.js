import React, { Component } from 'react';
import MemberItem from './MemberItem';
import { get } from 'axios';


class MemberList extends Component{
    state = {
        member:[{
            name:'박은우',
            number:12345678,
            phone:'02012032134'
        },{
            name:'박은우',
            number:12345678,
            phone:'02012032134'
        },{
            name:'박은우',
            number:12345678,
            phone:'02012032134'
        },{
            name:'박은우',
            number:12345678,
            phone:'02012032134'
        }]
    }
    
    showMember = () => {
      const url = `/api/active/member/${this.props.id}`;
      return get(url);
    }
    
    componentDidMount() {
        
      this.showMember()
        .then((response) => {
            const member = response.data.member;
            this.setState({
                member
            })
            console.log(this.state.member);
        });
    }
    render(){
        const memberList = this.state.member!==''?this.state.member.map((data, id) => 
            <MemberItem key={id} name={data.name} number={data.number} phone={data.phone}/>):'';
        return(
            <ul>
                {memberList}
            </ul>
        );
    }
}

export default MemberList;