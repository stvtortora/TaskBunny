import { connect } from 'react-redux';
import CategorySuggestions from './category_suggestions';

const mapStateToProps = (state) => {
  // debugger
  const suggestions = suggestedCategories(state);
  // debugger
  return ({
    suggestions
  });
}

export default connect(mapStateToProps)(CategorySuggestions);
