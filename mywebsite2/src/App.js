import React, { Component } from 'react';
import './App.css';
import IconRow from './components/IconRow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clayton Berger</h1>
          <IconRow />
        </header>
      </div>
    );
  }
}

export default App;
