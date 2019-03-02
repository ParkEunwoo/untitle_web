import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div `
  display : flex;
  flex-direction : row ;
`;
/*
const Item = styled.div `
  display : flex;
  flex-direction : column;
`;*/

class RecruitItem extends Component {    
    render() {
      return (
        <Box>
          <div>
            <h4>{this.props.type}</h4>
            <h2>{this.props.title}</h2>
            <h3>{this.props.leader}</h3>
            <p>
              <span>{this.props.startDate} ~ {this.props.endDate}</span>
              <span>{this.props.joinNum}/{this.props.recruitNum}명</span>
            </p>
          </div>
        </Box>

      );
    }
  
  }
  
  export default RecruitItem;