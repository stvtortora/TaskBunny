import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TASKS, DELETE_TASK } from '../actions/tasks_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({id: null, taskIds: []});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let taskIds;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return  merge({}, state, action.user);
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_TASKS:
      taskIds = Object.keys(action.tasks);
      return merge({}, state, { taskIds });
    case DELETE_TASK:
      const newState = merge({}, state);

      let oldTaskIds = Object.assign([], state.taskIds);

      const newTaskIds = oldTaskIds.filter(id => {
        return id !== action.task.id.toString();
      });

      newState.taskIds = newTaskIds
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
