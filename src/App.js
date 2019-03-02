import React from 'react';
import Menu from './components/Menu';
import { Route,  } from 'react-router-dom';
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
    TimeTablePage,
    RegisterPage
} from 'pages';

const GlobalStyle = createGlobalStyle`
    @import url("//fonts.googleapis.com/earlyaccess/notosanskr.css");
    @import url("//cdn.jsdelivr.net/gh/velopert/font-d2coding@1.2.1/d2coding.css");

    body {
        margin: 0;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
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

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Menu />
            <Route path="/yena" component={UpIndex}/>
            <Route exact path="/yena/login" component={LoginPage} />
            <Route exact path="/yena/signup" component={SignUpPage} />
            <Route exact path="/yena/check" component={CheckPage} /> 
            <Route exact path="/junsik" component={MyPage} />
            <Route exact path="/jungmin" component={RecruitPage} />
            <Route exact path="/jungmin/register" component={RegisterPage} />
            <Route exact path="/jungmin/register/apply" component={ApplyPage} />
            <Route exact path="/jungmin/register/apply/timetable" component={TimeTablePage} />
            <Route exact path="/sungmin" component={PortFolio} />
            <Route exact path="/jihye/notice/share/:type/:title/:leader" component={ActivityPage}/>
            <Route exact path="/jihye/notice" component={NoticePage}/>
            <Route exact path="/jihye/:type/:title/:leader" component={InputActivity}/>
        </div>
    );
};

export default App;