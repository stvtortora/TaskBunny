import { RECEIVE_TASKER_INFO } from '../actions/taskers_actions';
import { CREATE_REGISTRATION } from '../actions/registration_actions';
import merge from 'lodash/merge';

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
    debugger
      return action.info.categories;
    case CREATE_REGISTRATION:
    debugger
      return merge({}, state, { [action.response.id]: action.response });
    default:
      return state;
  }
}

export default categoriesReducer;
