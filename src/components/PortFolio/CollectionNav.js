import React, { Component } from 'react';

class CollectionNav extends Component {
  render() {
    return (
    	<div class="contents">
	        <div class="head">
	          <img width="50" height="50" 
	          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6mF9qixJvB4j8yEhUZm6vxKmih0DdV7TE_IouBewYxNO_R9r" alt="profile img"></img>
	          {/*해당 블록 상단 작성자(작성자 그룹) 아이콘 및 이름 클릭시 관련 글로 다시 정렬 시킴*/}
	          <p><a href="기능수행__본인관련_피드_재정렬.html">내 이름</a></p>
	          <p><a href="기능수행_소속그룹_관련글_피드_재정렬.html">Untitle-A group</a></p>
	        </div>
	        <form>
	          <input type="checkbox" name="search" value="project"
	           class="categoryBox1" id="cb1"></input><p>활동명</p>
	          <input type="checkbox" name="search" value="team"
	           class="catagoryBox2" id="cb2"></input><p>소속명(팀명)</p>
	          <input type="date" name="startdate" 
	          class="dateBox1" id="db1"></input><br/>
	          <input type="date" name="enddate"
	          class="dateBox2" id="db2"></input><br/><br/>
	          <input type="text" name="search word" value=""
	          class="searchBox" id="sb"></input>
	          <button type="submit">검색</button>
	        </form>
	    </div>
    );
  }

}

export default CollectionNav;
