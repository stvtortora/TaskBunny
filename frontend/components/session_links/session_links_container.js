import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import SessionLinks from './session_links';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (formName) => dispatch(openModal(formName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionLinks);
