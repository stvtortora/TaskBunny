import { combineReducers } from 'redux';
import detailForm from './detail_form_reducer';
import currentTask from './current_task_reducer';
import search from './search_reducer';

export default combineReducers({
  detailForm,
  search,
  currentTask
});
