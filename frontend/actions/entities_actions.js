import * as ApiUtil from '../util/api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const MOD_DROPDOWN = 'MOD_DROPDOWN';
export const DROPDOWN_ITEM_SELECTED = 'DROPDOWN_ITEM_SELECTED';
export const ADD_TO_TASK = 'ADD_TO_TASK';
export const CLEAR_SEARCHBAR = 'CLEAR_SEARCHBAR';

export const fetchCategories = (criteria) => {

  return (dispatch) => {
    return ApiUtil.fetchCategories(criteria).then(categories => {
      return dispatch(receiveSearchResults(categories))
    });
  };
};

export const fetchLocations = (criteria) => {

  return (dispatch) => {
    return ApiUtil.fetchLocations(criteria).then(locations => {
      return dispatch(receiveSearchResults(locations))
    });
  };
};

export const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  }
};

export const addToTask = (taskParam) => {
  return {
    type: ADD_TO_TASK,
    taskParam
  }
}

export const modDropdown = (status) => {
  return {
    type: MOD_DROPDOWN,
    status
  }
}

export const dropDownItemSelected = (location) => {
  return {
    type: DROPDOWN_ITEM_SELECTED,
    location
  };
};

export const clearSearchBar = () => {
  return {
    type: CLEAR_SEARCHBAR
  }
}
