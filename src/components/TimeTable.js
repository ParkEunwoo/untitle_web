import React, { Component } from 'react'

class TimeTable extends Component {
  render() {
    return (
      <div class = "mytimetable">
        <table>
          <tr>
            <td></td>
            <td>월</td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
          </tr>
          <tr><td>오전 8시</td></tr>
          <tr><td>오전 9시</td></tr>
          <tr><td>오전 10시</td></tr>
          <tr><td>오전 11시</td></tr>
          <tr><td>오후 12시</td></tr>
          <tr><td>오후 1시</td></tr>
          <tr><td>오후 2시</td></tr>
          <tr><td>오후 3시</td></tr>
          <tr><td>오후 4시</td></tr>
          <tr><td>오후 5시</td></tr>
          <tr><td>오후 6시</td></tr>
          <tr><td>오후 7시</td></tr>
          <tr><td>오후 8시</td></tr>
          <tr><td>오후 9시</td></tr>
          <tr><td>오후 10시</td></tr>
          <tr><td>오후 11시</td></tr>
        </table>

        <input type="image" src="" alt="" width="" height=""/>
        <div>
          <button name = "button" id = "p_button" onclick = "show_addtime()">+</button>
        </div>
        <form action="" method = "post">
          <div class = "info_addtime">
            <div>시간추가</div>
            <span id="close" onclick="">×</span>
            <div class = "time">
              <p>과목명 <input type="text" name="topic"/></p>
              <p>요일
                <input list="browsers">
                  <datalist id="daylist">
                    <option value="월"/>
                    <option value="화"/>
                    <option value="수"/>
                    <option value="목"/>
                    <option value="금"/>
                  </datalist>
                </input>
                </p>
              <p>시작시간</p>
              <p>종료시간</p>
            </div>
            <p>
              <button type ="submit" name = "addtimebutton">완료</button>
            </p>
          </div>
        </form>
        <button type = "submit" value ="submit">확인</button>
          </div>
    );
  }
}

export default TimeTable;