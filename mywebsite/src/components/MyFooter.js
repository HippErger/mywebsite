import React from 'react';
import zenRocks from '../static/zenRocks.jpg';
import evTool from '../static/evTool.jpeg';
import BadParents from '../static/parents.jpg';
import Masks from '../static/comedia.jpg';
import '../stylesheets/MyFooter.css';

function MyFooter() {
  return (
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
  )
}

export default MyFooter;
// This is a note to come back to
