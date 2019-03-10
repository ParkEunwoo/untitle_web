import React, { Component } from 'react';
import styled from 'styled-components';
import MemberItem from './MemberItem';
import { get } from 'axios';

const Upperbox = styled.th`
    border-bottom: 1px solid #444444;
    padding: 10px;
    text-align: center;
    background-color: #19B3B1;
`;
const Box = styled.table`
    width: 50%;
    border-top: 3px solid #444444;
    border-bottom: 1.8px solid #444444;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

const Item =styled.div`
    margin: 20px auto 20px;
    text-align: center;
    color:black;
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
            <Item>
                <h2>구성원 정보</h2>
                <Box>
                    <Upperbox>이름</Upperbox>
                    <Upperbox>학번</Upperbox>
                    <Upperbox>전화번호</Upperbox>

                </Box>
               

                {memberList}
                
            </Item>
                
        );
    }
}

export default MemberList;