import React, { Component } from 'react';
import WeeklyActItem from './WeeklyActItem';
import styled from 'styled-components';

const Box = styled.div `
  border: 1px solid #d9dbdb;
  background-color: white;
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 4%;
`;

const BoxTop = styled.h2 `
  margin: 0;
  color: #ffffff;
  font-weight: bold;
  padding: 2.5% 4%;
  width :100%;
  border-bottom: 1px solid #d9dbdb;
  background-color: #034B61 ;
`;

const content = [
    {
        week:0,
        title:'제목1',
        date:'2019-03-15',
        text:'활동내용',
        file: [
            {
                fileName : '파일이름',
                filePath  : '파일경로',
                fileSize : '파일사이즈',
                fileTime : '파일시간'
            }
        ],
        comment: [
            {
                name : '서지혜',
                content :'Aaaaa'
            
            },
            {
                name : '서지혜',
                content :'Aaaaa'
            }
        ]
    },
    {
        week:1,
        title:'제목2',
        date:'2019-03-16',
        text:'활동내용2',
        file: [
            {
                fileName : '파일이름',
                filePath  : '파일경로',
                fileSize : '파일사이즈',
                fileTime : '파일시간'
            }
        ],
        comment: [
            {
                name : '서지혜',
                content :'Aaaaa',
            },
            {
                name : '서지혜',
                content :'Aaaaa',
            }
        ]
    },
    {
        week:2,
        title:'제목3',
        date:'2019-03-17',
        text:'활동내용3',
        file: [
            {
                fileName : '파일이름',
                filePath  : '파일경로',
                fileSize : '파일사이즈',
                fileTime : '파일시간'
            }
        ],
        comment: [
            {
                name : '서지혜',
                content :'Aaaaa',
            },
            {
                name : '서지혜',
                content :'Aaaaa',
            }
        ]
    }
];

class WeeklyActivities extends Component {
    render() {
        const weeklist = content.map(content=><WeeklyActItem  key = {content.week} week = {content.week} title = {content.title} date = {content.date} text = {content.text} 
            file ={content.file} comment = {content.comment}/>);
        return (
            <Box>
                <BoxTop>주차별 활동 내용</BoxTop>
                {weeklist}
            </Box>
        );
    }
}

export default WeeklyActivities;