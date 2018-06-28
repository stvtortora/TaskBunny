import { RECEIVE_TASKER_INFO } from '../actions/tasks_actions';

const vehiclesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
      return action.info.vehicles;
    default:
      return state;
  }
}

export default vehiclesReducer;
