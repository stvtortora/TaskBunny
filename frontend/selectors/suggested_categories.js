import merge from 'lodash/merge';

const suggestedCategories = ({ entities }) => {
  const suggestedTitles = ['Mounting & Installation', 'General Handyman', 'Home Improvement', 'Furniture Assembly', 'Moving & Packing', 'Heavy Lifting'];
  // debugger

  return Object.keys(entities.categories).reduce((acc, categoryId) => {
    const category = entities.categories[categoryId];
    const nextAcc = merge({}, acc);
    if(suggestedTitles.indexOf(category.title) > -1) {
      nextAcc[category.title] = category;
    }

    return nextAcc;
  }, {});
}


export default suggestedCategories;
