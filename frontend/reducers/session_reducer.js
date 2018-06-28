import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TASKS, RECEIVE_TASKER_INFO, DELETE_TASK } from '../actions/taskers_actions';
import { CREATE_REGISTRATION } from '../actions/registration_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({id: null, taskIds: [], categoryIds: [], sizesIds: [], vehicleIds: [], timeSlotIds: [], description: null, name: null});

const sessionReducer = (state = _nullUser, action) => {
  let categoryIds;
  let vehicleIds;
  let sizeIds;
  let timeSlotIds;
  let description;
  let name;

  Object.freeze(state);
  let taskIds;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return  merge({}, state, action.user);
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_TASKS:
      taskIds = Object.keys(action.tasks);
      return merge({}, state, { taskIds });
    case RECEIVE_TASKER_INFO:
      categoryIds = Object.keys(action.info.categories);
      vehicleIds = Object.keys(action.info.vehicles);
      sizeIds = Object.keys(action.info.sizes);
      timeSlotIds = Object.keys(action.info.timeSlots);
      description = action.info.description;
      name = action.info.name;
      return merge({}, state, { categoryIds, vehicleIds, sizeIds, location, description, name });
    case DELETE_TASK:
      const newState = merge({}, state);

      let oldTaskIds = Object.assign([], state.taskIds);

      const newTaskIds = oldTaskIds.filter(id => {
        return id !== action.task.id.toString();
      });

      newState.taskIds = newTaskIds
      return newState;

    case CREATE_REGISTRATION:
      const nextState = merge({}, state);
      categoryIds = state.categoryIds.concat([action.response.id]);
      return merge({}, nextState, { categoryIds });
    default:
      return state;
  }
};

export default sessionReducer;
