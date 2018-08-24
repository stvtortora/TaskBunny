import store from '../store/store';

export const loadData = (itemName) => {
  const serializedState = localStorage.getItem(itemName);
  if(serializedState){
    return JSON.parse(serializedState);
  }
  return undefined;
}

export const saveData = (data, itemName) => {
  const serializedState = JSON.stringify(data);
  localStorage.setItem(itemName, serializedState);
}
