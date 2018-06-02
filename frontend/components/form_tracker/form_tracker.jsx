import React from 'react';
import { connect } from 'react-redux';

const FormTracker = (props) => {
  return (
    <div className='form-tracker-container'>
      <div className='form-tracker'>
        <TrackerItem text='Fill Out Task Details' current={props.current} identity='details'/>
        <TrackerItem text='View Taskers & Prices' current={props.current} identity='taskers'/>
        <TrackerItem text='Confirm & Book' current={props.current} identity='confirm' />
      </div>
    </div>
  )
};

const TrackerItem = (props) => {
  const klass = props.identity === props.current ? 'current-form' : 'other-form';

  return (
    <div className={klass}>{props.text}</div>
  )
};

const mapStateToProps = state => {
  const current = state.ui.formTracker;

  return {
    current
  }
}

export default connect(mapStateToProps)(FormTracker);
