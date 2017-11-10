import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/App.css';
import MyHeader from './components/MyHeader';
import zenRocks from './static/zenRocks.jpg';
import Artemis from './static/artemisAtNight.jpg';
import evTool from './static/evTool.jpeg';
import BadParents from './static/parents.jpg';
import Masks from './static/comedia.jpg';
import MyFooter from './components/MyFooter';

// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <img src={Artemis} className="Center-pic" alt="Chocolate Lab" />
        <MyFooter />
      </div>
    );
  }
}

export default App;
