const queryResults = (state, queryString) => {
  return Object.keys(state.entities.categories).filter( (categoryId) => {
    const title = state.entities.categories[categoryId].title;
    return title.indexOf(queryString) > -1;
  })
}

export default queryResults;
