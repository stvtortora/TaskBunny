import { combineReducers } from 'redux';
import detailForm from './detail_form_reducer';
import currentTask from './current_task_reducer';
import search from './search_reducer';
import users from './users_reducer';
import tasks from './tasks_reducer';

export default combineReducers({
  detailForm,
  search,
  currentTask,
  users,
  tasks
});
