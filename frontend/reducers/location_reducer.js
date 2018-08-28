import { RECEIVE_TASKER_INFO, EDIT_TASKER_LOCATION } from '../actions/taskers_actions';

const locationReducer = (state = {id: null, title: null}, action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
      return action.info.location;
    case EDIT_TASKER_LOCATION:
      return action.data
    default:
      return state;
  }
}

export default locationReducer;
