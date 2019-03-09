import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.div ` 
  width : 20em;
  height: 20em;
  box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2); 
  padding: 1.5em;
  text-align: center;
  background-color: #f8f8f8;
  margin-top : 1em;
  margin-bottom: 1.5em;
  margin-left : 1em;
  margin-right : 1em;
`;

const Type = styled.h4 `
  color: ${props => {
  if (props.type==="멘토링") return '#6EA3EA';
  else if (props.type==="스터디") return '#2859A3';
  else return '#E64F4F';
}};
`;

class RecruitItem extends Component {    
    render() {
      return (
          <Item>
            <Type type={this.props.type}>{this.props.type}</Type>
            <h2>{this.props.title}</h2>
            <h3>{this.props.leader}</h3>
            <p>
              <div>{this.props.startDate} ~ {this.props.endDate}</div>
              <div>{this.props.joinNum}/{this.props.recruitNum}명</div>
            </p>
          </Item>
      );
    }
  
  }
  
  export default RecruitItem;