import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/entities_actions';
import TaskDetailsForm from './task_details_form';

const TaskDetails = (props) => {
  const display = props.size && props.vehicle ? <div><p>{props.size}</p><p>{props.vehicle}</p></div> : <TaskDetailsForm />

  return(
    <section>
      <h3>TASK DETAILS</h3>
      {display}
    </section>
  )
}

const mapStateToProps = state => {
  const size = state.entities.currentTask.size;
  const vehicle = state.entities.currentTask.vehicle;

  return {
    size,
    vehicle
  };
}

export default connect(mapStateToProps)(TaskDetails);
