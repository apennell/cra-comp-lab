import React, { Component } from 'react';
import { Button } from 'annies-component-lab';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Let's test out a component lab button!
        </p>
        <Button onClick={(e) => alert('Look! It worked! Too bad the styling is garbage :(', e.target)}>
          I'm a button!
        </Button>
      </div>
    );
  }
}

export default App;
