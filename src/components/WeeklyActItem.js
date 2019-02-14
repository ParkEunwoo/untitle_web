import React, { Component } from 'react';


class WeeklyActItem extends Component {

    render() {
        return (
            <div>
                <ul className="weeklyList">
                    <button>
                    {this.props.week+1}주차
                    {this.props.title}
                    </button>
                    <li>{this.props.date}</li>
                    <li>댓글 수 : {this.props.comment.length}</li>
                </ul>
                <ul className="blockHere">
                    <li>내용 : {this.props.text}</li>
                    <li>댓글보기</li>
                    <li>{this.props.comment.name}</li>
                    <li>{this.props.comment.content}</li>

                </ul>
            </div>
        );
    }
}

export default WeeklyActItem;