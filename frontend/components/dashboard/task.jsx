import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const task = state.entities.tasks[ownProps.id];
  debugger
  return {
    task
  }
}

const Task = ({ task }) => {
  return (
    <div className='task-container'>
        <h3 className='task-header'>{task.date} @ {task.time}</h3>
        <div>
          <p>{ task.tasker}</p>
          <p>{task.category}</p>
          <p>{ task.location}</p>
        </div>
    </div>
  )
}

export default connect(mapStateToProps)(Task);






//
// <div className='right-panel'>
//   <p><p className='task-field'>Date: </p>{task.date}</p>
//   <p><p className='task-field'>Time: </p> {task.time}</p>
// </div>
