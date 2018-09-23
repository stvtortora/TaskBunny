import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupClient, clearSessionErrors } from '../../actions/session_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formName: 'Sign Up',
    currentTask: state.entities.currentTask.time ? state.entities.currentTask.time.id : null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signupClient(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
