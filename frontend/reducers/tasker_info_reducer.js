import { combineReducers } from 'redux';
import location from './location_reducer';
import categories from './categories_reducer';
import sizes from './sizes_reducer';
import vehicles from './vehicles_reducer';
import timeSlots from './time_slots_reducer';

const taskerInfoReducer = combineReducers({
  location,
  categories,
  sizes,
  vehicles,
  timeSlots
});

export default taskerInfoReducer;
