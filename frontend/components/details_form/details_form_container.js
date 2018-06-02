import { connect } from 'react-redux';
import DetailsForm from './details_form';
import { fetchLocations, modDropdown, updateFormTracker } from '../../actions/entities_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormTracker: (currentForm) => dispatch(updateFormTracker(currentForm)),
    fetchLocations: () => dispatch(fetchLocations()),
    modDropdown: (status) => dispatch(modDropdown(status))
  };
};

export default connect(null, mapDispatchToProps)(DetailsForm);
