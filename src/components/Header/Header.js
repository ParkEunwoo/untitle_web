import React from 'react';
import styled from 'styled-components';

const Contents = styled.div `
    background-color: #19B3B1;
    color : rgba(255,255,255,100);
    text-align : center;
    padding-top : 5em;
    padding-bottom : 5em;
`;

const Header = (props) => {
    return (
        <Contents>
            <h1>{props.title}</h1>
            {!!props.sub && <h2>{props.sub}</h2>}
            {!!props.register && <button>{props.register}</button>}
        </Contents>
    )
}

export default Header;