import React, { Component } from 'react';
import Notice from 'components/Notice';
import Header from 'components/Header';

class NoticePage extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Notice/>
      </div>
    );
  }
}

export default NoticePage;
