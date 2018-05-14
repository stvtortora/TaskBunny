import React from 'react';
import LocationSub from './location_sub';
import TaskDetails from './task_details_sub';

class DetailsForm extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section onClick={() => this.props.modDropdown(false)}>
        <LocationSub />
        <TaskDetails />
      </section>
    )
  }
}

export default DetailsForm;
