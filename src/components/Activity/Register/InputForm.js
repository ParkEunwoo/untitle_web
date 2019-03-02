import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class InputForm extends Component {

    state = {
        nth_week:1,
        title:'',
        text : '',
        date : '',
        isFile : false,
        file : [
            {
                fileName : 'ㄹㄴ',
                filePath : 'ㅀㄹㅇ',
                fileSize : 'ㅀㄶ',
                fileTime : 'ㅀㅎㅇㄹ'
            }
        ],
        isWork : false
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                    <input type="number" 
                    value={this.state.nth_week}
                    onChange={
                        (e)=>{
                            this.setState({
                                nth_week: e.target.value
                            })
                        }
                    } 
                    name="n-th_week" min="1" placeholder="1"/>주차

                    <input type="text" value={this.state.title}
                    onChange={
                        (e)=>{
                            this.setState({
                                title: e.target.value
                            })
                        }
                    }  name="title" placeholder="제목"/></div>

                    <div>
                    <textarea name="text" value = {this.state.text}
                        onChange={
                            (e)=>{
                                this.setState({
                                    text: e.target.value
                                })
                            }
                        } 
                    placeholder="내용을 입력하세요"/></div>

                    <div>과제 : <input type="checkbox"   name="assignment_yes"/> </div>

                    <div>첨부파일 <input type="file"   name="file_yes"/></div>
                    <button type="submit"
                    onClick={
                        ()=> {
                            console.log(this.state.nth_week)
                            console.log(this.state.title)
                            console.log(this.state.text)
                        }
                    }><NavLink to="/activity">저장</NavLink></button>
                </form>
            </div>
        );
    }
}

export default InputForm;