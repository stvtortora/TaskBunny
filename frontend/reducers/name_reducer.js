import { RECEIVE_TASKER_INFO } from '../actions/taskers_actions';

const nameReducer = (state = '', action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
      return action.info.name;
    default:
      return state;
  }
}

export default nameReducer;
