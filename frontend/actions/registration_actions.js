import * as ApiUtil from '../util/api_util';

export const REMOVE_REGISTRATION = 'REMOVE_REGISTRATION';
export const CREATE_REGISTRATION = 'CREATE_REGISTRATION';
export const RECEIVE_SIZES = 'RECEIVE_SIZES';
export const RECEIVE_VEHICLES = 'RECEIVE_VEHICLES';

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

export const fetchSizes = () => {
  return dispatch => {
    return ApiUtil.fetchSizes().then(sizes => {
      return dispatch({type: RECEIVE_SIZES, sizes});
    });
  };
}

export const fetchVehicles = () => {
  return dispatch => {
    return ApiUtil.fetchVehicles().then(vehicles => {
      return dispatch({type: RECEIVE_VEHICLES, vehicles})
    })
  }
}

export const removeRegistration = (response) => {
  return {
    type: REMOVE_REGISTRATION,
    response
  }
}
