import * as ApiUtil from '../util/api_util';

export const RECEIVE_TIME_SLOTS = "RECEIVE_TIME_SLOTS";

export const fetchTimeSlots = () => {
  return dispatch => {
    return ApiUtil.fetchTimeSlots().then(timeSlots => {
      return dispatch({type: RECEIVE_TIME_SLOTS, timeSlots});
    });
  };
}
