import { RECEIVE_SIZES } from '../actions/registration_actions';

const sizesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SIZES:
      return action.sizes;
    default:
      return state;
  }
}

export default sizesReducer;
