import { connect } from 'react-redux';
import { modDropdown, fetchLocations, clearSearchResults } from '../../actions/entities_actions';
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
    action: () => dispatch(clearSearchResults())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
