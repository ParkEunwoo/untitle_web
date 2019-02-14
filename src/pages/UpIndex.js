import React from 'react';
import { NavLink } from 'react-router-dom';

const UpIndex = () => {
    return (
        <ul>
            <li><NavLink to="/yena/login"> Log In</NavLink></li>
            <li><NavLink to="/yena/signup"> Sign Up</NavLink></li>
            <li><NavLink to="/yena/mypage"> My Page</NavLink></li>
            <li><NavLink to="/yena/calendar"> Calender</NavLink></li>
            <li><NavLink to="/yena/portfolio"> Portfolio</NavLink></li>
            <li><NavLink to="/yena/activity"> Mentoring/Study/Project</NavLink></li>
        </ul>
    );
}

export default UpIndex;
