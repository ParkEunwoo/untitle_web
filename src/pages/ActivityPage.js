import React, { Component } from 'react';
import Header from 'components/Header';
import Activity from 'components/Activity';

class ActivityPage extends Component {
  render() {
    return (
      <div>
          <Header title="과목명" sub="팀장명" register="글쓰기"/>
          <Activity/>
      </div>
    );
  }
}

export default ActivityPage;
