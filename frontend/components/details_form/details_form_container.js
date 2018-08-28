import { connect } from 'react-redux';
import DetailsForm from './details_form';
import { fetchLocations } from '../../actions/search_actions';
import { modDropdown } from '../../actions/dropdown_actions';
import { updateFormTracker } from '../../actions/form_actions';
import { resetForm } from '../../actions/form_actions';


const mapDispatchToProps = (dispatch) => {
  return {
    updateFormTracker: (currentForm) => dispatch(updateFormTracker(currentForm)),
    fetchLocations: () => dispatch(fetchLocations()),
    modDropdown: (status) => dispatch(modDropdown(status)),
    resetForm: () => dispatch(resetForm())
  };
};

export default connect(null, mapDispatchToProps)(DetailsForm);
