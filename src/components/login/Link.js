import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled.div `
    text-align : center;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    color: white;
`;

const Link = () => {
    return (
        <div>
            <Links>
                <NavLink to = "/check" > 아이디 / 비밀번호 찾기</NavLink> 
                <div>
                    <NavLink to = "/signup" > 회원가입 </NavLink>
                </div>
                
            </Links>
        </div>

    );
}
export default Link;