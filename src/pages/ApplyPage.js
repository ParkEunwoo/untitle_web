import React, { Fragment } from 'react';
import Apply from 'components/Recruitment/Apply';
import Header from 'components/Header';

const ApplyPage = () => {
    return(
        <Fragment>
            <Header title="과목명" sub="팀장명" />
            <Apply />
        </Fragment>
    );
};

export default ApplyPage;