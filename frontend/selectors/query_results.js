// const queryResults = (state, queryString) => {
//   return Object.keys(state.entities.categories).filter( (categoryId) => {
//     const title = state.entities.categories[categoryId].title;
//     return title.indexOf(queryString) > -1;
//   })
// }

const queryResults = (data, queryString) => {
  // debugger
  return Object.keys(data).reduce((acc, id) => {
    const category = data[id];

    if(queryString !== '' && category.title.indexOf(queryString) > -1){
      return acc.concat([category]);
    } else{
      return acc;
    };
  }, []);
}


export default queryResults;
