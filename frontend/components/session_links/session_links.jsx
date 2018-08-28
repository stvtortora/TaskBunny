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

export default withRouter(SessionLinks);
