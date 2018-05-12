import { DROPDOWN_ITEM_SELECTED, RECEIVE_LOCATIONS } from '../actions/entities_actions';


const searchInputReducer = (state = {value: undefined}, action) => {
  switch(action.type) {
    case DROPDOWN_ITEM_SELECTED:
      const next = { value: action.location.title }
      return next;
    case RECEIVE_LOCATIONS:
      return {value: undefined};
    default:
      return state;
  }
}

export default searchInputReducer;
