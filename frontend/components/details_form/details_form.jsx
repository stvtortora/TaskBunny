import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import FormTracker from '../form_tracker/form_tracker';
import LocationSub from './location_sub';
import TaskDetailsSub from './task_details_sub';
import TellDetailsSub from './tell_details_sub';

class DetailsForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.updateFormTracker('details');
    this.props.resetForm()
  }

  render() {
    return (
      <div onClick={() => this.props.modDropdown(false)}>
        <NavBar />
        <FormTracker />
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
