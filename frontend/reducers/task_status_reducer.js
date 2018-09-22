import { ADD_TO_TASK, TASK_CREATED, TASK_CANCELLED, TASK_CONFLICT } from '../actions/tasks_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const taskStatusReducer = (state = [], action) => {
  switch(action.type) {
    case TASK_CREATED:
      return state;
    case TASK_CANCELLED:
      return state;
    case TASK_CONFLICT:
      return state;
    case LOGOUT_CURRENT_USER:
      return [];
    case ADD_TO_TASK:
      return [];
    default:
      return state;
  }
}

export default taskStatusReducer;
