import React from 'react';
import { connect } from 'react-redux';
import { fetchTimeSlots } from '../../actions/time_slots_actions';
import { createRegistration, destroyRegistration } from '../../actions/registration_actions';

class EditSchedule extends React.Component {
  constructor(props){
    super(props);
    this.state = {editMode: false}
    this.handleClick = this.handleClick.bind(this);
    this.toggleSelection = this.toggleSelection.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.state = {date: null};
    this.days = this.days.bind(this);
    this.times = this.times.bind(this);
  }

  componentDidMount(){
    this.props.fetchTimeSlots().then(response => {
      this.setState({
        date: Object.keys(response.timeSlots.days)[0]
      });
    });
  }

  days () {
    if (!(this.props.timeSlots.days && this.state.date)) {return null}
    return Object.keys(this.props.timeSlots.days).map(day => {
      const className = this.state.date === day ? 'selectedDay' : 'unselectedDay';
      return <div className={className} value={day} onClick={this.handleClick}>{day}</div>
    });
  }

  handleClick (e){
    this.setState({
      date: e.currentTarget.getAttribute('value')
    });
  }

  times () {
    if (!(this.props.timeSlots.days && this.state.date)) {return null}
    return this.props.timeSlots.days[this.state.date].map(time => {
        let className;
        if (this.props.registrationIds.includes(time.id.toString())){
          className = this.props.filledStatuses[time.id] ? 'filledTime' : 'selectedTime';
        } else {
          className = 'unselectedTime';
        }
        return <div className={className} id={time.id} onClick={this.toggleSelection}>{time.title}</div>
    });
  }

  // noneSelected (options) {
  //   if (!options.length) {
  //     return false
  //   }
  //
  //   for (let i = 0; i < options.length; i++) {
  //     const option = options[i];
  //     if (option.props.className === 'selectedTime') {
  //       return false;
  //     }
  //   }
  //
  //   return true;
  // }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode
    });
  }

  toggleSelection(e){
    if(e.currentTarget.getAttribute('class') === 'unselectedTime'){
      this.props.createRegistration({ time_slot_id: e.currentTarget.getAttribute('id')})
    } else {
      this.props.destroyRegistration(Number(e.currentTarget.getAttribute('id')))
    }
  }

  render(){
    const times = this.times();

    return !this.props.registrationIds.length && !this.state.editMode ? <div onClick={this.toggleEditMode}>+ Add times you're available</div> :
    <div>
      <div>Available Times</div>
      <div className='schedule-days'>
        {!this.state.editMode ? <div>{`${this.props.registrationIds.length} ${this.props.registrationIds.length > 1 ? 'available times' : 'time available'}`}</div> :
        <div>
          {this.days()}
          <div>
            {times}
          </div>
        </div>
      }
      </div>
    </div>
  }
}


const mapStateToProps = state => {
  const registrationIds = state.session.timeSlotIds;
  const filledStatuses = state.session.timeSlotStatuses;
  const timeSlots = state.taskerInfo.timeSlots;
  const userId = state.session.id;

  return {
    registrationIds,
    filledStatuses,
    timeSlots,
    userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTimeSlots: () => dispatch(fetchTimeSlots()),
    createRegistration: (registration_info) => dispatch(createRegistration('time_slot_registrations', registration_info)),
    destroyRegistration: (id) => dispatch(destroyRegistration('time_slot_registrations', id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSchedule);
