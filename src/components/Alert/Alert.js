import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    margin: 0;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    background : rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Box = styled.div`
    width: 400px;
    background: white;
    height: 500px;
    display: flex;
`;


const Alert = () => {
    return(
        <Div>
            <Box></Box>
        </Div>
    )
}

export default Alert;