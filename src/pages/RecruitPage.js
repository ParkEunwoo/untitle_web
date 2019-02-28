import React, { Component } from 'react';
import {RecruitList, RecruitHeader} from 'components/Recruitment'

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
