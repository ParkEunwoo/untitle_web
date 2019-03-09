import React, { Component } from 'react';
import Member from 'components/Activity/Member';
import Header from 'components/Header';

class MemberPage extends Component {

    state = {
        title:'',
        leader:''
    }

    componentDidMount(){
        const {title, leader} = this.props.location.state;

        return this.setState({
            title, leader
        })
    }
  render() {
    return (
      <div>
        <Header title={this.state.title} sub={this.state.leader} />
        <Member id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default MemberPage;
