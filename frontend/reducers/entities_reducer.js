import { combineReducers } from 'redux';
import categories from './categories_reducer';
import locations from './locations_reducer';
import detailForm from './detail_form_reducer';
import currentTask from './current_task_reducer';
import searchbar from './searchbar_reducer';

export default combineReducers({
  categories,
  locations,
  detailForm,
  searchbar,
  currentTask
});
