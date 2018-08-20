import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupTasker, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formName: 'Become a Tasker'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signupTasker(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
