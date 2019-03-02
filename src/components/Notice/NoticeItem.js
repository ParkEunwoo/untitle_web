import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NoticeItem extends Component {
    
    render() {
        const link = `/jihye/notice/share/${this.props.type}/${this.props.title}/${this.props.leader}`;
        return (
            <div>
            <NavLink to={link}>
                <ul>
                    <li>{this.props.type}</li>
                    <li>{this.props.title}</li>
                    <li>{this.props.leader}</li>
                </ul></NavLink>
            </div>
        );
    }
}

export default NoticeItem;