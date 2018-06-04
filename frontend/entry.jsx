import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { loadCurrentTask, saveCurrentTask } from './util/local_storage_util';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    debugger
    preloadedState = {
      session: { id: window.currentUser.id, username: window.currentUser.username, taskIds: [] },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        },
        currentTask: loadCurrentTask()
      }
    };
    // store = configureStore(preloadedState);
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
    debugger
    saveCurrentTask(store.getState().entities.currentTask);
  });

  debugger
  const root = document.getElementById('root');
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root);
});
