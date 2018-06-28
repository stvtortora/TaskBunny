import { connect } from 'react-redux';
import QueryDropdown from './query_dropdown';
import { addToTask } from '../../actions/tasks_actions';
import { dropDownItemSelected } from '../../actions/dropdown_actions';
import { editTaskerLocation, editTaskerCategories } from '../../actions/taskers_actions';
import { createRegistration } from '../../actions/registration_actions';
import merge from 'lodash/merge';

const mapStateToProps = (state, ownProps) => {
  return {
    searchResults: state.entities.search.results,
    userId: state.session.id
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (taskParam) => dispatch(addToTask(taskParam)),
    dropDownItemSelected: (location) => dispatch(dropDownItemSelected(location)),
    editTaskerLocation: (data) => dispatch(editTaskerLocation(data)),
    createRegistration: (registration_info) => dispatch(createRegistration('category_registrations', registration_info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryDropdown);
