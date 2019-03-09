import React from 'react';

const MemberItem = (props) => {
    return(
        <div>
            이름 : {props.name}
            학번 : {props.number}
            전화번호 : {props.phone}
        </div>
    );
}

export default MemberItem;