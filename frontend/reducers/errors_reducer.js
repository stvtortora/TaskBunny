import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';
import formErrors from './location_errors_reducer';


export default combineReducers({
  sessionErrors,
  formErrors
});
