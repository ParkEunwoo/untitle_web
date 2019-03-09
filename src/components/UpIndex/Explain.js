import React from 'react';
import background from 'lib/background.png';
import rect from 'lib/rect.png';
import text from 'lib/text.png';
import styled from 'styled-components';

const Div = styled.div`
    width:100%;
    height:auto;
    background: #034b61;
    padding-bottom: 120em;
`;

const Span = styled.span `

    display:flex;
    flex-direction : row;
    align-items:center;
    justify-content : center;
    transform : translateY(-107.5%);
`;
/*
const Back = styled.img`
    width:100%;
    height:auto;
    margin-top : 5em;
`;*/
/*
const Back = styled.img`
    width:100%;
    height:auto;
    margin-top : 5em;
    display:inline;
    text-align : center;
`;*/

const Back = styled.img`
    width:100%;
    height:auto;
    display:inline; 
`;


/*
const Rect = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:25%;
    height:auto;
`;*/
/*
const Rect = styled.img`
    display : block;
    margin-left : auto;
    margin-right : auto;
    width:25%;
    height:auto;
`;*/
/*
1const Rect = styled.img`
    float: left;
    transform: translate(150%,-105%);
    width:25%;
    height:auto;
    display : inline;
`;*/
/*2const Rect = styled.img`
    display : block;
    margin-left : auto;
    margin-right : auto;
    transform: translateY(-105.5%);
    width:25%;
    height:auto;

`;*/
const Rect = styled.img`
    transform: translateX(55%);
    width:25%;
    height:auto;

`;


const Text = styled.img`
    transform: translateX(-27.5%);
    width:35%;
    height:auto; 

`;
/*2const Text = styled.img`
    display:block;
    margin-left:auto;
    margin-right:auto;
    transform: translate(17.5%,-305%);
    width:35%;
    height:auto; 

`;*/
/*1const Text = styled.img`
    float :right;
    transform: translate(-75%,-138%);
    width:35%;
    height:auto; 
    display : inline;
`;*/
/*
const Text = styled.img`
    display:block;
    margin-left:auto;
    margin-right:auto;
    width:35%;
    height:auto; 
`;*/

/*
const Text = styled.img`
    position: absolute;
    top: 51%;
    left: 59%;
    transform: translate(-59%, -51%);
    width:35%;
    height:auto; 
`;
*/
const Explain = () => {
    return (
        <Div>
            
            <Back src={background} alt="배경이미지"/>
            <Span>
            <Rect src={rect} alt="상자" />
            <Text src={text} alt="글로벌미디어학부 알고리즘 소모임" />
            </Span>
        </Div>
    );
}
export default Explain;