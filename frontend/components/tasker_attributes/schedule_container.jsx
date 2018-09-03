import React from 'react';
import {connect} from 'react-redux';
import { fetchTimeSlots } from '../../actions/time_slots_actions';
import { createRegistration, destroyRegistration } from '../../actions/registration_actions';
import EditableAttribute from './editable_attribute';

const mapStateToProps = state => {
  const registrationIds = state.session.timeSlotIds;
  const filledStatuses = state.session.timeSlotStatuses;
  const timeSlots = state.taskerInfo.timeSlots;
  const userId = state.session.id;
  const render = function () {
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

  return {
    registrationIds,
    filledStatuses,
    timeSlots,
    userId,
    render,
    idName: 'time_slot_id'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchTimeSlots()),
    createRegistration: (registration_info) => dispatch(createRegistration('time_slot_registrations', registration_info)),
    destroyRegistration: (id) => dispatch(destroyRegistration('time_slot_registrations', id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableAttribute);
