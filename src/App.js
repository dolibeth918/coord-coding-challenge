import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const res = await axios.get(
      `https://api.staging.coord.co/codechallenge/commits`
    );
    const timestamps = res.data;
    console.log(timestamps);
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
