import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NoticeItem extends Component {
    render() {
        return (
            <div>
            <NavLink to="/jihye/notice/share">
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