import { connect } from 'react-redux';
import { modDropdown, fetchLocations, clearSearchBar } from '../../actions/entities_actions';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    input: state.entities.search.input,
    placeholder: 'Enter your location',
    path: undefined
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status)),
    fetchResults: (criteria) => dispatch(fetchLocations(criteria)),
    clearSearchBar: () => dispatch(clearSearchBar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
