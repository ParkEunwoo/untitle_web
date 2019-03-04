import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { put } from 'axios';


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
    const {_id, explain, period, type, recruitNum, joinNum} = this.props.location.state.info;

    return this.setState({
      _id, explain, period, type, recruitNum, joinNum
    });
  }

  applyRecruit = () => {
    const url = `/api/recruit/apply/${this.state._id}`;
    return put(url);
  }

  handleSubmit = () => {
    this.applyRecruit()
      .then((response) => {
        this.props.history.push('/recruit');
      });
  }

  render() { 
    return (
      <div>
          <div>{this.state.explain}</div>
          <div>활동기간 {this.state.period.startDate}~{this.state.period.endDate}</div>
          <div>모집인원 {this.state.joinNum} / {this.state.recruitNum}</div>
          <button onClick={this.handleSubmit}>신청</button>
      </div>
    );
  }


}

export default withRouter(Apply);