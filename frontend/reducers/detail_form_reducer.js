import { combineReducers } from 'redux';
import { UPDATE_SHOWFORM, RESET_FORM } from '../actions/form_actions';
import location from './location_sub_reducer';

const showForm = (state = 'location', action) => {
  switch(action.type){
    case UPDATE_SHOWFORM:
    return action.formName;
    case RESET_FORM:
      return 'location';
    default:
    return state;
  }
}

export default combineReducers ({
  location,
  showForm
});
