import React, { Component } from 'react';
import Modify from 'components/Recruitment/Modify';
import Header from 'components/Header';

class MemberPage extends Component {

    state = {
        type:'',
        title:'',
        explain:'',
        startDate:'',
        endDate:'',
        recruitNum:'',
    }

    componentWillMount(){
        const {type, title, explain, startDate, endDate, recruitNum} = this.props.location.state;

        return this.setState({
            type, title, explain, startDate, endDate, recruitNum
        });
        
    }
  render() {
    return (
      <div>
        <Header title='수정하기'/>
        <Modify id={this.props.match.params.id}
         type={this.state.type}
         title={this.state.title}
         explain={this.state.explain}
         startDate={this.state.startDate}
         endDate={this.state.endDate}
         recruitNum={this.state.recruitNum}/>
      </div>
    );
  }
}

export default MemberPage;
