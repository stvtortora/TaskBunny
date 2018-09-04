import { combineReducers } from 'redux';
import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCHBAR, CLEAR_SEARCH_RESULTS, SET_RESULTS_TYPE } from '../actions/search_actions';
import { MOD_DROPDOWN, DROPDOWN_ITEM_SELECTED } from '../actions/dropdown_actions';
import { UPDATE_TASKER, EDIT_TASKER_LOCATION } from '../actions/taskers_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

import merge from 'lodash/merge';

const defaultState = {
  input: undefined,
  open: false,
  results: {},
  resultsType: ''
}

const searchReducer = (state = defaultState, action) => {
 switch(action.type) {
   case CLEAR_SEARCHBAR:
    return defaultState;
  case CLEAR_SEARCH_RESULTS:
    return defaultState;
   case RECEIVE_SEARCH_RESULTS:
    const next = Object.assign(state, {});
    delete next.results;
    return merge(next, {}, { results: action.results });
  case SET_RESULTS_TYPE:
    return merge({}, state, {resultsType: action.resultsType})
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
    case EDIT_TASKER_LOCATION:
      return merge({}, state, { input: action.data.title });
  case LOGOUT_CURRENT_USER:
    return merge({}, state, { input: '' })
   default:
      return state;
 }
}

 export default searchReducer;
