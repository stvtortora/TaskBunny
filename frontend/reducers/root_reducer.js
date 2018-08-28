import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import modal from './modal_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import taskerInfo from './tasker_info_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  taskerInfo,
  modal,
  errors,
  ui
});

export default rootReducer;
