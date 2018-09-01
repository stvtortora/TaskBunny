import merge from 'lodash/merge';
import { RECEIVE_TASKER_INFO, EDIT_TASKER_LOCATION, CANCEL_LOCATION_CHANGE, AFFIRM_LOCATION_CHANGE } from '../actions/taskers_actions';

const locationReducer = (state = {id: null, title: null}, action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
      return action.info.location;
    case EDIT_TASKER_LOCATION:
      return {prevTitle: state.title, prevId: state.id, id: action.data.id, title: action.data.title};
    case AFFIRM_LOCATION_CHANGE:
      return {id: state.id, title: state.title};
    case CANCEL_LOCATION_CHANGE:
      if (state.prevId && state.prevTitle) {
        return {id: state.prevId, title: state.prevTitle};
      }

      return state;
    default:
      return state;
  }
}

export default locationReducer;
