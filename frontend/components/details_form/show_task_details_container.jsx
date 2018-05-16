import React from 'react';
import { connect } from 'react-redux';
import { updateShowForm } from '../../actions/entities_actions';
import Show from './show';

const mapStateToProps = (state) => {
  const size = state.entities.currentTask.size;
  const vehicle = state.entities.currentTask.vehicle;

  let sizeDisplay;
  switch(size){
    case 'small':
      sizeDisplay = 'Small - Est 1hr';
      break;
    case 'medium':
      sizeDisplay = 'Medium - Est. 2-3 hrs';
      break;
    case 'large':
      sizeDisplay = 'Large - Est. 4+ hrs';
      break;
    default:
      null;
  }

  const vehicleDisplay = vehicle === 'none' ? 'Not required for task' : `Task requires a ${vehicle}`;

  const fields = [sizeDisplay, vehicleDisplay];

  return {
    fields,
    formName: 'taskDetails'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateShowForm: (formName) => dispatch(updateShowForm(formName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
