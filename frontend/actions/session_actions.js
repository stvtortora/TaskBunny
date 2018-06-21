import * as ApiUtil from '../util/api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const login = (user) => {
  return (dispatch) => {
    return ApiUtil.login(user).then((user) => {
      return dispatch({type: RECEIVE_CURRENT_USER, user})
    },
    err => {
      return dispatch({type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON})
    }
  )};
};;

export const logout = () => {
  return (dispatch) => {
    return ApiUtil.logout().then(() => dispatch({type: LOGOUT_CURRENT_USER}))
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return ApiUtil.signup(user).then((user) => {
      return dispatch({type: RECEIVE_CURRENT_USER, user})
    },
    err => {
      return dispatch({type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON})
    }
  )};
};

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
}
