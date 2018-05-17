import { RECEIVE_TASKS } from '../actions/entities_actions';
import merge from 'lodash/merge';

const tasksReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TASKS:
      return merge({}, state, action.tasks);
    default:
      return state;
  }
}

export default tasksReducer;
