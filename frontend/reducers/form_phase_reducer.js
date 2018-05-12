import { ADD_TO_TASK } from '../actions/entities_actions';

const formPhaseReducer = (state = 0, action) => {
  switch(action.type) {
    case ADD_TO_FORM:
      const nextState = state + 1;
      return nextState;
    default:
      return state;
  }
}
