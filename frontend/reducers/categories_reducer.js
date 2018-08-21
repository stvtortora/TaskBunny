import { RECEIVE_TASKER_INFO } from '../actions/taskers_actions';
import { CREATE_REGISTRATION } from '../actions/registration_actions';
import merge from 'lodash/merge';

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
      return action.info.categories;
    case CREATE_REGISTRATION:
    if(action.response.title){
      return merge({}, state, { [action.response.id]: action.response });
    }else{
      return state;
    }
    default:
      return state;
  }
}

export default categoriesReducer;
