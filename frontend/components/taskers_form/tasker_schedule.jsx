import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { createTask } from '../../actions/entities_actions';
import merge from 'lodash/merge';

class TaskerSchedule extends React.Component {
    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDateSelection = this.handleDateSelection.bind(this);
      this.handleTimeSelection = this.handleTimeSelection.bind(this);
      this.defaultDay = Object.keys(this.props.days)[0];
      this.state = {date: this.defaultDay, time: this.props.days[this.defaultDay][0]};
    }

    handleDateSelection(e) {
      debugger
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
      const task_info = merge({}, this.state, this.props.task_info);
      debugger
      this.props.createTask(task_info).then(() => {
        debugger
        this.props.history.push('/');
      });
    }

    render(){
      const schedule = Object.keys(this.props.days).map(day => {
        const className = this.state.date === day ? 'selectedDay' : 'unselectedDay';
        return <li className={className} value={day} onClick={this.handleDateSelection}>{day}</li>;
      });
      debugger

      const times = this.props.days[this.state.date].map(time => {
        debugger
        return <option value={time} onClick={this.handleTimeSelection}>{time}</option>
      });

      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <ul>
              {schedule}
            </ul>
            <select>
              {times}
            </select>
            <input type='submit'/>
          </form>
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  const task_info = {
    category_id: state.entities.currentTask.category_id,
    location_id: state.entities.currentTask.location_id,
    tasker_id: ownProps.id
  }

  const tasker = state.entities.search.results[state.modal];
  const days = tasker.days;

  return {
    days,
    task_info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (task_info) => dispatch(createTask(task_info))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskerSchedule));
