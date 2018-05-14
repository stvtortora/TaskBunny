import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/entities_actions';
import TaskDetailsForm from './task_details_form';
import EditTaskDetails from './edit_task_details_container';

const TaskDetails = (props) => {
  let display;
  if(props.size && props.vehicle){
    display = <EditTaskDetails />;
  } else if(!props.location) {
    display = null;
  } else {
    display = <TaskDetailsForm />;
  }

  return(
    <section>
      <h3>TASK DETAILS</h3>
      {display}
    </section>
  )
}

const mapStateToProps = state => {
  const location = state.entities.currentTask.location_id;
  const size = state.entities.currentTask.size;
  const vehicle = state.entities.currentTask.vehicle;

  return {
    location,
    size,
    vehicle
  };
}

export default connect(mapStateToProps)(TaskDetails);
