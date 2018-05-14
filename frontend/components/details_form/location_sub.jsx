import React from 'react';
import { connect } from 'react-redux';
import LocationForm from './location_form';
import EditLocation from './edit_location_container';


const LocationSub = (props) => {
  const display = props.locationId ? <EditLocation /> : <LocationForm />;

  return (
    <section>
      <h3>YOUR TASK LOCATION</h3>
      {display}
    </section>
  );
}

//   render() {
//     // const display = this.props.location.title ?
//     //return location title
//     //else
//     return (
//       <section>
//         <h3>YOUR TASK LOCATION</h3>
//         <LocationForm />
//       </section>
//     )
//   }
//
// }

const mapStateToProps = (state) => {
  const locationId = state.entities.currentTask.location_id;
  const location = state.entities.detailForm.location;
  debugger
  return {
    locationId,
    location
  }
}

export default connect(mapStateToProps)(LocationSub);