import { DROPDOWN_ITEM_SELECTED } from '../actions/entities_actions';

export const locationSubReducer = (state = {}, action) => {
  debugger
  switch(action.type) {
    case DROPDOWN_ITEM_SELECTED:
      return action.location;
    default:
      return state;
  }
}

export default locationSubReducer;
