import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';
import locationErrors from './location_errors_reducer';
import sizeErrors from './size_errors_reducer';
import vehicleErrors from './vehicle_errors_reducer';


export default combineReducers({
  sessionErrors,
  locationErrors,
  sizeErrors,
  vehicleErrors
});
