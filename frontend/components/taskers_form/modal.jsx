import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TaskerSchedule from './tasker_schedule';
import RedirectOptions from './redirect_options';

function Modal({modal, closeModal, session}) {
  if (!modal) {
    return null;
  }

  const display = session ? <TaskerSchedule id={modal}/> : <RedirectOptions />

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {display}
      </div>
    </div>
  );
}

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
