import { connect } from 'react-redux';
import { fetchSizes } from '../../actions/registration_actions';
import { createRegistration } from '../../actions/registration_actions';
import EditVehiclesOrSizes from './edit_vehicles_or_sizes';

const mapStateToProps = (state) => {
  const options = state.taskerInfo.sizes;
  const registrationIds = state.session.sizeIds;
  const title = 'Sizes';

  return {
    options,
    registrationIds,
    title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchSizes()),
    createRegistration: (registration_info) => dispatch(createRegistration('sizes_registrations', registration_info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditVehiclesOrSizes);
