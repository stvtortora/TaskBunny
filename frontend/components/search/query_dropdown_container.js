import { connect } from 'react-redux';
import queryResults from '../../selectors/query_results';
import QueryDropdown from './query_dropdown';
import { addToTask } from '../../actions/entities_actions';
import merge from 'lodash/merge';

const mapStateToProps = (state, ownProps) => {
  // const open = state.entities.searchbar.dropDownOpen;
  // const path = state.entities.searchbar.path
  // const dataType = state.entities.searchbar.dataType;
  const data = state.entities.queryDropdown.dataType === 'category' ? state.entities.categories : state.entities.locations;
  const results = queryResults(data, ownProps.queryString);
  const props = merge({}, state.entities.queryDropdown, { results });
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (taskParam) => dispatch(addToTask(taskParam))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryDropdown);
