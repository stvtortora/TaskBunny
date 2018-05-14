import React from 'react';
import LocationSub from './location_sub';
import TaskDetailsSub from './task_details_sub';
import TellDetailsSub from './tell_details_sub';

class DetailsForm extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="all-content" id="details_form" onClick={() => this.props.modDropdown(false)}>
        <LocationSub />
        <TaskDetailsSub />
        <TellDetailsSub />
      </div>
    )
  }
}

export default DetailsForm;
