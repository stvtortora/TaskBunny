import React from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

class RedirectOptions extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(formName) {
    return () => {
      this.props.closeModal()
      this.props.openModal({formName});
      // this.props.history.push(`/${field}`);
    }
  }

  render(){
    return (
      <div className='tasker-schedule' id='redirect-box'>
          <h3 className='tasker-schedule-header' id='redirect-header'>You Must Login to Book a Task</h3>
        <div className='redirect-buttons'>
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
    openModal: (formName) => dispatch(openModal(formName))
  }
}
export default withRouter(connect(null, mapDispatchToProps)(RedirectOptions));
