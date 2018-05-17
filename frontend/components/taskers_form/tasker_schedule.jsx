import React from 'react';
import {connect} from 'react-redux';

class TaskerSchedule extends React.Component {
    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDateSelection = this.handleDateSelection.bind(this);
      this.handleTimeSelection = this.handleTimeSelection.bind(this);
      this.defaultDay = Object.keys(this.props.days)[0]
      debugger
      this.state = {selectedDay: this.defaultDay, selectedTime: this.props.days[this.defaultDay][0]};
    }

    // handleClick(field) {
    //   debugger
    //   return e => {
    //     debugger
    //     this.setState({
    //       [field]: e.currentTarget.value
    //     }, ({ field }) => {
    //       if(field === 'selectedDay') {
    //         debugger
    //         this.setState({
    //           selectedTime: this.props.days[this.state.selectedDay].first
    //         });
    //       }
    //     });
    //   }
    // }

    handleDateSelection(e) {
      debugger
      this.setState({
        selectedDay: e.currentTarget.getAttribute('value')
      }, () => {
        this.setState({
          selectedTime: this.props.days[this.state.selectedDay][0]
        });
      });
    }

    handleTimeSelection(e) {
      this.setState({
        selectedTime: e.currentTarget.getAttribute('value')
      });
    }

    handleSubmit(e) {
      e.preventDefault(e);
      console.log('form submitted');
    }

    render(){
      const schedule = Object.keys(this.props.days).map(day => {
        const className = this.state.selectedDay === day ? 'selectedDay' : 'unselectedDay';
        return <li className={className} value={day} onClick={this.handleDateSelection}>{day}</li>;
      });
      debugger

      const times = this.props.days[this.state.selectedDay].map(time => {
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

const mapStateToProps = (state) => {
  const task_info = {
    category_id: state.entities.currentTask.category_id,
    location_id: state.entities.currentTask.category_id
  }

  const tasker = state.entities.search.results[state.modal];
  debugger
  const days = tasker.days;
  return {
    days,
    task_info
  }
}

export default connect(mapStateToProps)(TaskerSchedule);
