import React, { Component } from 'react';
import more from 'lib/more.png';
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

const More = styled.img `
  width : 1em;
  height : auto;
  float: right;
  border-radius : 200%;

  &:hover {
    background-color : #eeeeee;
  }
`;

const Button = styled.button `
    font-size : 1em;
    border-radius: 30px;
    border: 2px solid #ecf0f1;
    background-color: rgba(0,0,0,0);
    color : rgba(255,255,255,100);
    cursor: pointer;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    &:focus {
    outline: none;
    }
`;
class RecruitItem extends Component {    
/*
  handleChange = () => {
    var x = document.getComponent("Button");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
      getCom
    }
  }
  }*/
    render() {
      return (
          <Item>
            <span>
            <More src={more} alt="더보기" onClick={this.handleChange}></More>
            <Type type={this.props.type}>{this.props.type}</Type>
            </span>
            <h2>{this.props.title}</h2>
            <h3>{this.props.leader}</h3>
            <p>
              <div>{this.props.startDate} ~ {this.props.endDate}</div>
              <div>{this.props.joinNum}/{this.props.recruitNum}명</div>
            </p>
            <Button></Button>
          </Item>
        

      );
    }
  
  }
  
  export default RecruitItem;