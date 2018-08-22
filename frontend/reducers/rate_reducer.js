import { RECEIVE_TASKER_INFO, EDIT_TASKER_RATE } from '../actions/taskers_actions';

const rateReducer = (state = '', action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
      return action.info.rate;
    case EDIT_TASKER_RATE:
      return action.rate
    default:
      return state;
  }
}

export default rateReducer;
