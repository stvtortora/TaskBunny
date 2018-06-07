import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/entities_actions';

const mapStateToProps = (state, ownProps) => {
  const task = state.entities.tasks[ownProps.id];
  debugger
  return {
    task
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id))
  }
}


class Task extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    debugger
    this.props.deleteTask(this.props.id);
  }

  render() {
    return (
      <div className='task-container'>
        <div className='task-cancel-contaier'>
          <h3 className='task-header'>{this.props.task.date} @ {this.props.task.time}</h3>
          <div className='cancel-task' onClick={this.handleClick}>Cancel</div>
        </div>
        <div>
          <p>{ this.props.task.tasker}</p>
          <p>{this.props.task.category}</p>
          <p>{ this.props.task.location}</p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);






//
// <div className='right-panel'>
//   <p><p className='task-field'>Date: </p>{task.date}</p>
//   <p><p className='task-field'>Time: </p> {task.time}</p>
// </div>
