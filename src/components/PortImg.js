import React, { Component } from 'react';

class PortImg extends Component {
  render() {
    return (
        <div class="myImg">
            <img src=""
             alt="project img"></img>
            }
          <a href="해당 프로젝트 페이지.html">
          <h3>{this.props.title}</h3>
            <p>{this.props.date}</p>
            <p>활동 내용 : {this.props.content}</p>
            <p>활동 인원 : {this.props.people}</p>
          </a>
        </div>

    );
  }

}

export default PortImg;
