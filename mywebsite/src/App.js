import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/App.css';
import MyHeader from './components/MyHeader';
import zenRocks from './static/zenRocks.jpg';
import Artemis from './static/artemisAtNight.jpg';
import evTool from './static/evTool.jpeg';
import BadParents from './static/parents.jpg';
import Masks from './static/comedia.jpg';

// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <img src={Artemis} className="Center-pic" alt="Chocolate Lab" />
        <footer>
          <div className= "Footer-div">
            <img src={zenRocks} className="Footer-tiles" alt="Towers of Hanoi" />
            <img src={BadParents} className="Footer-tiles" alt="Crazy Parent" />
          </div>
          <div className= "Footer-div">
            <img src={Masks} className="Footer-tiles" alt="Prop Shop" />
            <img src={evTool} className="Footer-tiles" alt="EVtool" />
          </div>

        </footer>
      </div>
    );
  }
}

export default App;

// <h3 className="Footer-tiles" > Towers of Hanoi </h3>
