import { connect } from 'react-redux';
import DashBoard from './dashboard';
import { modDropdown } from '../../actions/dropdown_actions';
import { resetForm } from '../../actions/form_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    ui_messages: state.ui.taskStatus,
    user: state.session,
    modal: state.modal

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status)),
    resetForm: () => dispatch(resetForm()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
