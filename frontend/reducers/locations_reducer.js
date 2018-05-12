import { RECEIVE_LOCATIONS } from '../actions/entities_actions';
import merge from 'lodash/merge'

const locationsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_LOCATIONS:
      return action.locations
    default:
      return state;
  }
};

export default locationsReducer;
