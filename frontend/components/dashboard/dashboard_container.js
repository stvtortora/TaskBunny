import { connect } from 'react-redux';
import DashBoard from './dashboard';
import { modDropdown } from '../../actions/entities_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status))
  };
};

export default connect(null, mapDispatchToProps)(DashBoard);
