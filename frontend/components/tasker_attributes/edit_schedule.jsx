import React from 'react';
import { connect } from 'react-redux';
import { fetchTimeSlots } from '../../actions/time_slots_actions';
import { createRegistration, destroyRegistration } from '../../actions/registration_actions';
import merge from 'lodash/merge';

class EditSchedule extends React.Component {
  constructor(props){
    super(props);
    this.state = {editMode: false}
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.updateResources = this.updateResources.bind(this);
    this.addSaved = this.addSaved.bind(this);
    this.addUnsaved = this.addUnsaved.bind(this);
    this.removeSaved = this.removeSaved.bind(this);
    this.removeUnsaved = this.removeUnsaved.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.days = this.days.bind(this);
    this.times = this.times.bind(this);
    this.state = {date: null, toCreate: {}, toDestroy: {}};
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

  removeSaved (resource) {
    const toDestroy = merge({}, this.state.toDestroy, {[resource.id]: resource});

    this.setState({toDestroy})
  }

  removeUnsaved (resource) {
    const toCreate = merge({}, this.state.toCreate);
    delete toCreate[resource.id];

    this.setState({toCreate});
  }

  addUnsaved (resource) {
    const toCreate = merge({}, this.state.toCreate, {[resource.id]: resource});

    this.setState({toCreate})
  }

  addSaved (resource) {
    const toDestroy = merge({}, this.state.toDestroy);
    delete toDestroy[resource.id];

    this.setState({toDestroy})
  }

  handleClick (e){
    this.setState({
      date: e.currentTarget.getAttribute('value')
    });
  }

  handleSave () {
    this.updateResources(this.state.toCreate, this.props.createRegistration).then(() => {
      this.updateResources(this.state.toDestroy, this.props.destroyRegistration).then(() => {
        this.toggleEditMode();
      })
    })
  }

  handleCancel () {
    this.toggleEditMode();
  }

  updateResources (resources, action) {
    return new Promise((resolve, reject) => {
        const resourceKeys = Object.keys(resources);

        for (let i = 0; i < resourceKeys.length; i++) {
          debugger
          let resource = resources[resourceKeys[i]];

          if (action === this.props.createRegistration) {
            action({time_slot_id: resource.id});
          } else {
            action(resource.id);
          }
        }

        resolve();
      })
  }

  times () {
    if (!(this.props.timeSlots.days && this.state.date)) {return null}

    return this.props.timeSlots.days[this.state.date].map(time => {
        const saved = this.props.registrationIds.includes(time.id.toString());
        let className;
        let toggleMethod;

        if ((saved && !this.state.toDestroy[time.id]) || this.state.toCreate[time.id]){
          className = this.props.filledStatuses[time.id] ? 'filledTime' : 'selectedTime-tasker';
          toggleMethod = saved ? this.removeSaved : this.removeUnsaved;
        } else {
          className = 'unselectedTime-tasker';
          toggleMethod = saved ? this.addSaved : this.addUnsaved;
        }

        return (
          <div className={className} id={time.id} onClick={className === 'filledTime' ? null : () => toggleMethod(time)}>
              <div className={className === 'filledTime' ? 'filled-attribute' : 'attribute-title'}>
                {className === 'filledTime' ? 'Booked' : time.title}
              </div>
              <div className='attribute-hover'>{className === 'unselectedTime-tasker' ? '+' : 'x'}</div>
          </div>
        )
    });
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode,
      toCreate: {},
      toDestroy: {}
    });
  }

  render(){
    const times = this.times();
    const days = this.days()

    return !this.props.registrationIds.length && !this.state.editMode ? <div onClick={this.toggleEditMode} className='placeholder-text'>+ Add times you're available</div> :
    <div className='tasker-attribute-container' id={this.state.editMode ? 'attribute-container-edit' : ''}>
      <div className='tasker-attribute-name' >Availability</div>
      <div className='tasker-attribute-content' id={this.state.editMode ? 'schedule-box' : ''}>
        {!this.state.editMode ? <div id='tasker-attribute-selection'>{`${this.props.registrationIds.length} ${this.props.registrationIds.length !== 1  ? 'times selected' : 'time selected'}`}</div> :
        <div className='tasker-schedule-content'>
          <div className='tasker-schedule-days'>
            <div className='schedule-header'>Days</div>
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
          <div className='schedule-header'>Times</div>
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
      <div className='save-edit-container'>
        <div onClick={this.state.editMode ? this.handleSave : this.toggleEditMode }>{this.state.editMode ? 'Save' : 'Edit'}</div>
        {this.state.editMode ? <div onClick={this.toggleEditMode }>Cancel</div> : null}
      </div>
    </div>
  }
}

// <div className='save-edit-container'>
//   <div onClick={this.toggleEditMode}>Done</div>
// </div>

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
