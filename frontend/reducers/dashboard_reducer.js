import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const dashboardReducer = (state = {}, action) {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return action.user;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default dashboardReducer; 
