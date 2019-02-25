import React, { Component } from 'react';
import RecruitList from 'components/RecruitList'
import RecruitHeader from 'components/RecruitHeader'

class RecruitPage extends Component {
  
  render() {
    return (
      <div>
        <RecruitHeader />
        <RecruitList />
      </div>
    );
  }
}

export default RecruitPage;
