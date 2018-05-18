import { RECEIVE_CATEGORY_SUGGESTIONS } from '../actions/entities_actions';

const categorySuggestionsReducer = (state = [], action) => {
  debugger
  switch(action.type) {
    case RECEIVE_CATEGORY_SUGGESTIONS:
      return action.suggestions;
    default:
      return state;
  }
}

export default categorySuggestionsReducer;
