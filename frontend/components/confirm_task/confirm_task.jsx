import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createTask, taskCancelled } from '../../actions/entities_actions';

class ConfirmTask extends React.Component {
  constructor(props){
    debugger
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.props.taskCancelled();
    this.props.history.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.props.task_info).then(() => {
      debugger
      this.props.history.push('/');
    });
  }

  render() {
    const display = Object.keys(this.props.task_display).map((taskParam) => {
      const paramValue = this.props.task_display[taskParam];
      return <div className='task-param-container'>
              <p className='taskParam'>{taskParam.toUpperCase()}:</ p>
              <p className='paramValue'> {paramValue.toUpperCase()}</p>
            </div>
    });

    return (
      <div>
        <NavBar />
        <div className='all-content'>
          <form onSubmit={this.handleSubmit}>
            <header className='form_header'>
              <h1>Review Task</h1>
              <p>Please take a moment to review the details of your order.</p>
            </header>
              <div className='taskParams'>
                {display}
              </div>
            <div className='form_input_button'>
              <input type='submit' value="Confirm Task"/>
            </div>
            <div className='form_input_button' >
              <div onClick={this.handleCancel}>Cancel Task</div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const task_info = {
    tasker_id: state.entities.currentTask.tasker.id,
    category_id: state.entities.currentTask.category.id,
    location_id: state.entities.currentTask.location.id,
    size: state.entities.currentTask.size,
    vehicle: state.entities.currentTask.vehicle,
    date: state.entities.currentTask.date,
    time: state.entities.currentTask.time
  }

  const task_display = {
    Tasker: state.entities.currentTask.tasker.name,
    Category: state.entities.currentTask.category.title,
    Location: state.entities.currentTask.location.title,
    Size: state.entities.currentTask.size,
    Vehicle: state.entities.currentTask.vehicle,
    Date: state.entities.currentTask.date,
    Time: state.entities.currentTask.time
  }

  return {
    task_info,
    task_display
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (task_info) => dispatch(createTask(task_info)),
    taskCancelled: () => dispatch(taskCancelled())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmTask));
