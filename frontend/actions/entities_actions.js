import * as ApiUtil from '../util/api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const fetchCategories = () => {
  return (dispatch) => {
    return ApiUtil.fetchCategories().then(categories => {
      return dispatch({type: RECEIVE_CATEGORIES, categories})
    });
  };
};
