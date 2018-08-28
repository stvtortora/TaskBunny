import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { addToTask } from '../../actions/tasks_actions';
import { closeModal } from '../../actions/modal_actions';
import merge from 'lodash/merge';

class TaskerSchedule extends React.Component {
    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDateSelection = this.handleDateSelection.bind(this);
      this.handleTimeSelection = this.handleTimeSelection.bind(this);
      this.schedule = this.schedule.bind(this);
      this.defaultDay = Object.keys(this.props.days)[0];
      this.state = {date: this.defaultDay, time: this.props.days[this.defaultDay][0], tasker: this.props.tasker};
    }

    handleDateSelection(e) {
      this.setState({
        date: e.currentTarget.getAttribute('value')
      }, () => {
        this.setState({
          time: this.props.days[this.state.date][0]
        });
      });
    }

    handleTimeSelection(e) {
      this.setState({
        time: e.currentTarget.getAttribute('value')
      });
    }

    handleSubmit(e) {
      e.preventDefault(e);
      this.props.addToTask(this.state);
      this.props.closeModal();
      this.props.history.push('/taskform/confirm_task');
    }

    schedule () {
      const unOrderedSchedule = Object.keys(this.props.days).reduce((days, day) => {
        const className = this.state.date === day ? 'selectedDay' : 'unselectedDay';
        days[day] = <div className={className} value={day} onClick={this.handleDateSelection}>{day}</div>;
        return days
      }, {});

      return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
        return unOrderedSchedule[day]
      })
    }

    render(){
      const times = this.props.days[this.state.date].map(time => {
        return <option value={time} onClick={this.handleTimeSelection}>{time.title}</option>
      });

      debugger

      return(
        <div className='tasker-schedule'>
          <h3 className='tasker-schedule-header'>Tasker's Schedule</h3>
          <p className='tasker-schedule-subheader'>Choose a start time from the tasker's availability that works for you.</p>
          <form onSubmit={this.handleSubmit}>
            <div className='schedule-days'>
              {this.schedule()}
            </div>
            <select className='time-options'>
              {times}
            </select>
            <div className='form_input_button'>
                <input type='submit' value='Select & Continue'/>
            </div>
          </form>
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {

  const tasker = state.entities.search.results[state.modal.tasker_id];
  const days = tasker.days;

  return {
    tasker,
    days
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToTask: (task_info) => dispatch(addToTask(task_info)),
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskerSchedule));
