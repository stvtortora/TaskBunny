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

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
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
