import { RECEIVE_TASKER_INFO, EDIT_TASKER_CATEGORIES } from '../actions/taskers_actions';
import { CREATE_REGISTRATION, REMOVE_REGISTRATION } from '../actions/registration_actions';
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
    case EDIT_TASKER_CATEGORIES:
      return merge({}, state, {[Number(action.data.id)]: action.data})
    case REMOVE_REGISTRATION:
    if(action.response.title){
      const nextState = merge({}, state);
      delete nextState[action.response.id];
      return nextState;
    }else{
      return state;
    }
    default:
      return state;
  }
}

export default categoriesReducer;
