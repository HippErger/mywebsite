import React from 'react';
// import HeaderBar from 'header-bar';
import {Nav, NavItem} from 'react-bootstrap';
import '../stylesheets/myHeader.css';

function MyHeader () {
  return (
    <Nav bsStyle="tabs" className="Top-navi">
      <NavItem eventKey={1} title="Item" href="/home" id="Navi-lettering">Clayton</NavItem>
      <NavItem eventKey={3} title="Item" id="Navi-lettering"> Contact</NavItem>
      <a href='https://github.com/HippErger'>
        <i class="fa fa-github fa-2x heady-Icon padded-Icon" aria-hidden="true" fa-3x></i>
      </a>
      <a href="https://www.linkedin.com/in/clayton-berger/">
        <i class="fa fa-linkedin-square fa-2x heady-Icon" aria-hidden="true"></i>
      </a>
      <a>
        <i class="fa fa-twitter-square fa-2x heady-Icon" aria-hidden="true"></i>
      </a>
    </Nav>
  )
}

export default MyHeader;
