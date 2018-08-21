import * as ApiUtil from '../util/api_util';
export const CREATE_TASK = 'CREATE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const TASK_CREATED = 'TASK_CREATED';
export const TASK_CANCELLED = 'TASK_CANCELLED';
export const ADD_TO_TASK = 'ADD_TO_TASK';

export const fetchTasks = () => {
  return dispatch => {
    return ApiUtil.fetchTasks().then((tasks) => {
      return dispatch(receiveTasks(tasks));
    });
  }
}

export const createTask = (task_info) => {
  return dispatch => {
    return ApiUtil.createTask(task_info).then(() => {
      return dispatch({type: TASK_CREATED})
    });
  }
}

export const addToTask = (taskParam) => {
  console.log('fuck me asshole')
  return {
    type: ADD_TO_TASK,
    taskParam
  }
}

export const deleteTask = (id) => {
  return dispatch => {
    return ApiUtil.deleteTask(id).then(task => {
      return dispatch({type: DELETE_TASK, task});
    });
  }
}

export const taskCancelled = () => {
  return {
    type: TASK_CANCELLED
  }
}

export const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks
  }
}
