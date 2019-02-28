import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class RecruitHeader extends Component {
    render(){
        return(
            <div className = "recruitHeader">
                <h1>RECRUITMENT</h1>
                <button><NavLink to="/jungmin/register">등록</NavLink></button>
            </div>
        );
    }
}

export default RecruitHeader;