import { INVALID_VEHICLE, INVALID_SIZE } from '../actions/form_actions';
import { ADD_TO_TASK } from '../actions/tasks_actions';

const vehicleErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case INVALID_VEHICLE:
      return ["Vehicle requirements can't be blank"];
    case INVALID_SIZE:
      return [];
    case ADD_TO_TASK:
      return [];
    default:
      return state;
  }
}

export default vehicleErrorsReducer;
