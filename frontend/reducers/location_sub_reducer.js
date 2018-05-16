import { DROPDOWN_ITEM_SELECTED } from '../actions/entities_actions';
import merge from 'lodash/merge';

export const locationSubReducer = (state = {showForm: true, value: undefined}, action) => {
  switch(action.type) {
    case DROPDOWN_ITEM_SELECTED:
    debugger
      const nextState = merge({}, state, {value: action.location});
      return nextState;
    default:
      return state;
  }
}

export default locationSubReducer;
