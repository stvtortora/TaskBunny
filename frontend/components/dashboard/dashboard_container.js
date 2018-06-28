import { connect } from 'react-redux';
import DashBoard from './dashboard';
import { modDropdown } from '../../actions/dropdown_actions';
import { resetForm } from '../../actions/form_actions';

const mapStateToProps = state => {
  return {
    ui_messages: state.ui.taskStatus,
    user: state.session

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status)),
    resetForm: () => dispatch(resetForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
