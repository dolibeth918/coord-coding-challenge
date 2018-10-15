import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      averageCommitTime: 0
    };
  }
  async componentDidMount() {
    const res = await axios.get(
      `https://api.staging.coord.co/codechallenge/commits`
    );
    const timestamps = res.data;
    // current time passed from the first commit to the last
    let secondsPassed = timestamps[0] - timestamps[timestamps.length - 1];
    // average time per commit
    let avg = secondsPassed / timestamps.length;
    // how many commits are left
    let commitsLeft = 2000 - timestamps.length;
    // end time according to average commit time and commits left
    let timeEnd = timestamps[0] + avg * commitsLeft;
    console.log(timeEnd);
  }

  render() {
    return (
      <div className="App">
        <h3>Hello!</h3>
      </div>
    );
  }
}

export default App;
