import { ADD_TO_TASK } from '../actions/tasks_actions';
import { TASK_CREATED } from '../actions/tasks_actions';
import {  RESET_FORM } from '../actions/form_actions';
import merge from 'lodash/merge';

const currentTaskReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case ADD_TO_TASK:
        newState = merge({}, state, action.taskParam);
        return newState;
    case RESET_FORM:
      return {};
    default:
      return state;
  }
}

export default currentTaskReducer;
