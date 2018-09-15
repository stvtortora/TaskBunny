import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../actions/session_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formName: 'Log In',
    currentTask: state.entities.currentTask.time.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
