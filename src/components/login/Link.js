import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = () => {
    return (
        <div>
            <NavLink to = "/yena/check" > 아이디찾기 </NavLink>
            <NavLink to="/yena/check">비밀번호 찾기</NavLink> 
            <NavLink to = "/yena/signup" > 회원가입 </NavLink>
        </div>
    );
}
export default Link;