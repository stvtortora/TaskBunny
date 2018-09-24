import { INVALID_SIZE, INVALID_VEHICLE } from '../actions/form_actions';
import { ADD_TO_TASK } from '../actions/tasks_actions';

const sizeErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case INVALID_SIZE:
      return ["Size requirements can't be blank."];
    case INVALID_VEHICLE:
      return [];
    case ADD_TO_TASK:
      return [];
    default:
      return state;
  }
}

export default sizeErrorsReducer;
