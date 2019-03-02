import React, { Component } from 'react';
import 'components/PortFolio.css';
import { CollectionNav, CollectionList } from 'components/PortFolio';

class PortFolio extends Component {
  render() {
    return (
    <div class="content">
		<div class="submenu">
			<nav>
				<ul>
		  			<CollectionNav/>
		  		</ul>
		  	</nav>
	    </div>
	    <div class="grid-container">
	      <CollectionList/>
	    </div>
    </div>
    );
  }
}

export default PortFolio;
