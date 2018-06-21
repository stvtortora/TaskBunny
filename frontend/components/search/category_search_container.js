import { connect } from 'react-redux';
import { fetchCategories, clearSearchBar } from '../../actions/search_actions';
import { modDropdown } from '../../actions/dropdown_actions';
import Search from './search';

const mapStateToProps = (state) => {
  const input = state.entities.search.input;
  const placeholder = state.session.id ? 'Search categories here.' : 'Need something different?';
  return {
    input: state.entities.search.input,
    open: state.entities.search.open,
    path: "/taskform/details",
    placeholder
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status)),
    fetchResults: (criteria) => dispatch(fetchCategories(criteria)),
    action: () => dispatch(clearSearchBar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
