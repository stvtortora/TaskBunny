import { ADD_TO_TASK, EDIT_LOCATION, EDIT_TASK_DETAILS } from '../actions/entities_actions';
import merge from 'lodash/merge';

const currentTaskReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case ADD_TO_TASK:
        newState = merge({}, state, action.taskParam);
        debugger
        return newState;
    case EDIT_LOCATION:
        newState = merge({}, state);
        delete newState.location_id;
        return newState;
    case EDIT_TASK_DETAILS:
        newState = merge({}, state);
        delete newState.size;
        delete newState.vehicle;
        return newState;
    default:
      return state;
  }
}

export default currentTaskReducer;
