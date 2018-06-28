import { DROPDOWN_ITEM_SELECTED } from '../actions/dropdown_actions';
import { RESET_FORM } from '../actions/form_actions';

import merge from 'lodash/merge';

const defaultState = {showForm: true, value: undefined}

export const locationSubReducer = (state = defaultState, action) => {
  switch(action.type) {
    case DROPDOWN_ITEM_SELECTED:
      const nextState = merge({}, state, {value: action.location});
      return nextState;
    case RESET_FORM:
      return defaultState;
    default:
      return state;
  }
}

export default locationSubReducer;
