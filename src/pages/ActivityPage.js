import React, { Component } from 'react';
import Header from 'components/Header';
import Activity from 'components/Activity';

class ActivityPage extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Activity/>
      </div>
    );
  }
}

export default ActivityPage;
