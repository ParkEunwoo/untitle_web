import React, { Fragment, Component } from 'react';
import Apply from 'components/Recruitment/Apply';
import Header from 'components/Header';
/*
const ApplyPage = () => {
    return(
        <Fragment>
            <Header title="과목명" sub="팀장명" />
            <Apply />
        </Fragment>
    );
};*/

class ApplyPage extends Component {

    state = {
        title:'',
        leader:''
    }

    componentDidMount(){
        const {title, leader} = this.props.location.state.info;

        return this.setState({
            title, leader
        })
    }

    render(){
        return(
            <Fragment>
                <Header title={this.state.title} sub={this.state.leader} />
                <Apply />
            </Fragment>
        );
    }
};

export default ApplyPage;