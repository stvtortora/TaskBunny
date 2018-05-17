import { combineReducers } from 'redux';
import { UPDATE_SHOWFORM } from '../actions/entities_actions';
import location from './location_sub_reducer';

const showForm = (state = 'location', action) => {
  switch(action.type){
    case UPDATE_SHOWFORM:
    return action.formName;
    default:
    return state;
  }
}

export default combineReducers ({
  location,
  showForm
});
