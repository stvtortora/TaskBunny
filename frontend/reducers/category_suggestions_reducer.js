import { RECEIVE_CATEGORY_SUGGESTIONS } from '../actions/dashboard_actions';

const categorySuggestionsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_CATEGORY_SUGGESTIONS:
      return action.suggestions;
    default:
      return state;
  }
}

export default categorySuggestionsReducer;
