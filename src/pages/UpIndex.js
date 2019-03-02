import React from 'react';
import { NavLink } from 'react-router-dom';

const UpIndex = () => {
    return (
        <ul>
            <li><NavLink to="/login"> Log In</NavLink></li>
            <li><NavLink to="/signup"> Sign Up</NavLink></li>
            <li><NavLink to="/mypage"> My Page</NavLink></li>
            <li><NavLink to="/portfolio"> Portfolio</NavLink></li>
            <li><NavLink to="/activity"> Mentoring/Study/Project</NavLink></li>
        </ul>
    );
}

export default UpIndex;
