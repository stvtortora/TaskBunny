export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user }
  });
}

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session',
  });
}

export const signupClient = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/clients',
    data: { user }
  });
}

export const signupTasker = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/taskers',
    data: { user }
  });
}

export const fetchCategories = (searchQuery) => {
  return $.ajax({
    method: 'GET',
    url: 'api/categories',
    data: { searchQuery }
  });
}

export const fetchCategorySuggestions = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/categories'
  });
}

export const fetchLocations = (searchQuery) => {
  return $.ajax({
    method: 'GET',
    url: 'api/locations',
    data: { searchQuery }
  });
}

export const fetchTaskers = (task_info) => {
  return $.ajax({
    method: 'GET',
    url: 'api/taskers',
    data: { task_info }
  });
}

export const fetchSchedule = (tasker_id) => {
  return $.ajax ({
    method: 'GET',
    url: 'api/time_slots',
    data: { tasker_id }
  });
}

export const fetchUserInfo = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/taskers/${id}`
  });
}

export const createTask = (task_info) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tasks',
    data: { task_info }
  });
}

export const fetchTasks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tasks'
  });
}

export const deleteTask = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tasks/${id}`,
    data: { id }
  });
}

export const updateTasker = (user, taskerId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/taskers/${taskerId}`,
    data: { user }
  });
}

export const destroyRegistration = (type, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/${type}/${id}`
  })
}


export const createRegistration = (type, info) => {
  return $.ajax({
    method: 'POST',
    url: `api/${type}`,
    data: { info }
  })
}

export const fetchTimeSlots = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/time_slots'
  });
}
