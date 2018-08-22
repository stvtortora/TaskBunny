import { RECEIVE_TASKER_INFO, EDIT_TASKER_PHOTO } from '../actions/taskers_actions';

const imgReducer = (state = '', action) => {
  switch (action.type) {
    case RECEIVE_TASKER_INFO:
      return action.info.image_url;
    case EDIT_TASKER_PHOTO:
      return action.imgUrl
    default:
      return state;
  }
}

export default imgReducer;
