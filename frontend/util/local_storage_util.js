import store from '../store/store';

export const loadCurrentTask = () => {
  const serializedState = localStorage.getItem('currentTask');
  if(serializedState){
    return JSON.parse(serializedState);
  }
  return undefined;
}

export const saveCurrentTask = (taskInfo) => {
  const serializedState = JSON.stringify(taskInfo);
  localStorage.setItem('currentTask', serializedState);
}
