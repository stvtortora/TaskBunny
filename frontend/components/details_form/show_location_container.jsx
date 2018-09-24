import React from 'react';
import { connect } from 'react-redux';
import { updateShowForm } from '../../actions/form_actions';
import Show from './show';

const mapStateToProps = (state) => {
  const fields = [state.entities.currentTask.location.title];

  return {
    fields,
    formName: 'location'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateShowForm: (formName) => dispatch(updateShowForm(formName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
