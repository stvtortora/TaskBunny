import { combineReducers } from 'redux';
import queryDropdown from './query_dropdown_reducer';
import input from './search_input_reducer';

export default combineReducers({
  queryDropdown,
  input
});
