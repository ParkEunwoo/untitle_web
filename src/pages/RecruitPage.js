import React, { Component, Fragment } from 'react';
import RecruitList from 'components/Recruitment';
import Header from 'components/Header';

class RecruitPage extends Component {
  
  render() {
    return (
      <Fragment>
        <Header title="RECRUITMENT" register="등록" />
        <RecruitList />
      </Fragment>
    );
  }
}

export default RecruitPage;
