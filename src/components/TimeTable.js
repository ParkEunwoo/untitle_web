import React, { Component } from 'react'

class TimeTable extends Component {
  render() {
    return (
      <form>
        <input type="number" placeholder="요일"/>
        <input type="time" placeholder="시간"/>
      </form>
    );
  }
}

export default TimeTable;