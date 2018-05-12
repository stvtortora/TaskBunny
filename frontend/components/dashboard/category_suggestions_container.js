import { connect } from 'react-redux';
import CategorySuggestions from './category_suggestions';
import suggestedCategories from '../../selectors/suggested_categories';

const mapStateToProps = (state) => {
  // debugger
  const suggestions = suggestedCategories(state);
  // debugger
  return ({
    suggestions
  });
}

export default connect(mapStateToProps)(CategorySuggestions);
