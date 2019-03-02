import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CollectionItem extends Component {
  render() {
    return (
        <div className="collection">
          <div className="head">
              {/*해당 블록 상단 작성자(작성자 그룹) 아이콘 및 이름 클릭시 관련 글로 다시 정렬 시킴*/}
              <NavLink to="기능수행_작성자_관련글_피드_재정렬.html"> 
              <img width="50" height="50" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6mF9qixJvB4j8yEhUZm6vxKmih0DdV7TE_IouBewYxNO_R9r"
              alt="profile img"></img>
              </NavLink>
              <p><NavLink to="기능수행_작성자_관련글_피드_재정렬.html">작성자</NavLink></p>
              <p><NavLink to="기능수행_그룹_관련글_피드_재정렬.html">Untitle-A group</NavLink></p>
          </div>
          <NavLink to="이미지 커짐.html">
            <img src={this.props.image}
             alt="project img"></img>
          </NavLink>
          <NavLink to="해당 프로젝트 페이지.html">
            <h3>{this.props.title}</h3>
            <p>{this.props.date}</p>
            <p>활동 내용 : {this.props.content}</p>
            <p>활동 인원 : {this.props.people}</p>
          </NavLink>
          <ul>
            <NavLink to="댓글 늘어남.html">
            <li>댓글 {this.props.comment.length-3}개 더 보기</li>
            </NavLink>
            <li><b>{this.props.commentUser1}</b> {this.props.comment1}</li>
            <li><b>{this.props.commentUser2}</b> {this.props.comment2}</li>
            <li><b>{this.props.commentUser3}</b> {this.props.comment3}</li>
          </ul>
        </div>
    );
  }
}
export default CollectionItem;
