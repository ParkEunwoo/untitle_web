import React, { Component } from 'react';
import NoticeList from 'components/NoticeList';
import Header from 'components/Header';

class NoticeBoard extends Component {

  render() {
    return (
      <div>
        <Header/>
        <NoticeList/>
      </div>
    );
  }
}

export default NoticeBoard;
