import React from 'react';
import styled from 'styled-components';

const Box = styled.ul`
    list-style: none;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 1em;
    border-bottom: 1px solid #bdc3c7;
    background-color:#ecf0f1;
`;
const Inbox = styled.li `
    font-size:1.2rem;
    color: #2c3e50;
`;



const MemberItem = (props) => {
    return(
        <Box>
            <Inbox>{props.name}</Inbox>
            <Inbox>{props.number}</Inbox>
            <Inbox>{props.phone}</Inbox>
        </Box>
    );
}

export default MemberItem;