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
    this.days = this.days.bind(this);
    this.times = this.times.bind(this);
    this.state = {date: null};
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
      const className = this.state.date === day ? 'selectedDay-tasker' : 'unselectedDay-tasker';
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
          className = this.props.filledStatuses[time.id] ? 'filledTime' : 'selectedTime-tasker';
        } else {
          className = 'unselectedTime-tasker';
        }
        return (
          <div className={className} id={time.id} onClick={this.toggleSelection}>
              <div className='attribute-title'>
                {time.title}
              </div>
              <div className='attribute-hover'>{className === 'unselectedTime-tasker' ? '+' : 'x'}</div>
          </div>
        )
    });
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode
    });
  }

  toggleSelection(e){
    if(e.currentTarget.getAttribute('class') === 'unselectedTime-tasker'){
      this.props.createRegistration({ time_slot_id: e.currentTarget.getAttribute('id')})
    } else {
      this.props.destroyRegistration(Number(e.currentTarget.getAttribute('id')))
    }
  }

  render(){
    const times = this.times();
    const days = this.days()

    return !this.props.registrationIds.length && !this.state.editMode ? <div onClick={this.toggleEditMode}>+ Add times you're available</div> :
    <div className='tasker-attribute-container'>
      <div className='tasker-attribute-name' >Availability</div>
      <div className='tasker-attribute-content'>
        {!this.state.editMode ? <div>{`${this.props.registrationIds.length} ${this.props.registrationIds.length !== 1  ? 'times selected' : 'time selected'}`}</div> :
        <div className='tasker-schedule-content'>
          <div className='tasker-schedule-days'>
            <div>
              {days.slice(0, 3)}
            </div>
            <div>
              {days.slice(3, 6)}
            </div>
            <div>
              {days.slice(6)}
            </div>
          </div>
          <div className='tasker-schedule-times'>
            <div>
              {times.slice(0, 4)}
            </div>
            <div>
              {times.slice(4, 8)}
            </div>
            <div>
              {times.slice(8)}
            </div>
          </div>
        </div>
      }
      </div>
      <div onClick={this.toggleEditMode}>{this.state.editMode ? 'Done' : 'Edit'}</div>
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
