import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TASKS } from '../actions/entities_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({id: null, taskIds: []});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_TASKS:
      const taskIds = Object.keys(action.tasks);
      return merge({}, state, { taskIds });
    default:
      return state;
  }
};

export default sessionReducer;
