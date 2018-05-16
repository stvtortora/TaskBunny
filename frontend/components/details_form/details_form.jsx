import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import LocationSub from './location_sub';
import TaskDetailsSub from './task_details_sub';
import TellDetailsSub from './tell_details_sub';

class DetailsForm extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div onClick={() => this.props.modDropdown(false)}>
        <NavBar />
        <div className="all-content" id="details_form">
          <header className='form_header'>
            <h1>Describe Your Task</h1>
            <p>We need these inputs to show only qualified and available Taskers for the job.</p>
          </header>
          <LocationSub />
          <TaskDetailsSub />
          <TellDetailsSub />
        </div>
      </div>
    )
  }
}

export default DetailsForm;
