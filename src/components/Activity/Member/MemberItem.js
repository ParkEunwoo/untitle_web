import React from 'react';

const MemberItem = (props) => {
    return(
        <div>
            <span>이름 : {props.name}</span>
            <span>학번 : {props.number}</span>
            <span>전화번호 : {props.phone}</span>
        </div>
    );
}

export default MemberItem;