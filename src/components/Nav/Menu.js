import React, { Component } from 'react';
import styled from 'styled-components';
import logo from 'lib/logo.png';
import { NavLink, withRouter } from 'react-router-dom';
import { get } from 'axios';

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
    background : rgba(255,255,255,1);
    position: fixed; 
    width: 100%;
`;

const Item = styled.li`
    font-size: 1.1em;
    color: #f36e65;
    margin: 0 1em;
    &:nth-child(1){
        margin-right:auto;
    }
    cursor:pointer;
`;


class Menu extends Component {
    handleLogout = () => {
        sessionStorage.clear();
    get('http://13.209.116.75:9000/api/users/logout').then((response) => {
        this.props.history.push("/");
    })
    .catch((err) => {
        console.log(err);
    });

}
    render(){
    return(
        <List>
            <Item><NavLink to="/" ><Logo src={logo} alt={"logo"} /></NavLink></Item>
            <Item><NavLink to="/activity">ACTIVITY</NavLink></Item>
            <Item><NavLink to="/recruit">RECRUIT</NavLink></Item>
            <Item><NavLink to="/portfolio">PORTFOLIO</NavLink></Item>
            {this.props.isSession && <Item><NavLink to="/mypage">MYPAGE</NavLink></Item>}
            <Item>{this.props.isSession ? <span onClick={this.handleLogout}>LOGOUT</span> : <NavLink to="/login">LOGIN</NavLink>}</Item>
        </List>
    );
    }
};

export default withRouter(Menu);