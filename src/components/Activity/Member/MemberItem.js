import React from 'react';
import styled from 'styled-components';

const Box = styled.table`
    width: 50%;
    border-top: 0.5px solid #444444;
    border-bottom: 0.3px solid #444444;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;
const Inbox = styled.td `
    border-bottom: 1px solid #444444;
    padding: 10px;
    text-align: center;
    background-color: rgba(25,179,177,20%);
`;



const MemberItem = (props) => {
    return(
        
        <body>
            <Box>
                <tbody>
                    <Inbox>{props.name}</Inbox>
                    <Inbox>{props.number}</Inbox>
                    <Inbox>{props.phone}</Inbox>
                </tbody>
            </Box>
        </body>
        /*
        <div>
            <li>이름 학번 전화번호</li>
            <ul>
                <li>{props.name}</li>
                <li>{props.number}</li>
                <li>{props.phone}</li>
            </ul>
        </div>*/
    );
}

export default MemberItem;