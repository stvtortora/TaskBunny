import React from 'react';
import { connect } from 'react-redux';
import { updateShowForm } from '../../actions/entities_actions';
import Show from './show';

const mapStateToProps = (state) => {
  const fields = [state.entities.currentTask.size, state.entities.currentTask.vehicle];
  debugger
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
