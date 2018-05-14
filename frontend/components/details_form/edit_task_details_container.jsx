import React from 'react';
import { connect } from 'react-redux';
import { editTaskDetails } from '../../actions/entities_actions';
import Edit from './edit';

const mapStateToProps = (state) => {
  const fields = [state.entities.currentTask.size, state.entities.currentTask.vehicle];

  return {
    fields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: () => dispatch(editTaskDetails())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
