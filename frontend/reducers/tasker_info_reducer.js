import { combineReducers } from 'redux';
import location from './location_reducer';
import categories from './categories_reducer';
import sizes from './sizes_reducer';
import vehicles from './vehicles_reducer';
import timeSlots from './time_slots_reducer';
import description from './description_reducer';
import name from './name_reducer';
import rate from './rate_reducer';
import imgUrl from './img_reducer';

const taskerInfoReducer = combineReducers({
  location,
  categories,
  sizes,
  vehicles,
  timeSlots,
  description,
  name,
  rate,
  imgUrl
});

export default taskerInfoReducer;
