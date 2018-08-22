import { connect } from 'react-redux';
import { fetchVehicles } from '../../actions/registration_actions';
import { createRegistration, destroyRegistration } from '../../actions/registration_actions';
import EditVehiclesOrSizes from './edit_vehicles_or_sizes';

const mapStateToProps = (state) => {
  const options = state.taskerInfo.vehicles;
  const registrationIds = state.session.vehicleIds;
  const title = 'Vehicles';

  return {
    options,
    registrationIds,
    title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchVehicles()),
    createRegistration: (registration_info) => dispatch(createRegistration('vehicle_registrations', registration_info)),
    destroyRegistration: (id) => dispatch(destroyRegistration('vehicle_registrations', id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditVehiclesOrSizes);
