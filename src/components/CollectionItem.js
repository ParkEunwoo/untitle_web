import React, { Component } from 'react';

class CollectionItem extends Component {
  render() {
    return (
        <div class="collection">
          <div class="head">
            {/*해당 블록 상단 작성자(작성자 그룹) 아이콘 및 이름 클릭시 관련 글로 다시 정렬 시킴*/}
            <a href="기능수행_작성자_관련글_피드_재정렬.html"> 
            <img width="50" height="50" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6mF9qixJvB4j8yEhUZm6vxKmih0DdV7TE_IouBewYxNO_R9r"
            alt="profile img"></img></a>
            <p><a href="기능수행_작성자_관련글_피드_재정렬.html">작성자</a></p>
            <p><a href="기능수행_그룹_관련글_피드_재정렬.html">Untitle-A group</a></p>
          </div>

          <a href="이미지 커짐.html">
            <img src="https://images.techhive.com/images/article/2014/12/project_management-100536263-primary.idge.jpg"
             alt="project img"></img></a>
            }
          <a href="해당 프로젝트 페이지.html">
          <h3>{this.props.title}</h3>
            <p>{this.props.date}</p>
            <p>활동 내용 : {this.props.content}</p>
            <p>활동 인원 : {this.props.people}</p>
          </a>
          <li><b>댓글작성자</b> 댓글내용</li>
          <li><b>댓글작성자</b> 댓글내용</li>
          <li><b>댓글작성자</b> 댓글내용</li>
        </div>

    );
  }

}

export default CollectionItem;
