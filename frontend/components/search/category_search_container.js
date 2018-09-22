import { connect } from 'react-redux';
import { fetchCategories, clearSearchBar } from '../../actions/search_actions';
import { modDropdown } from '../../actions/dropdown_actions';
import Search from './search';

const mapStateToProps = (state) => {
  const input = state.entities.search.input;
  const placeholder = 'Tell us what you need done.';
  return {
    input: state.entities.search.input,
    open: state.entities.search.open,
    resultsType: state.entities.search.resultsType,
    path: "/taskform/details",
    placeholder
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status)),
    fetchResults: (criteria) => dispatch(fetchCategories(criteria)),
    action: () => dispatch(clearSearchBar()),
    setResultsType: (type) => dispatch(setResultsType(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
