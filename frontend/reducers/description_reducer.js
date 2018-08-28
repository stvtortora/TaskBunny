import { RECEIVE_TASKER_INFO, EDIT_TASKER_DESCRIPTION } from '../actions/taskers_actions';

const descriptionReducer = (state = '', action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
      return action.info.description;
    case EDIT_TASKER_DESCRIPTION:
      return action.description
    default:
      return state;
  }
}

export default descriptionReducer;
