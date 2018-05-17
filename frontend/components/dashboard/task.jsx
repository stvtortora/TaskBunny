import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const task = state.entities.tasks[ownProps.id];

  return {
    task
  }
}

const Task = ({ task }) => {
  return (
    <div>
      <div>
        <h3>{task.category}</h3>
        <p>{task.location}</p>
        <p>{task.tasker}</p>
      </div>
      <div>
        <p>{task.date}</p>
        <p>{task.time}</p>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Task);
