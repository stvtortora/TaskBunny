import React from 'react';
import EditText from './edit_text';
import { connect } from 'react-redux';
import { changeTasker, editTaskerDescription } from '../../actions/taskers_actions';

const mapStateToProps = state => {
  const text = state.taskerInfo.description;
  const userId = state.session.id;
  const type = 'About';

  return {
    text,
    userId,
    type
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTasker: (state, taskerId) => dispatch(changeTasker({description: state.text}, taskerId)),
    editState: (state) => dispatch(editTaskerDescription(state.text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditText);
