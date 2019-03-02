import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {console.log(true&&'a')}
            {!!props.sub && <h2>{props.sub}</h2>}
            {!!props.register && <button>{props.register}</button>}
        </div>
    )
}

export default Header;