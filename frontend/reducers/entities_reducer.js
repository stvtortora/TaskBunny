import { combineReducers } from 'redux';
import categorySuggestions from './category_suggestions_reducer';
import detailForm from './detail_form_reducer';
import currentTask from './current_task_reducer';
import search from './search_reducer';
import users from './users_reducer';
import tasks from './tasks_reducer';

export default combineReducers({
  categorySuggestions,
  detailForm,
  search,
  currentTask,
  users,
  tasks
});
