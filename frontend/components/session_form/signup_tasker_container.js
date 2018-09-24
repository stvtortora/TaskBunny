import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupTasker, clearSessionErrors } from '../../actions/session_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formName: 'Become a Tasker',
    path: '/register',
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signupTasker(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
