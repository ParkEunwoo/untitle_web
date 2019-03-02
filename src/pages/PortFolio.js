import React, { Component } from 'react';
import 'components/PortFolio.css';
import CollectionList from 'components/CollectionList'
import CollectionNav from 'components/CollectionNav'

class PortFolio extends Component {
  render() {
    return (
    <div className="content">
      <div className="submenu">
        <CollectionNav/>
      </div>
      <div className="grid-container">
        <CollectionList/>
      </div>
    </div>
    );
  }
}

export default PortFolio;
