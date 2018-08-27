import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TaskerSchedule from '../taskers_form/tasker_schedule';
import RedirectOptions from '../taskers_form/redirect_options';
import LogInForm from '../session_form/login_form_container';
import SignUpForm from '../session_form/signup_form_container';
import SignUpTasker from '../session_form/signup_tasker_container';

function Modal({modal, closeModal, session}) {
  if (!modal) {
    return null;
  }

  let display;
  const formName = modal.formName;
  if (session && !formName) {
    display = <TaskerSchedule id={modal.tasker_id}/>;
  } else {
    if (modal.tasker_id) {
      display = <RedirectOptions />;
    }
    if (formName === 'login') {
      display = <LogInForm/>
    }
    if (formName === 'signUp') {
      display = <SignUpForm />
    }
    if (formName === 'becomeATasker') {
      display = <SignUpTasker />
    }
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {display}
      </div>
    </div>
  );
}
// const display = session ? <TaskerSchedule id={modal}/> : <RedirectOptions />

const mapStateToProps = state => {

  return {
    modal: state.modal,
    session: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
