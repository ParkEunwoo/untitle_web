import React from 'react';
import Menu from './components/Menu';
import { Route,  } from 'react-router-dom';
import {
    InputActivity,
    NoticeBoard,
    ShareActivity,
    UpIndex,
    LoginPage,
    SignUpPage,
    CheckPage,
    MyPage,
    PortFolio,
    RecruitPage,
    ApplyPage,
    TimeTablePage
} from 'pages';

const App = () => {
    return (
        <div>
            <Menu />
            <Route path="/yena" component={UpIndex}/>
            <Route exact path="/yena/login" component={LoginPage} />
            <Route exact path="/yena/signup" component={SignUpPage} />
            <Route exact path="/yena/check" component={CheckPage} /> 
            <Route exact path="/junsik" component={MyPage} />
            <Route exact path="/jungmin" component={RecruitPage} />
            <Route exact path="/jungmin/apply" component={ApplyPage} />
            <Route exact path="/jungmin/timetable" component={TimeTablePage} />
            <Route exact path="/sungmin" component={PortFolio} />
            <Route exact path="/jihye/notice/share/:type/:title/:leader" component={ShareActivity}/>
            <Route exact path="/jihye/notice" component={NoticeBoard}/>
            <Route exact path="/jihye/:type/:title/:leader" component={InputActivity}/>
        </div>
    );
};

export default App;