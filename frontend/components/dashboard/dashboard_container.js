import { connect } from 'react-redux';
import DashBoard from './dashboard';
import { fetchCategories, modDropdown } from '../../actions/entities_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    modDropdown: (status) => dispatch(modDropdown(status))
  };
};

export default connect(null, mapDispatchToProps)(DashBoard);
