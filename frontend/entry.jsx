import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { loadData, saveData } from './util/local_storage_util';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: { id: window.currentUser.id, username: window.currentUser.username, type: window.currentUser.type, taskIds: [] },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        },
        currentTask: loadData('currentTask'),
        search: loadData('search')
      }
    };

    if (window.currentUser.type === 'Tasker') {
      preloadedState.session.categoryIds = [];
      preloadedState.session.sizesIds = [];
      preloadedState.session.vehicleIds = [];
      preloadedState.session.timeSlotIds = [];
      preloadedState.session.timeSlotStatuses = {};
      preloadedState.session.description = null;
      preloadedState.session.name = null;
    }

    delete window.currentUser;
  } else {
    preloadedState = {
      entities: {
        currentTask: loadData('currentTask'),
        search: loadData('search')
      }
    }
  }
  let store = configureStore(preloadedState);

  store.subscribe(() => {
    saveData(store.getState().entities.currentTask, 'currentTask');
  });

  store.subscribe(() => {
    saveData(store.getState().entities.search, 'search')
  })

  const root = document.getElementById('root');
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root);
});
