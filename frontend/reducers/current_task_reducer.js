import { ADD_TO_TASK } from '../actions/entities_actions';
import merge from 'lodash/merge';

const currentTaskReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_TO_TASK:
      return merge({}, state, action.taskParam);
    default:
      return state;
  }
}

export default currentTaskReducer;
