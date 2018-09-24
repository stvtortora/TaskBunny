import { connect } from 'react-redux';
import DetailsForm from './details_form';
import { fetchLocations } from '../../actions/search_actions';
import { modDropdown } from '../../actions/dropdown_actions';
import { updateFormTracker, updateShowForm } from '../../actions/form_actions';
import { resetForm } from '../../actions/form_actions';

const mapStateToProps = state => {
  return {
    size: state.entities.currentTask.size,
    vehicle: state.entities.currentTask.vehicle,
    location: state.entities.currentTask.location
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateFormTracker: (currentForm) => dispatch(updateFormTracker(currentForm)),
    fetchLocations: () => dispatch(fetchLocations()),
    modDropdown: (status) => dispatch(modDropdown(status)),
    resetForm: () => dispatch(resetForm()),
    updateShowForm: (formName) => dispatch(updateShowForm(formName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsForm);
