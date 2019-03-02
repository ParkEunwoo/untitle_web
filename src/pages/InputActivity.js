import React, { Component, Fragment } from 'react';
import Header from 'components/Header';
import InputForm from 'components/InputForm';


class InputActivity extends Component {
  render() {
    return (
      <Fragment>
        <Header title="과목명" sub="팀장명"/>
        <InputForm/>
      </Fragment>
    );
  }
}

export default InputActivity;
