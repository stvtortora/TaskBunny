import * as ApiUtil from '../util/api_util';
import { openModal } from './modal_actions';
export const UPDATE_TASKER = 'UPDATE_TASKER';

export const fetchSchedule = (tasker_id) => {
  return dispatch => {
    return ApiUtil.fetchSchedule(tasker_id).then(schedule => {
      dispatch(updateTasker(schedule, tasker_id));
      dispatch(openModal(tasker_id));
    });
  }
}

export const updateTasker = (schedule, tasker_id) => {
  return {
    type: UPDATE_TASKER,
    schedule,
    tasker_id
  }
}
