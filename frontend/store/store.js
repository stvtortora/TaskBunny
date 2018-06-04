import { createStore, applyMiddleware } from 'redux';
import { saveCurrentTask } from '../util/local_storage_util';
import thunk from '../middleware/thunk_middleware';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
