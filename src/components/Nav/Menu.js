import React from 'react';
import styled from 'styled-components';
import logo from 'lib/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = styled.div `
    position: fixed;
    background-color: rgba(255,255,255,1);
    width : 100%
    margin-top:0;
    margin-left:0;
    margin-right:0;
    margin-bottom:2em;  
`;
const Logo = styled.img`
    height: 50px;
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    padding: 1% 0;
    margin: 0;

`;

const Item = styled.li`
    font-size: 1.1em;
    color: #f36e65;
    margin: 0 1em;
    &:nth-child(1){
        margin-right:auto;
    }
`;

const Menu = ({isSession}) => {
    return(
        <NavBar>
            <List>
                <Item><NavLink to="/" ><Logo src={logo} alt={"logo"} /></NavLink></Item>
                <Item><NavLink to="/activity">ACTIVITY</NavLink></Item>
                <Item><NavLink to="/recruit">RECRUIT</NavLink></Item>
                <Item><NavLink to="/portfolio">PORTFOLIO</NavLink></Item>
                <Item>{isSession ? <NavLink to="/mypage">MYPAGE</NavLink> : <NavLink to="/login">LOGIN</NavLink>}</Item>
            </List>
        </NavBar>
    );
};

export default Menu;