import { connect } from 'react-redux';
import DetailsForm from './details_form';
import { fetchLocations } from '../../actions/entities_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(fetchLocations())
  };
};

export default connect(null, mapDispatchToProps)(DetailsForm);
