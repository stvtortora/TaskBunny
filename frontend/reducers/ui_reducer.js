import { ADD_TO_TASK, TASK_CREATED, TASK_CANCELLED } from '../actions/entities_actions';

const uiReducer = (state = [], action) => {
  switch(action.type) {
    case TASK_CREATED:
      return ['Task confirmed'];
    case TASK_CANCELLED:
      return ['Task cancelled'];
    case ADD_TO_TASK:
      return [];
    default:
      return state;
  }
}

export default uiReducer;
