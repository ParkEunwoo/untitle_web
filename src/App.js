import React, {Component} from 'react';
import Nav from 'components/Nav';
import { Route  } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import {
    InputActivity,
    NoticePage,
    ActivityPage,
    UpIndex,
    LoginPage,
    SignUpPage,
    CheckPage,
    MyPage,
    PortFolio,
    RecruitPage,
    ApplyPage,
    ModifyPage,
    TimeTablePage,
    RegisterPage,
    MemberPage
} from 'pages';

const GlobalStyle = createGlobalStyle`
    @import url("//fonts.googleapis.com/css?family=Nanum+Gothic");
    @import url("//fonts.googleapis.com/css?family=Roboto:300");

    html,body {
        height : 100%;
        margin: 0;
    }

    body {

        height : 100%;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        &:lang(ko){
            font-family: "Nanum Gothic", sans-serif;
        }
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: inherit;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }
`;


class App extends Component{
    state = {
        userInfo:''
    }
    componentDidMount() {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        console.log(userInfo);
        this.setState({
            userInfo
        });
        console.log(this.state);
        console.log(this.state.userInfo===''?false:true);
    }
    render(){
    return (
        <div>
            <GlobalStyle />
            <Nav isSession={this.state.userInfo!==""?true:false}/>
            <Route exact path="/" component={UpIndex}/>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/check" component={CheckPage} /> 
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/recruit" component={RecruitPage} />
            <Route exact path="/recruit/register" component={RegisterPage} />
            <Route exact path="/recruit/apply" component={ApplyPage} />
            <Route exact path="/recruit/modify/:id" component={ModifyPage} />
            <Route exact path="/recruit/apply/timetable" component={TimeTablePage} />
            <Route exact path="/portfolio" component={PortFolio} />
            <Route exact path="/activity/:id/notice" component={ActivityPage}/>
            <Route exact path="/activity" component={NoticePage}/>
            <Route exact path="/activity/register" component={InputActivity}/>
            <Route exact path="/activity/:id/member" component={MemberPage}/>
        </div>
    );
    }
};

export default App;