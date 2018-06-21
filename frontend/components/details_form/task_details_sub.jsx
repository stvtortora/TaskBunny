import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/tasks_actions';
import TaskDetailsForm from './task_details_form';
import ShowTaskDetails from './show_task_details_container';

const TaskDetails = (props) => {

  const display = props.showForm ? <TaskDetailsForm /> : <ShowTaskDetails />;

  return(
    <section>
      <h3 className='sub_form_name'>TASK DETAILS</h3>
      {display}
    </section>
  )
}

const mapStateToProps = state => {

  const showForm = Boolean(state.entities.detailForm.showForm === 'taskDetails');

  return {
    showForm
  }
}

export default connect(mapStateToProps)(TaskDetails);
