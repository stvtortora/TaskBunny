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

export const fetchCategories = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/categories'
  });
}

export const fetchLocations = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/locations'
  });
}
