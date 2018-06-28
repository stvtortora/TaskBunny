import { RECEIVE_TASKER_INFO } from '../actions/tasks_actions';

const sizesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
      return action.info.sizes;
    default:
      return state;
  }
}

export default sizesReducer;
