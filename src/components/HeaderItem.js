import React from 'react';

const HeaderItem = ({match}) => {
    return (
        <div>
            <h4>{match.params.type}</h4>
            <h2>{match.params.title}</h2>
            <h3>{match.params.leader}</h3>
        </div>
    );
}

export default HeaderItem;