import { UPDATE_FORM_TRACKER } from '../actions/entities_actions';

const formTrackerReducer = (state = 'details', action) => {
  switch(action.type) {
    case UPDATE_FORM_TRACKER:
      return action.currentForm;
    default:
      return state;
  }
}

export default formTrackerReducer;
