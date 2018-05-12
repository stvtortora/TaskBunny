import React from 'react';
import suggestedCategories from '../../selectors/suggested_categories';

const categorySuggestions = ({ suggestions }) => {
  // debugger
  const suggestionButtons = Object.keys(suggestions).map((title) => {
    const category = suggestions[title];
    return <li key={category.id}>{category.title}</li>
  });

  return (
    <div className='category-suggestions'>
      <ul className="category-row" id='row-one'>
        {suggestionButtons.slice(0, 3)}
      </ul>
      <ul className="category-row" id='row-two'>
        {suggestionButtons.slice(3)}
      </ul>
    </div>
  );
}

export default categorySuggestions;
