import { combineReducers } from 'redux';

import taskStatus from './task_status_reducer';
import formTracker from './form_tracker_reducer';

const uiReducer = combineReducers({
  taskStatus,
  formTracker
});

export default uiReducer;
