import * as ApiUtil from '../util/api_util';

export const REMOVE_REGISTRATION = 'REMOVE_REGISTRATION';
export const CREATE_REGISTRATION = 'CREATE_REGISTRATION';

export const destroyRegistration = (registration_type, id) => {
  return dispatch => {
    ApiUtil.destroyRegistration(registration_type, id).then(response => {
      return dispatch({type: REMOVE_REGISTRATION, response});
    });
  }
}

export const createRegistration = (registration_type, info) => {
  return dispatch => {
    ApiUtil.createRegistration(registration_type, info).then(response => {
      dispatch({type: CREATE_REGISTRATION, response});
    });
  }
}

// export const createRegistration = (registration_type, info) => {
//   debugger
//   return (dispatch) => {
//     return ApiUtil.createRegistration(registration_type, info).then((response) => {
//       debugger
//       dispatch({type: CREATE_REGISTRATION, response}));
//     }
//   };
// };
