import { connect } from 'react-redux';
import DashBoard from './dashboard';
import { modDropdown } from '../../actions/entities_actions';

const mapStateToProps = state => {
  return {
    ui_messages: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
