import * as ApiUtil from '../util/api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCHBAR = 'CLEAR_SEARCHBAR';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

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

export const fetchTaskers = (task_info) => {
  return (dispatch) => {
    return ApiUtil.fetchTaskers(task_info).then(taskers => {
      return dispatch(receiveSearchResults(taskers));
    });
  };
}

export const receiveSearchResults = (results) => {
  debugger
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  }
};

export const clearSearchBar = () => {
  return {
    type: CLEAR_SEARCHBAR
  }
}

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  }
}
