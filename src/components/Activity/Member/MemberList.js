import React, { Component } from 'react';
import MemberItem from './MemberItem';
import { get } from 'axios';
import styled from 'styled-components';

const Box = styled.ul`
    list-style: none;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 1em;
    border-bottom: 1px solid #f36e65;
`;
const Inbox = styled.li `
    font-size:1.2rem;
    color:#f36e65;
`;



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
            <div>
                <Box>
                    <Inbox>이름</Inbox>
                    <Inbox>학번</Inbox>
                    <Inbox>전화번호</Inbox>
                </Box>
                {memberList}
            </div>
                
        );
    }
}

export default MemberList;