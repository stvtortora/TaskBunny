import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TASKER_INFO} from '../actions/taskers_actions';
import { RECEIVE_TASKS, DELETE_TASK } from '../actions/tasks_actions';
import { CREATE_REGISTRATION, REMOVE_REGISTRATION } from '../actions/registration_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({id: null, taskIds: [], categoryIds: [], sizesIds: [], vehicleIds: [], timeSlotIds: [], timeSlotStatuses: {}, description: null, name: null});

const sessionReducer = (state = _nullUser, action) => {
  let categoryIds;
  let vehicleIds;
  let sizesIds;
  let timeSlotIds;
  let timeSlotStatuses;
  let description;
  let name;
  let nextState;

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
      sizesIds = Object.keys(action.info.sizes);
      timeSlotStatuses = Object.keys(action.info.timeSlots).reduce((statuses, id) => {
        const timeSlot = action.info.timeSlots[id]
        statuses[timeSlot.id] = timeSlot.status;
        return statuses;
      }, {});
      timeSlotIds = Object.keys(action.info.timeSlots);
      description = action.info.description;
      name = action.info.name;
      return merge({}, state, { categoryIds, vehicleIds, sizesIds, location, timeSlotIds, timeSlotStatuses, description, name });
    case DELETE_TASK:
      const newState = merge({}, state);

      let oldTaskIds = Object.assign([], state.taskIds);

      const newTaskIds = oldTaskIds.filter(id => {
        return id !== action.task.id.toString();
      });

      newState.taskIds = newTaskIds
      return newState;

    case CREATE_REGISTRATION:
      nextState = merge({}, state);
      if(action.response.time_slot_id){
        timeSlotIds = state.timeSlotIds.concat([action.response.time_slot_id.toString()]);
        return merge({}, nextState, { timeSlotIds });
      } else if (action.response.size_id){
        sizesIds = state.sizesIds.concat([action.response.size_id.toString()]);
        return merge({}, nextState, { sizesIds });
      } else if (action.response.vehicle_id){
        vehicleIds = state.vehicleIds.concat([action.response.vehicle_id.toString()]);
        return merge({}, nextState, { vehicleIds });
      }
      return nextState;
    case REMOVE_REGISTRATION:
      nextState = merge({}, state);
      if (action.response.time_slot_id) {
        let oldTimeSlotIds = Object.assign([], state.timeSlotIds);
        let newTimeSlotIds = oldTimeSlotIds.filter(id => {
          return id !== action.response.time_slot_id.toString();
        })
        nextState.timeSlotIds = newTimeSlotIds;

      } else if (action.response.size_id) {
        let oldSizeIds = Object.assign([], state.sizesIds);
        let newSizesIds = oldSizeIds.filter(id => {
          return id !== action.response.size_id.toString();
        })
        nextState.sizesIds = newSizesIds;
      } else if (action.response.vehicle_id){
        let oldVehicleIds = Object.assign([], state.vehicleIds);
        let newVehicleIds = oldVehicleIds.filter(id => {
          return id !== action.response.vehicle_id.toString();
        })
        nextState.vehicleIds = newVehicleIds;
      }
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;
