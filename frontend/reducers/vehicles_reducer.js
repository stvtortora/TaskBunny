import { RECEIVE_VEHICLES } from '../actions/registration_actions';

const vehiclesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VEHICLES:
      return action.vehicles;
    default:
      return state;
  }
}

export default vehiclesReducer;
