import * as ApiUtil from '../util/api_util';
import { openModal } from './modal_actions';
export const UPDATE_TASKER = 'UPDATE_TASKER';
export const RECEIVE_TASKER_INFO = 'RECEIVE_TASKER_INFO';
export const EDIT_TASKER_LOCATION = 'EDIT_TASKER_LOCATION';
export const EDIT_TASKER_CATEGORIES = 'EDIT_TASKER_CATEGORIES';

export const fetchSchedule = (tasker_id) => {
  return dispatch => {
    return ApiUtil.fetchSchedule(tasker_id).then(schedule => {
      dispatch(updateTasker(schedule, tasker_id));
      dispatch(openModal(tasker_id));
    });
  }
}

export const fetchUserInfo = (id) => {
  return dispatch => {
    ApiUtil.fetchUserInfo(id).then(info => {
      dispatch(receiveTaskerInfo(info));
    });
  }
}

export const changeTasker = (info, taskerId) => {
  return dispatch => {
    return ApiUtil.updateTasker(info, taskerId)
  }
}

export const editTaskerLocation = (data) => {
  return {
    type: EDIT_TASKER_LOCATION,
    data
  }
}

export const editTaskerCategories = (data) => {
  return {
    type: EDIT_TASKER_CATEGORIES,
    data
  }
}

export const updateTasker = (schedule, tasker_id) => {
  return {
    type: UPDATE_TASKER,
    schedule,
    tasker_id
  }
}

export const receiveTaskerInfo = (info) => {
  debugger
  return {
    type: RECEIVE_TASKER_INFO,
    info
  }
}
