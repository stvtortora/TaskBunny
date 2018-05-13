import { connect } from 'react-redux';
import queryResults from '../../selectors/query_results';
import QueryDropdown from './query_dropdown';
import { addToTask, dropDownItemSelected } from '../../actions/entities_actions';
import merge from 'lodash/merge';

const mapStateToProps = (state, ownProps) => {
  return {
    searchResults: state.entities.search.results,
    open: state.entities.search.open
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (taskParam) => dispatch(addToTask(taskParam)),
    dropDownItemSelected: (location) => dispatch(dropDownItemSelected(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryDropdown);
