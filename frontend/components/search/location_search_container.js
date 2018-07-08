import { connect } from 'react-redux';
import { fetchLocations, clearSearchBar, clearSearchResults } from '../../actions/search_actions';
import { modDropdown } from '../../actions/dropdown_actions';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    input: state.entities.search.input,
    open: state.entities.search.open,
    placeholder: 'Enter your location',
    path: undefined
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status)),
    fetchResults: (criteria) => dispatch(fetchLocations(criteria)),
    action: () => dispatch(clearSearchBar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
