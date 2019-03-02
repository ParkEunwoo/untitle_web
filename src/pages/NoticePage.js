import React, { Component } from 'react';
import Notice from 'components/Activity/Notice';
import Header from 'components/Header';

class NoticePage extends Component {

  render() {
    return (
      <div>
        <Header title="게시판"/>
        <Notice/>
      </div>
    );
  }
}

export default NoticePage;
