import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          Tell me sell me to you.
        </p>
        <footer>
          <div className= "Footer-div">
            <h3 className="Footer-tiles" >Towers of Hanoi</h3>
            <h3 className="Footer-tiles" >Job 2 </h3>
          </div>
          <div className= "Footer-div">
            <h3 className="Footer-tiles" >Job 3 </h3>
            <h3 className="Footer-tiles" >Job 4 </h3>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
