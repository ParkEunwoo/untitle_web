import React, { Component, Fragment } from 'react';
import Header from 'components/Header';
import Activity from 'components/Activity';

class ActivityPage extends Component {
  render() {
    return (
      <Fragment>
          <Header title="과목명" sub="팀장명" register="글쓰기" link={`/activity/register/${this.props.match.params.id}`}/>
          <Activity id={this.props.match.params.id}/>
      </Fragment>
    );
  }
}

export default ActivityPage;
