import React from 'react';
import styled from 'styled-components';
import logo from 'lib/logo.png';
import { NavLink } from 'react-router-dom';

const Logo = styled.img`
    height: 50px;
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    padding-bottom:1%;
    border-bottom: gray 1px solid;
`;

const Item = styled.li`
    font-size: 1.2em;
    color: #f36e65;
`;

const Menu = ({isSession}) => {
    return(
        <List>
            <Item><Logo src={logo} alt={"logo"} /></Item>
            <Item><NavLink to="/activity">ACTIVITY</NavLink></Item>
            <Item><NavLink to="/recruit">RECRUIT</NavLink></Item>
            <Item><NavLink to="/portfolio">PORTFOLIO</NavLink></Item>
            <Item>{isSession ? <NavLink to="/mypage">MYPAGE</NavLink> : <NavLink to="/login">LOGIN</NavLink>}</Item>
        </List>
    );
};

export default Menu;