import { RECEIVE_TASKS, DELETE_TASK } from '../actions/tasks_actions';
import merge from 'lodash/merge';

const tasksReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TASKS:
      return merge({}, state, action.tasks);
    case DELETE_TASK:
      const newState = merge({}, state);
      delete newState[action.task.id];
      return newState;
    default:
      return state;
  }
}

export default tasksReducer;
