import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <div>
            <ul>
                <li><NavLink to="/yena">오예나</NavLink></li>
                <li><NavLink to="/jihye">서지혜</NavLink></li>
                <li><NavLink to="/jungmin">류정민</NavLink></li>
                <li><NavLink to="/junsik">오준식</NavLink></li>
                <li><NavLink to="/sungmin">김성민</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;