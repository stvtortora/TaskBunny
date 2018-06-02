// import { ADD_TO_TASK, TASK_CREATED, TASK_CANCELLED } from '../actions/entities_actions';
// import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
//
// const uiReducer = (state = [], action) => {
//   switch(action.type) {
//     case TASK_CREATED:
//       return ['Task confirmed'];
//     case TASK_CANCELLED:
//       return ['Task cancelled'];
//     case LOGOUT_CURRENT_USER:
//       return [];
//     case ADD_TO_TASK:
//       return [];
//     default:
//       return state;
//   }
// }
//

import { combineReducers } from 'redux';

import taskStatus from './task_status_reducer';
import formTracker from './form_tracker_reducer';

const uiReducer = combineReducers({
  taskStatus,
  formTracker
});

export default uiReducer;
