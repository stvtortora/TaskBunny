import * as ApiUtil from '../util/api_util';
import { openModal } from './modal_actions';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const MOD_DROPDOWN = 'MOD_DROPDOWN';
export const DROPDOWN_ITEM_SELECTED = 'DROPDOWN_ITEM_SELECTED';
export const ADD_TO_TASK = 'ADD_TO_TASK';
export const CLEAR_SEARCHBAR = 'CLEAR_SEARCHBAR';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const INVALID_LOCATION = 'INVALID_LOCATION';
export const UPDATE_FORM_TRACKER = 'UPDATE_FORM_TRACKER';
export const UPDATE_SHOWFORM = 'UPDATE_SHOWFORM';
export const UPDATE_TASKER = 'UPDATE_TASKER';
export const CREATE_TASK = 'CREATE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_CATEGORY_SUGGESTIONS = 'RECEIVE_CATEGORY_SUGGESTIONS';
export const TASK_CREATED = 'TASK_CREATED';
export const TASK_CANCELLED = 'TASK_CANCELLED';


export const fetchCategories = (criteria) => {

  return (dispatch) => {
    return ApiUtil.fetchCategories(criteria).then(categories => {
      return dispatch(receiveSearchResults(categories))
    });
  };
};

export const fetchCategorySuggestions = () => {
  debugger
  return dispatch => {
    return ApiUtil.fetchCategorySuggestions().then(suggestions => {
      return dispatch({type: RECEIVE_CATEGORY_SUGGESTIONS, suggestions});
    });
  };
}

export const fetchLocations = (criteria) => {

  return (dispatch) => {
    return ApiUtil.fetchLocations(criteria).then(locations => {
      return dispatch(receiveSearchResults(locations))
    });
  };
};

export const fetchTaskers = (task_info) => {
  return (dispatch) => {
    return ApiUtil.fetchTaskers(task_info).then(taskers => {
      return dispatch(receiveSearchResults(taskers));
    });
  };
}

export const fetchSchedule = (tasker_id) => {
  debugger
  return dispatch => {
    return ApiUtil.fetchSchedule(tasker_id).then(schedule => {
      dispatch(updateTasker(schedule, tasker_id));
      dispatch(openModal(tasker_id));
    });
  }
}

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

export const updateTasker = (schedule, tasker_id) => {
  return {
    type: UPDATE_TASKER,
    schedule,
    tasker_id
  }
}

export const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  }
};

export const addToTask = (taskParam) => {
  return {
    type: ADD_TO_TASK,
    taskParam
  }
}

export const modDropdown = (status) => {
  return {
    type: MOD_DROPDOWN,
    status
  }
}

export const dropDownItemSelected = (location) => {
  return {
    type: DROPDOWN_ITEM_SELECTED,
    location
  };
};

export const clearSearchBar = () => {
  return {
    type: CLEAR_SEARCHBAR
  }
}

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  }
}

export const updateShowForm = (formName) => {
  return {
    type: UPDATE_SHOWFORM,
    formName
  }
}

export const updateFormTracker = (currentForm) => {
  return {
    type: UPDATE_FORM_TRACKER,
    currentForm
  }
}

export const invalidLocation = () => {
  return {
    type: INVALID_LOCATION
  }
}
