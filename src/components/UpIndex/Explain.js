import React, { Component } from 'react';
import background from 'lib/background.png';
import rect from 'lib/rect.png';
import text from 'lib/text.png';
import styled from 'styled-components';

const Div = styled.div`
    width:100%;
    background: #034b61;
    padding-bottom: 4%;
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
    margin: 0;
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
    transform: translateX(60%);
    width:25%;
    height:auto;
    margin: 0;

`;


const Text = styled.img`
    transform: translateX(-22.5%);
    width:35%;
    height:auto; 
    margin: 0;
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
const Explains = styled.div `
    margin-top: -22.5%;
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`;
const Info = styled.div `
    color: #ffffff;
    font-size: 2em;
    padding : 1%;
    margin-left: 2%;
    margin-right: 2%;

    &: hover {
        background-color: #023848;
        border-radius : 12px;
    }
    &: active {
        background-color: #023848;
        border-radius : 12px;
    }

    cursor : pointer;
    transition : 0.4s;
`;

const Block = styled.div `
    overflow: hidden;
    color : #ffffff;
    font-size : 1.2em;
    max-height: 0;
    transition: 0.2s ease-out;
`;
/*
const Img = styled.img `
    color: #ffffff;
    width: 3%;
    height: auto;
`;*/


class Explain extends Component {
    handleChange = () => {
        var acc = document.getElementsByClassName("Info");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var block = this.nextElementSibling;
            if (block.style.maxHeight){
              block.style.maxHeight = null;
            } else {
              block.style.maxHeight = block.scrollHeight + "px";
            } 
          });
        }
        
      }
    render() {
        return (
            <Div>
                <Back src={background} alt="배경이미지"/>
                <Span>
                <Rect src={rect} alt="상자" />
                <Text src={text} alt="글로벌미디어학부 알고리즘 소모임" />
                </Span>
                <Explains>
                    <Info className="Info" onClick={this.handleChange}>멘토링/스터디/프로젝트 등록하기</Info>
                        <Block>
                            <p>Recruit > 등록버튼 누르기</p>
                        </Block>
                    <Info className="Info"  onClick={this.handleChange}>멘토링/스터디/프로젝트 신청하기</Info>
                        <Block>
                            <p>Recruit > 원하는 멘토링/스터디/프로젝트 박스 누르기 > 신청</p>
                        </Block> 
                    <Info className="Info"  onClick={this.handleChange}>신청한 구성원 정보 보는 방법</Info>
                        <Block>
                            <p>Activity > Leader게시판 중 더보기 버튼 누르기 > 구성원 정보</p>
                        </Block>
                </Explains>
                
            </Div>
        );
    }
}
export default Explain;