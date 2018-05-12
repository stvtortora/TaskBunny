import { combineReducers } from 'redux';
import categories from './categories_reducer';
import locations from './locations_reducer';
import queryDropdown from './query_dropdown_reducer';
import currentTask from './current_task_reducer';

export default combineReducers({
  categories,
  locations,
  queryDropdown,
  currentTask
});
