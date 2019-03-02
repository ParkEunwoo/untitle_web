import React, { Component, Fragment } from 'react';
import 'components/PortFolio.css';
import Header from 'components/Header';
import { CollectionNav, CollectionList } from 'components/PortFolio';

class PortFolio extends Component {
  render() {
    return (
      <Fragment>
        <Header title="PORTFOLIO" />
        <CollectionNav/>
        <CollectionList/>
      </Fragment>
    );
  }
}

export default PortFolio;
