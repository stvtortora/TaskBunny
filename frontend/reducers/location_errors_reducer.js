import { INVALID_LOCATION, ADD_TO_TASK } from '../actions/entities_actions';

const locationErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case INVALID_LOCATION:
      return ['You must select a valid location'];
    case ADD_TO_TASK:
      return [];
    default:
      return state;
  }
}

export default locationErrorsReducer;
