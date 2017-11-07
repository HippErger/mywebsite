import React from 'react';
// import HeaderBar from 'header-bar';
import {Nav, NavItem} from 'react-bootstrap';
import '../stylesheets/myHeader.css';

function MyHeader () {
  return (
    <Nav bsStyle="tabs" className="Top-navi">
      <NavItem eventKey={1} title="Item" href="/home" id="Navi-lettering">Clayton</NavItem>
      <NavItem eventKey={2} title="Item" id="Navi-lettering">Blog</NavItem>
      <NavItem eventKey={3} title="Item" id="Navi-lettering"> Contact</NavItem>
    </Nav>
  )
}

export default MyHeader;
