import React, { Fragment } from 'react';
import Register from 'components/Recruitment/Register';
import Header from 'components/Header';

const RegisterPage = () => {
    return(
        <Fragment>
            <Header title="등록하기"/>
            <Register />
        </Fragment>
    );
};

export default RegisterPage;