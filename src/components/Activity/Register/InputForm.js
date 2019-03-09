import React, { Component } from 'react';

class InputForm extends Component {

    state = {
        week: 1,
        title:'',
        content : '',
        file : {
          data: null,
          name: ''  
        },
        work : {
            title:'',
            content:''
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
          [e.target.name]: value
        });
    }

    handleWorkChange = (e) => {
        const value = e.target.value;
        
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            work:{
                [e.target.name] : value
            }
        });
        console.log(this.state);
    }

    handleFileChange = (e) => {

    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
                <form>
                    <div>
                    <input type="number" 
                    value={this.state.week}
                    onChange={this.handleChange} 
                    name="week" min="1" placeholder="1"/>주차

                    <input type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title" placeholder="제목"/></div>

                    <div>
                    <textarea
                    name="content"
                    value = {this.state.content}
                    onChange={this.handleChange} 
                    placeholder="내용을 입력하세요"/></div>

                    <div>과제 : <input type="text" 
                    value = {this.state.work.title}
                    onChange={this.handleWorkChange}
                    name="title"/>
                    내용 : <textarea
                    value = {this.state.work.content}
                    onChange={this.handleWorkChange}
                    name="content" />
                   </div>

                    <div>첨부파일
                    </div>
                    <button type="submit"
                    onClick={this.handleSubmit}>저장</button>
                </form>
        );
    }
}

export default InputForm;