import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/entities_actions';

class TaskDetails extends React.Component {
  constructor(props) {
    super(props)

  }
}

const mapStateToProps = (state) => {
  if(state.entities.currentTask.size) {
    return {
      size
    }
  }
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: dispatch(addToTask);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSub);
