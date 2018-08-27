import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinks from '../session_links/session_links_container';

const navBar = (props) => (
  <nav className='nav-bar'>
    <Link to="/" className='logo'>
      <img className='logo-image' src={window.staticImages.logo} />
    </Link>
    {
      props.updateDisplay ?
        <div onClick={props.updateDisplay('search')} className='nav-option'>Search</div>:
      null
    }
    {
      props.updateDisplay ?
        <div onClick={props.updateDisplay('tasks')} className='nav-option'>Bookings</div>:
      null
    }
    <SessionLinks />
  </nav>
);

export default navBar;
