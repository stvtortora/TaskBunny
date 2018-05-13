import { ADD_TO_TASK } from '../actions/entities_actions';
import merge from 'lodash/merge';

const currentTaskReducer = (state = {}, action) => {
  debugger
  switch(action.type) {
    case ADD_TO_TASK:
    const newState = merge({}, state, action.taskParam);
    debugger
      return newState;
    default:
      return state;
  }
}

export default currentTaskReducer;
