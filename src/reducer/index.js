//import

//actions

const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const CHECK = 'CHECK';
const LOG_OUT = 'LOG_OUT';
const MODIFY = 'MODIFY';

const REGIST_RECRUIT = 'REGIST_RECRUIT';
const APPLY_RECRUIT = 'APPLY_RECRUIT';
const MODIFY_RECRUIT = 'MODIFY_RECRUIT';

const WRITE_ACTIVITY = 'WRITE_ACTIVITY';
const MODIFY_ACTIVITY = 'MODIFY_ACTIVITY';
const WRITE_COMMENT = 'WRITE_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const SUBMIT_WORK = 'SUBMIT_WORK';

const REGIST_PORTFOLIO = 'REGIST_PORTFOLIO';

//action creators

signUp = () => { type: SIGN_UP };
logIn = () => { type: LOG_IN };
logOut = () => { type: LOG_OUT };
check = () => { type: CHECK };
modify = () => { type: MODIFY };

registRecruit = () => { type: REGIST_RECRUIT };
applyRecruit = () => { type: APPLY_RECRUIT };
modifyRecruit = () => { type: MODIFY_RECRUIT };

writeActivity = () => { type: WRITE_ACTIVITY };
modifyActivity = () => { type: MODIFY_ACTIVITY };
writeComment = () => { type: WRITE_COMMENT };
removeComment = () => { type: REMOVE_COMMENT };
submitWork = () => { type: SUBMIT_WORK };

registPortfolio = () => { type: REGIST_PORTFOLIO };

//reducer

const initialState = {

};

reducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_UP:
            return applySignUp(state);
        case LOG_IN:
            return applyLogin(state);
        case CHECK:
            return applyCheck(state);
        case LOG_OUT:
            return applyLogout(state);
        case MODIFY:
            return applyModify(state);
    }
}

//reducer functions

applySignUp = (state) => {
}
//export action creators

const actionCreators = {
    signUp,
    logIn,
    logOut,
    check,
    modify
};

//export reducer

export default reducer;