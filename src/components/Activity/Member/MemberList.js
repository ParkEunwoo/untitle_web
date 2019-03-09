import React from 'react';
import MemberItem from './MemberItem';
import { get } from 'axios';

const member = {
    name:'',
    number:'',
    phone:''
}

const MemberList = () => {
    return(
        <div>
            <MemberItem></MemberItem>
        </div>
    );
}

export default MemberList;