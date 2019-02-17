import React, { Component } from 'react';
import 'components/PortFolio.css';
import CollectionList from 'components/CollectionList'
import CollectionNav from 'components/CollectionNav'

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
