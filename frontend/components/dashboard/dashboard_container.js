import { connect } from 'react-redux';
import DashBoard from './dashboard';
import { fetchCategories } from '../../actions/entities_actions';

const mapStateToProps = (state) => {
  return {
    categories: state.entities.categories
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
