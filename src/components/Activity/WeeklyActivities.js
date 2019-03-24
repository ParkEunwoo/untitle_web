import React, { Component } from 'react';
import WeeklyActItem from './WeeklyActItem';
import { get } from 'axios';
import styled from 'styled-components';

const Box = styled.div `
  border: 1px solid #d9dbdb;
  background-color: white;
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 4%;
  @media (max-width: 640px) {
  margin: 0;
  }
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

class WeeklyActivities extends Component {
    state = {
        activity: ''
    }

    showActivity = () => {
      const url = `http://13.209.116.75:9000/api/active/week/${this.props.id}`;
      return get(url);
    }
    
    componentDidMount() {
        
      this.showActivity()
        .then((response) => {
            const activity = response.data.activity;
            this.setState({
                activity
            })
            console.log(this.state.activity);
        });
    }
    render() {
        const weeklist = this.state.activity?
        this.state.activity.map(content=><WeeklyActItem  key = {content.week} week = {content.week} title = {content.title} date = {content.date} content = {content.content} 
            />):
            '';
        return (
            <Box>
                <BoxTop>주차별 활동 내용</BoxTop>
                {weeklist}
            </Box>
        );
    }
}

export default WeeklyActivities;