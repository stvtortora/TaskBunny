import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/entities_actions';

const Location = (props) => {
  const form
}

const mapStateToProps = (state) => {
  const locationId = state.entities.currentTask.location_id;
  if(locationId) {
    const location = state.entities.locations[locationId].title;
    return {
      location
    };
  };
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: dispatch(addToTask);
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSub);
