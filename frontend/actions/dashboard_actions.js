import * as ApiUtil from '../util/api_util';
export const RECEIVE_CATEGORY_SUGGESTIONS = 'RECEIVE_CATEGORY_SUGGESTIONS';

export const fetchCategorySuggestions = () => {
  return dispatch => {
    return ApiUtil.fetchCategorySuggestions().then(suggestions => {
      return dispatch({type: RECEIVE_CATEGORY_SUGGESTIONS, suggestions});
    });
  };
}
