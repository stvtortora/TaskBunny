import { connect } from 'react-redux';
import queryResults from '../../selectors/query_results';
import QueryDropdown from './query_dropdown';

const mapStateToProps = (state, ownProps) => {
  const results = queryResults(state, ownProps.queryString);
  return {
    results
  };
};

export default connect(mapStateToProps)(QueryDropdown);
