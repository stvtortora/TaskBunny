import { MOD_DROPDOWN, RECEIVE_LOCATIONS, RECEIVE_CATEGORIES, DROPDOWN_ITEM_SELECTED } from '../actions/entities_actions';
import merge from 'lodash/merge';


const categoriesDefault = {
  open: false,
  dataType: 'category',
  path: "/taskform/details"
}

const locationsDefault = {
  open: false,
  dataType: 'location',
  path: null
}

const queryDropdownReducer = (state = {}, action) => {
  let nextState;
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return categoriesDefault;
    case RECEIVE_LOCATIONS:
      return locationsDefault;
    case MOD_DROPDOWN:
      nextState = merge({}, state, { open: action.status });
      return nextState;
    case DROPDOWN_ITEM_SELECTED:
      nextState = merge({}, state, { open: false });
      return nextState;
    default:
      return state;
  }
}

export default queryDropdownReducer;
