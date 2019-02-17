import React, { Component } from 'react';
import PortImg from './PortImg';

const myImg = [
	{
		_id:0,
		title:'팀프로젝트_1',
		content:'자바 멘토링',
		people: [{
			name:'kim',
			number:'00000001',
			}],
		date:'2019-01-01',
		image:[{
			name:'파일 이름',
			path:'파일 경로',
			size:'파일 사이즈',
			time:'파일 시간'
		}]
	},
	{
		_id:1,
		title:'팀프로젝트_2',
		content:'자바 멘토링',
		people: [{
			name:'kim',
			number:'00000001',
			}],
		date:'2019-01-08',
		image:[{
			name:'파일 이름',
			path:'파일 경로',
			size:'파일 사이즈',
			time:'파일 시간'
		}]
	},
	{
		_id:2,
		title:'팀프로젝트_3',
		content:'자바 멘토링',
		people: [{
			name:'kim',
			number:'00000001',
			}],
		date:'2019-01-15',
		image:[{
			name:'파일 이름',
			path:'파일 경로',
			size:'파일 사이즈',
			time:'파일 시간'
		}]
	},
];

class MyPort extends Component {

  render() {
    const portImg = myImg.map(info => <PortImg 
    	key={info._id} title={info.title} date={info.date} content={info.content}
    	name={info.name} image={info.image.path}/>);
    return (
      <div>
        {portImg}
      </div>
    );
  }

}
export default MyPort;