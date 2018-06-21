import { combineReducers } from 'redux';
import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCHBAR, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';
import { MOD_DROPDOWN, DROPDOWN_ITEM_SELECTED } from '../actions/dropdown_actions';
import { UPDATE_TASKER } from '../actions/taskers_actions';

import merge from 'lodash/merge';

const defaultState = {
  input: undefined,
  open: false,
  results: {}
}

const searchReducer = (state = defaultState, action) => {
 switch(action.type) {
   case CLEAR_SEARCHBAR:
    return defaultState;
  case CLEAR_SEARCH_RESULTS:
    const newState = merge({}, state);
    delete newState.results;
    return merge({}, newState, {results: {}});
   case RECEIVE_SEARCH_RESULTS:
    const next = Object.assign(state, {});
    delete next.results;
    return merge(next, {}, { results: action.results });
  case UPDATE_TASKER:
      const tasker = state.results[action.tasker_id];
      const updatedTasker = merge({}, tasker, action.schedule);
      const nextState = merge({}, state);
      nextState.results[action.tasker_id] = updatedTasker;
      return nextState;
   case MOD_DROPDOWN:
      return merge({}, state, { open: action.status });
   case DROPDOWN_ITEM_SELECTED:
      return merge({}, state, { input: action.location.title });
   default:
      return state;
 }
}

 export default searchReducer;
