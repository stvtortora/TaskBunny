import { RECEIVE_DETAIL_OPTIONS } from '../actions/entities_actions';
import merge from 'lodash/merge';

const detailOptionsReducer = (state = {}, action) {
  switch(action.type) {
    case RECEIVE_DETAIL_OPTIONS:
      return merge({}, state, action.options);
    default:
      return state;
  }
}

export default detailOptionsReducer;
