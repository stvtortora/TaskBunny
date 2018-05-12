import { combineReducers } from 'redux';
import { ADD_TO_TASK } from '../actions/entities_actions';
import location from './location_sub_reducer';

const phase = (state = 0, action) => {
  switch(action.type){
    case ADD_TO_TASK:
      const nextState = state + 1;
      return nextState;
    default:
      return state;
  }
}

export default combineReducers ({
  location,
  phase
}); 
