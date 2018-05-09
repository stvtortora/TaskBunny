import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinks from '../session_links/session_links_container';

const navBar = () => (
  <nav className='nav-bar'>
    <Link to="/" className='logo'>
      <div>TaskBunny</div>
    </Link>
    <SessionLinks />
  </nav>
);

export default navBar;
