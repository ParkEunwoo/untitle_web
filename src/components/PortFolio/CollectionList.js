import React, { Component } from 'react';
import CollectionItem from './CollectionItem';

const collection = [
	{
		_id:0,
		title:'활동 A',
		content:'스터디 A 활동입니다.',
		people: [{
			name:'김OO',
			number:'학번'
		}],
		date:'2019-01-01 ~ 2019-02-01',
		image:[{
			name:'파일 이름',
			path:"https://images.techhive.com/images/article/2014/12/project_management-100536263-primary.idge.jpg",
			size:'파일 사이즈',
			time:'파일 시간'
		}],
		comment: [
            {
                name : '홍OO',
                content :'가나다라마',
            },
            {
                name : '서OO',
                content :'ABCDEF',
			},  
			{
                name : '박OO',
                content :'가나다라마',
			},
			{
                name : '최OO',
                content :'가나다라마',
            }
        ]
	},
	{
		_id:1,
		title:'활동 B',
		content:'스터디 B 활동입니다.',
		people: [{
			name:'이OO',
			number:'학번'
		}],
		date:'2019-01-02 ~ 2019-02-02',
		image:[{
			name:'파일 이름',
			path:"https://images.techhive.com/images/article/2014/12/project_management-100536263-primary.idge.jpg",
			size:'파일 사이즈',
			time:'파일 시간'
		}],
		comment: [
            {
                name : '홍OO',
                content :'가나다라마',
            },
            {
                name : '서OO',
                content :'ABCDEF',
			},  
			{
                name : '홍OO',
                content :'가나다라마',
            }
        ]
	},
	{
			_id:2,
		title:'활동 C',
		content:'스터디 C 활동입니다.',
		people: [{
			name:'박OO',
			number:'학번'
		}],
		date:'2019-01-03 ~ 2019-02-03',
		image:[{
			name:'파일 이름',
			path:"https://images.techhive.com/images/article/2014/12/project_management-100536263-primary.idge.jpg",
			size:'파일 사이즈',
			time:'파일 시간'
		}],
		comment: [
            {
                name : '홍OO',
                content :'가나다라마',
            },
            {
                name : '서OO',
                content :'ABCDEF',
			},  
			{
                name : '홍OO',
                content :'가나다라마',
            }
        ]
	},
	{
			_id:3,
		title:'활동 D',
		content:'스터디 D 활동입니다.',
		people: [{
			name:'최OO',
			number:'학번'
		}],
		date:'2019-01-04 ~ 2019-02-04',
		image:[{
			name:'파일 이름',
			path:"https://images.techhive.com/images/article/2014/12/project_management-100536263-primary.idge.jpg",
			size:'파일 사이즈',
			time:'파일 시간'
		}],
		comment: [
            {
                name : '홍OO',
                content :'가나다라마',
            },
            {
                name : '서OO',
                content :'ABCDEF',
			},  
			{
                name : '홍OO',
                content :'가나다라마',
            }
        ]
	}
];

class CollectionList extends Component {

  render() {
    const collectionItem = collection.map(info => <CollectionItem 
    	key={info._id} title={info.title} date={info.date} content={info.content}
		people={info.people[0].name} 
		image={info.image[0].path} 
		comment={info.comment}
		commentUser1={info.comment[0].name} comment1={info.comment[0].content}
		commentUser2={info.comment[1].name} comment2={info.comment[1].content}
		commentUser3={info.comment[2].name} comment3={info.comment[2].content} />);
    return (
      <div>
		{collectionItem}
      </div>
    );
  }

}
export default CollectionList;