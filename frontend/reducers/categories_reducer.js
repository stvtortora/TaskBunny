import { RECEIVE_CATEGORIES } from '../actions/entities_actions';
import merge from 'lodash/merge'

const categoriesReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, state, action.categories)
    default:
      return state;
  }
};

export default categoriesReducer;
