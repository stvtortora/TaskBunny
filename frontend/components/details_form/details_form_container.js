import { connect } from 'react-redux';
import DetailsForm from './details_form';
import { fetchLocations, modDropdown } from '../../actions/entities_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(fetchLocations()),
    modDropdown: (status) => dispatch(modDropdown(status))
  };
};

export default connect(null, mapDispatchToProps)(DetailsForm);
