import React, { Component } from 'react';
import PhoneForm from 'components/PhoneForm';
import PhoneInfoList from 'components/PhoneInfoList';
import MyPort from 'components/MyPort';

class MyPage extends Component {
  handleCreate = (data) => {
  }

  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList />
        <MyPort />
      </div>
    );
  }
}

export default MyPage;