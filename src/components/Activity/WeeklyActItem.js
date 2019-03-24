import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div `
    margin : 0;
    border-bottom: 1px solid #d9dbdb;
`;

const NoneBlock = styled.ul `
    list-style : none;
`;

const Block = styled.ul `
    list-style : none;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
`;

const H2 = styled.h2 `
    color : #325CB0; 
`;

const Span = styled.span `
    margin-left : 1%;
`;

const Span2 = styled.span `
    color: #B0B0B0;
`;
class WeeklyActItem extends Component {
    handleChange = () => {/*
        if(this.block.style.display==="none") {
            this.block.style.display="block";
        }
        else {
            this.block.style.display="none";
        }*/
        var acc = document.getElementsByClassName("weeklyList");
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
                <NoneBlock className="weeklyList" onClick={this.handleChange}>
                    <H2>[{this.props.week} 주차] <Span>{this.props.title}</Span></H2>
                    <Span2><li>등록일 : {this.props.date.replace('T', ' ').substr(0, 19)}</li></Span2>
                </NoneBlock>
                <Block className="blockHere" ref={(ref) => this.block=ref}>
                    <h3>내용</h3>
                    <li>{this.props.content&&this.props.content.split('\n').map( line => {
              return(<span>{line}<br/></span>);
            })}</li>
                </Block>
            </Div>
        );
    }
}

export default WeeklyActItem;