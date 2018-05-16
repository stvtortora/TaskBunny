import React from 'react';
import { connect } from 'react-redux';
import LocationForm from './location_form';
import ShowLocation from './show_location_container';


const LocationSub = (props) => {
  const display = props.showForm ?  <LocationForm /> : <ShowLocation />;

  return (
    <section>
      <h3 className='sub_form_name'>YOUR TASK LOCATION</h3>
      {display}
    </section>
  );
}

const mapStateToProps = (state) => {
  const showForm =  Boolean(state.entities.detailForm.showForm === 'location');

  return {
    showForm
  }
}

export default connect(mapStateToProps)(LocationSub);
