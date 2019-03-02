import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <div>
            <ul className='menuList'>
                <li className="menuItem"><NavLink to="/yena">오예나</NavLink></li>
                <li className="menuItem"><NavLink to="/jihye/notice">서지혜</NavLink></li>
                <li className="menuItem"><NavLink to="/jungmin">류정민</NavLink></li>
                <li className="menuItem"><NavLink to="/junsik">오준식</NavLink></li>
                <li className="menuItem"><NavLink to="/sungmin">김성민</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;