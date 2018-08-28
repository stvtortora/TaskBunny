import { connect } from 'react-redux';
import { fetchSizes } from '../../actions/registration_actions';
import { createRegistration, destroyRegistration } from '../../actions/registration_actions';
import EditVehiclesOrSizes from './edit_vehicles_or_sizes';

const mapStateToProps = (state) => {
  const options = state.taskerInfo.sizes;
  const registrationIds = state.session.sizesIds;
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
    createRegistration: (registration_info) => dispatch(createRegistration('size_registrations', registration_info)),
    destroyRegistration: (id) => dispatch(destroyRegistration('size_registrations', id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditVehiclesOrSizes);
