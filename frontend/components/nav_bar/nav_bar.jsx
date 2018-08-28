import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './nav_links';
import SessionLinks from '../session_links/session_links_container';

const navBar = (props) => (
  <nav className='nav-bar'>
    <Link to="/" className='logo'>
      <img className='logo-image' src={window.staticImages.logo} />
    </Link>
    <NavLinks/>
    <SessionLinks />
  </nav>
);


export default navBar;
