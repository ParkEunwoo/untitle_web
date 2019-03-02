import React, { Component } from 'react';
import 'components/PortFolio.css';
import { CollectionNav, CollectionList } from 'components/PortFolio';

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
