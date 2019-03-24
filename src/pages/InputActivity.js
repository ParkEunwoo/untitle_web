import React, { Component, Fragment } from 'react';
import Header from 'components/Header';
import InputForm from 'components/Activity/Register';


class InputActivity extends Component {
  render() {
    return (
      <Fragment>
        <Header title="과목명" sub="팀장명"/>
        <InputForm id={this.props.match.params.id}/>
      </Fragment>
    );
  }
}

export default InputActivity;
