// import { RECEIVE_TASKER_INFO } from '../actions/taskers_actions';
import { RECEIVE_TIME_SLOTS } from '../actions/time_slots_actions';
import merge from 'lodash/merge';

const timeSlotsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TIME_SLOTS:
      return action.timeSlots;
    default:
      return state;
  }
}

export default timeSlotsReducer;
