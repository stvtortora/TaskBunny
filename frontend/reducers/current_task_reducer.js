import { ADD_TO_TASK, EDIT_LOCATION } from '../actions/entities_actions';
import merge from 'lodash/merge';

const currentTaskReducer = (state = {}, action) => {
  debugger
  let newState;
  switch(action.type) {
    case ADD_TO_TASK:
        newState = merge({}, state, action.taskParam);
        return newState;
    case EDIT_LOCATION:
        newState = merge({}, state);
        delete newState.location_id;
        return newState;
    default:
      return state;
  }
}

export default currentTaskReducer;
