import React from 'react';
import EditText from './edit_text';
import { connect } from 'react-redux';
import { changeTasker, editTaskerRate } from '../../actions/taskers_actions';

const mapStateToProps = state => {
  const text = state.taskerInfo.rate;
  const userId = state.session.id;
  const type = 'Rate';

  return {
    text,
    userId,
    type
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTasker: (state, taskerId) => dispatch(changeTasker({rate: state.text}, taskerId)),
    editState: (state) => dispatch(editTaskerRate(state.text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditText);
