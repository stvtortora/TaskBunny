import { connect } from 'react-redux';
import DashBoard from './dashboard';
import { modDropdown, resetForm } from '../../actions/entities_actions';

const mapStateToProps = state => {
  return {
    ui_messages: state.ui.taskStatus,
    user: state.session.id

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status)),
    resetForm: () => dispatch(resetForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
