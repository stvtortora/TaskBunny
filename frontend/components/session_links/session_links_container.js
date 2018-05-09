import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionLinks from './session_links';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionLinks);
