import React from 'react';
import styled from 'styled-components';

const Contents = styled.div `
    background-color: #19B3B1;
    color : rgba(255,255,255,100);
    text-align : center;
    padding-top : 5em;
    padding-bottom : 5em;
`;

const Button = styled.button `
    font-size : 1em;
    border-radius: 30px;
    border: 2px solid #ecf0f1;
    background-color: rgba(0,0,0,0);
    color : rgba(255,255,255,100);
    cursor: pointer;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    &:focus {
    outline: none;
    }
`;

const Header = (props) => {
    return (
        <Contents>
            <h1>{props.title}</h1>
            {!!props.sub && <h2>{props.sub}</h2>}
            {!!props.register && <Button>{props.register}</Button>}
        </Contents>
    )
}

export default Header;