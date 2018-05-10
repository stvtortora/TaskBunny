import React from 'react';
import { Link } from 'react-router-dom';

const SessionLinks = (props) => {
  if(!!props.currentUser) {
    return (
      <nav className='session-links'>
        <div onClick={props.logout} className='session-link'>Logout</div>
      </nav>
    );
  }

  return (
    <nav className='session-links'>
      <Link to='/login' className='session-link'>Login</Link>
      <Link to='/signup' className='session-link' className='sign-up-button'>Sign Up</Link>
    </nav>
  );
};

export default SessionLinks;
