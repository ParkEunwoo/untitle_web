import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { put } from 'axios';
import styled from 'styled-components';


const Box = styled.div `
  border: 1px solid #d9dbdb;
  background-color: white;
  margin-top: 3em;
  margin-left: 10em;
  margin-right: 10em;
  margin-bottom:3em;

`;

const BoxTop = styled.h2 `
  margin: 0;
  color: #ffffff;
  font-weight: bold;
  padding: 1em 2em;
  width :100%;
  border-bottom: 1px solid #d9dbdb;
  background-color: #034B61 ;
`;

const Contents = styled.ul `
  list-style: none;
  margin : 0;

`;

const Items = styled.li `
  margin-top : 2em;
  margin-bottom :  2em;
`;

const Title = styled.span `
  font-weight : bold;
`;

const Button = styled.button `
  color : #ffffff;
  background-color : #000000;
  border : none;
  text-align: center;
  text-decoration: none;
  margin-top: 2em;
  margin-bottom : 2em;
  padding : 0.5em 2em;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

class Apply extends Component{
  state = {
    _id:'',
    explain:'',
    period:{
      startDate:'',
      endDate:''
    },
    type:'',
    recruitNum:0,
    joinNum:0
  }

  componentDidMount(){
    const {_id, explain, period, type, recruitNum, member} = this.props.location.state.info;

    return this.setState({
      _id, explain, period, type, recruitNum, joinNum:member.length
    });
  }

  applyRecruit = () => {
    const url = `http://13.209.116.75:9000/api/recruit/apply/${this.state._id}`;
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    return put(url, userInfo);
  }

  handleSubmit = () => {
    this.applyRecruit()
      .then((response) => {
        this.props.history.push('/recruit');
      });
  }

  render() { 
    return (
      <Box>
        <BoxTop>상세설명</BoxTop>
        <Contents>
            <Items>{this.state.explain.split('\n').map( line => {
              return(<span>{line}<br/></span>);
            })}</Items>
            <Items><Title>활동기간</Title> {this.state.period.startDate}~{this.state.period.endDate}</Items>
            <Items><Title>모집인원</Title> {this.state.joinNum} / {this.state.recruitNum}</Items>
            <Button onClick={this.handleSubmit}>신청</Button>
        </Contents>
      </Box>
    );
  }


}

export default withRouter(Apply);