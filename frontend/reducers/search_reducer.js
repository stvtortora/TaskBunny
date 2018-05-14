import { combineReducers } from 'redux';
import {MOD_DROPDOWN, DROPDOWN_ITEM_SELECTED, RECEIVE_SEARCH_RESULTS, CLEAR_SEARCHBAR, CLEAR_SEARCH_RESULTS } from '../actions/entities_actions';
import merge from 'lodash/merge';

const defaultState = {
  input: undefined,
  open: false,
  results: {}
}

const searchReducer = (state = defaultState, action) => {
  debugger
 switch(action.type) {
   case CLEAR_SEARCHBAR:
    return defaultState;
  case CLEAR_SEARCH_RESULTS:
    const newState = merge({}, state);
    delete newState.results;
    return merge({}, newState, {results: {}});
   case RECEIVE_SEARCH_RESULTS:
      return merge(state, {}, { results: action.results });
   case MOD_DROPDOWN:
      return merge({}, state, { open: action.status });
   case DROPDOWN_ITEM_SELECTED:
   debugger
      return merge({}, state, { input: action.location.title });
   default:
      return state;
 }
}

//if this doesnt work it may be because of receive locations
//if it does work, delte queryDropdownReducer and searchInputReducer

 export default searchReducer;
