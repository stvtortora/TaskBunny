import React from 'react';
import EditInfo from './edit_info';
import { connect } from 'react-redux';
import { changeTasker, cancelLocationChange, affirmLocationChange } from '../../actions/taskers_actions';

const mapStateToProps = state => {
  const location = state.taskerInfo.location;
  const userId = state.session.id;
  const type = 'Location';
  const display = location ? location.title : null;

  return {
    location,
    userId,
    type,
    display
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTasker: (info, taskerId) => dispatch(changeTasker(info, taskerId)),
    cancelLocationChange: () => dispatch(cancelLocationChange()),
    affirmLocationChange: () => dispatch(affirmLocationChange())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo);
