import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SessionLinks extends React.Component {
  constructor (props) {
    super (props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut () {
    this.props.logout().then(() => {
      debugger
      this.props.history.push('/')
    })
  }

  handleClick (formName) {
    return () => {
      this.props.openModal({formName})
    }
  }

  render () {
    if(!!this.props.currentUser) {
      return (
        <nav className='session-links'>
          <div onClick={this.handleLogOut} id='logout-button' className='session-link'>Logout</div>
        </nav>
      );
    }

    return (
      <nav className='session-links'>
        <div onClick={this.handleClick('login')} className='session-link'>Login</div>
        <div onClick={this.handleClick('signUp')} className='sign-up-button'>Sign Up</div>
        <div onClick={this.handleClick('becomeATasker')} className='session-link' className='sign-up-button'>Become a Tasker</div>
      </nav>
    );
  }
}

// <Link to='/login' className='session-link'>Login</Link>
// <Link to='/signup' className='session-link' className='sign-up-button'>Sign Up</Link>
// <Link to='/become-a-tasker' className='session-link' className='sign-up-button'>Become a Tasker</Link>
export default withRouter(SessionLinks);
