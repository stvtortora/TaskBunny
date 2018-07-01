import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { loadCurrentTask, saveCurrentTask } from './util/local_storage_util';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: { id: window.currentUser.id, username: window.currentUser.username, taskIds: [], categoryIds: [], sizesIds: [], vehicleIds: [], timeSlotIds: [], description: null, name: null },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        },
        currentTask: loadCurrentTask()
      }
    };
    delete window.currentUser;
  } else {
    preloadedState = {
      entities: {
        currentTask: loadCurrentTask()
      }
    }
  }
  let store = configureStore(preloadedState);

  store.subscribe(() => {
    saveCurrentTask(store.getState().entities.currentTask);
  });

  const root = document.getElementById('root');
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root);
});
