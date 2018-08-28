import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import FormTracker from '../form_tracker/form_tracker';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createTask, taskCancelled } from '../../actions/tasks_actions';
import { updateFormTracker, clearForm } from '../../actions/form_actions';

class ConfirmTask extends React.Component {
  constructor(props){
    super(props);
    this.allowAccess = this.allowAccess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (!this.allowAccess()) {
      this.props.history.push('/');
    } else {
      this.props.updateFormTracker('confirm');
    }
  }

  allowAccess () {
    debugger
    return Object.keys(this.props.task_info).filter(info => {
      return this.props.task_info[info] === null;
    }).length === 0 && this.props.currentUser
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.task_info.category_id;
  }

  handleCancel() {
    this.props.taskCancelled();
    this.props.history.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.props.task_info).then(() => {
      this.props.clearForm();
      this.props.history.push('/');
    },
    () => {
      this.props.history.push('/');
    });
  }


  render() {
    if (this.allowAccess()) {

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
            <FormTracker />
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

    return null;
  }
}

const mapStateToProps = (state) => {
  const task_info = {
    tasker_id: state.entities.currentTask.tasker.id || null,
    category_id: state.entities.currentTask.category.id || null,
    location_id: state.entities.currentTask.location.id || null,
    size: state.entities.currentTask.size || null,
    vehicle: state.entities.currentTask.vehicle || null,
    time_slot_id: state.entities.currentTask.time.id
  }

  const task_display = {
    Tasker: state.entities.currentTask.tasker.name || null,
    Category: state.entities.currentTask.category.title || null,
    Location: state.entities.currentTask.location.title || null,
    Size: state.entities.currentTask.size || null,
    Vehicle: state.entities.currentTask.vehicle || null,
    Date: state.entities.currentTask.date || null,
    Time: state.entities.currentTask.time.title || null
  }

  return {
    task_info,
    task_display,
    currentUser: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFormTracker: (currentForm) => dispatch(updateFormTracker(currentForm)),
    createTask: (task_info) => dispatch(createTask(task_info)),
    taskCancelled: () => dispatch(taskCancelled()),
    clearForm: () => dispatch(clearForm())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmTask));
