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
			path:'./image/1.jpg',
			size:'파일 사이즈',
			time:'파일 시간'
		}]
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
			path:'파일 경로',
			size:'파일 사이즈',
			time:'파일 시간'
		}]
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
			path:'파일 경로',
			size:'파일 사이즈',
			time:'파일 시간'
		}]
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
			path:'파일 경로',
			size:'파일 사이즈',
			time:'파일 시간'
		}]
	}
];

class CollectionList extends Component {

  render() {
    const collectionItem = collection.map(info => <CollectionItem 
    	key={info._id} title={info.title} date={info.date} content={info.content}
    	name={info.name} image={info.image.path}/>);
    return (
      <div>
        {collectionItem}
      </div>
    );
  }

}
export default CollectionList;