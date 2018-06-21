import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupClient, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formName: 'Sign Up'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signupClient(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
