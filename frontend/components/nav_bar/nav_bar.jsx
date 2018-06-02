import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinks from '../session_links/session_links_container';

const navBar = () => (
  <nav className='nav-bar'>
    <Link to="/" className='logo'>
      <img className='logo-image' src={window.staticImages.logo} />
    </Link>
    <SessionLinks />
  </nav>
);

// <div>TaskBunny</div>
export default navBar;
