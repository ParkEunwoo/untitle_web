/*
import React from 'react';

const Header = ({match}) => {
    return (
        <div>
            <h2>{match.params.name}</h2>
            <h3>{match.params.name}</h3>
        </div>
    );
}

export default Header;*/

import React from 'react';
import {Route} from 'react-router-dom';
import HeaderItem from './HeaderItem';

const Header = () => {
    return (
        <div>
            <Route exact path="/jihye/notice/share/:type/:title/:leader" component={HeaderItem}/>
            <Route exact path="/jihye/:type/:title/:leader" component={HeaderItem}/>
        </div>
    )
}

export default Header;