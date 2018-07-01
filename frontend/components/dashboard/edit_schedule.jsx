import React from 'react';
import { connect } from 'react-redux';
import { fetchTimeSlots } from '../../actions/time_slots_actions';
import { createRegistration } from '../../actions/registration_actions';

class EditSchedule extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleSelection = this.toggleSelection.bind(this);
    this.state = {date: null};
  }

  componentDidMount(){
    this.props.fetchTimeSlots().then(response => {
      this.setState({
        date: Object.keys(response.timeSlots.days)[0]
      });
    });
  }

  handleClick (e){
    this.setState({
      date: e.currentTarget.getAttribute('value')
    });
  }

  toggleSelection(e){
    debugger
    if(e.currentTarget.getAttribute('class') === 'unselectedTime'){
      this.props.createRegistration({ time_slot_id: e.currentTarget.getAttribute('id'), tasker_id: this.props.userId })
    }
  }

  render(){
    let days = null;
    let times = null;

    if(this.props.timeSlots.days && this.state.date){
      days = Object.keys(this.props.timeSlots.days).map(day => {
        const className = this.state.date === day ? 'selectedDay' : 'unselectedDay';
        return <div className={className} value={day} onClick={this.handleClick}>{day}</div>
      });
      times = this.props.timeSlots.days[this.state.date].map(time => {
          const className = this.props.registrationIds.includes(time.id) ? 'selectedTime' : 'unselectedTime';
          return <div className={className} id={time.id} onClick={this.toggleSelection}>{time.title}</div>
      });
    }

    return (
      <div>
        <div className='schedule-days'>
          {days}
        </div>
        <div>
          {times}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  const registrationIds = state.session.timeSlotIds;
  const timeSlots = state.taskerInfo.timeSlots;
  const userId = state.session.id;

  return {
    registrationIds,
    timeSlots,
    userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTimeSlots: () => dispatch(fetchTimeSlots()),
    createRegistration: (registration_info) => dispatch(createRegistration('time_slot_registrations', registration_info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSchedule);
