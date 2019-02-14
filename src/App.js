import React from 'react';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import {
    InputActivity,
    NoticeBoard,
    ShareActivity,
    UpIndex,
    LoginPage,
    SignUpPage,
    CheckPage
} from 'pages';

const App = () => {
    return (
        <div>
            <Menu />
            <Route path="/yena" component={UpIndex}/>
            <Route exact path="/yena/login" component={LoginPage} />
            <Route exact path="/yena/signup" component={SignUpPage} />
            <Route exact path="/yena/check" component={CheckPage} />{/* 
            <Route exact path="/yena/mypage" component={MyPage} />
            <Route exact path="/yena/calendar" component={Calendar} />
            <Route exact path="/yena/portfolio" component={PortFolio} />
            <Route exact path="/yena/activity" component={Activity} /> */}
            <Route exact path="/jihye" component={InputActivity}/>
            <Route exact path="/jihye/notice" component={NoticeBoard}/>
            <Route exact path="/jihye/notice/share" component={ShareActivity}/>
        </div>
    );
};

export default App;