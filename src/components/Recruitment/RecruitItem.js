import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.div ` 
  box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2); 
  padding: 1.5em;
  text-align: center;
  background-color: #f8f8f8;
  margin-top : 1em;
  margin-bottom: 1.5em;
  margin-left : 0.5em;
  margin-right : 0.5em;
  
`;

class RecruitItem extends Component {    
    render() {
      return (
          <Item className="Item">
            <h4>{this.props.type}</h4>
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