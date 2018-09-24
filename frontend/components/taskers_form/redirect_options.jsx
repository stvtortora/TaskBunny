import React from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signupClient } from '../../actions/session_actions';

class RedirectOptions extends React.Component {
  constructor(props){
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleClick(formName) {
    return () => {
      this.props.closeModal()
      this.props.openModal({formName});
      // this.props.history.push(`/${field}`);
    }
  }

  handleDemo () {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=,./<>?;':[{}]";

    for (var i = 0; i < 50; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this.props.signUp({username: text, password: 'password'}).then(() => {
      this.props.closeModal();
      this.props.history.push('/taskform/confirm_task');
    });

  }

  render(){
    return (
      <div className='tasker-schedule' id='redirect-box'>
          <h3 className='tasker-schedule-header' id='redirect-header'>You Must Login to Book a Task</h3>
        <div className='redirect-buttons'>
          <div id='redirect-button' className='custom-button' onClick={this.handleDemo}>Demo Login</div>
          <div id='redirect-button' className='custom-button' onClick={this.handleClick('signUp')}>Sign Up</div>
          <div id='redirect-button' className='custom-button' onClick={this.handleClick('login')}>Login</div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (formName) => dispatch(openModal(formName)),
    signUp: (user) => dispatch(signupClient(user))
  }
}
export default withRouter(connect(null, mapDispatchToProps)(RedirectOptions));
