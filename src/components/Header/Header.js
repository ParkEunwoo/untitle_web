import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Contents = styled.div `
    background-color: #19B3B1;
    color : rgba(255,255,255,100);
    text-align : center;
    padding-top: 7em;
    padding-bottom : 3.5em;
    transition: 0.4s;
`;

const Block =  styled.div `
    background-color: #19B3B1;
    color : rgba(255,255,255,100);
    text-align : center;
`;
/*
const NoBlock = styled.div `
    background-color: #19B3B1;
    text-align : center;
    padding-top:4em;
    padding-bottom : 4em;
    transition: top 0.3s;
`;*/

const Button = styled.button `
    font-size : 1em;
    border-radius: 30px;
    border: 2px solid #ecf0f1;
    background-color: rgba(0,0,0,0);
    color : rgba(255,255,255,100);
    cursor: pointer;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    &:focus {
    outline: none;
    }
`;

/*
componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}
*/

    const Header = (props) => {
    /*
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }
    ​
    shouldComponentUpdate(nextProps, nextState) {

        const top = ReactDOM.findDOMNode(this).getBoundingClientRect().top; 
        (top < 0) &&  document.getElementById("Contents").style.padding = "2em";
        return true;
    }
    ​
    ​
    handleScroll = (e) => {
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        this.setState({ scrollTop });
    };
    ​
      /*
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("Contents").style.padding = "2em";
    } else {
        document.getElementById("Contents").style.padding = "2em";
    }
    }*/
/*
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    
    handleScroll = (e) => {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
    
        this.setState({
          transform: itemTranslate
        });
    };
*/

/*
    handleScroll = () => {
        const { scrollHeight, clientHeight } = this.Contents;
        /* 앞 코드에는 비구조화 할당 문법을 사용했습니다.
        다음 코드와 같은 의미입니다.
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.cliengHeight;
        
        this.box.scrollTop = scrollHeight - clientHeight;
    };
*/
 
    return (

        <Contents>
            <Block>
                <h1>{props.title}</h1>
                {!!props.sub && <h2>{props.sub}</h2>}
                {!!props.register && <Button><Link to={props.link}>{props.register}</Link></Button>}
            </Block>
            
        </Contents>
    )
}

export default Header;