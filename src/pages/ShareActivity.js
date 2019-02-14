import React, { Component } from 'react';
import Header from 'components/Header';
import WeeklyActivities from 'components/WeeklyActivities';

class ShareActivity extends Component {
  render() {
    return (
      <div>
          <Header/>
          <WeeklyActivities/>
      </div>
    );
  }
}

export default ShareActivity;
