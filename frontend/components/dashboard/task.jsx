import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/tasks_actions';

const mapStateToProps = (state, ownProps) => {
  const task = state.entities.tasks[ownProps.id];
  const sessionType = state.session.type;

  return {
    task,
    sessionType
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
    this.props.deleteTask(this.props.id);
  }

  render() {
    return (
      <div className='task-container'>
        <div className='task-info-container'>
            <div>
              <p>{this.props.sessionType === "Client" ? "Tasker" : "Client"}</p>
              <p>{this.props.sessionType === "Client" ? this.props.task.tasker : this.props.task.client}</p>
            </div>
            <div>
              <p>Category</p>
              <p>{this.props.task.category}</p>
            </div>
            <div>
              <p>Location</p>
              <p>{ this.props.task.location}</p>
            </div>
            <div>
              <p>Date</p>
              <p>{this.props.task.date} @ {this.props.task.time}</p>
            </div>
            <div className='task-cancel-container' id='cancel-task'>
              {this.props.sessionType === 'Client' ? <div className='cancel-task' onClick={this.handleClick}>Cancel</div> : null}
            </div>
        </div>
      </div>
    )
  }
}

// <div >
//   {this.props.sessionType === 'Client' ? <div className='cancel-task' onClick={this.handleClick}>Cancel</div> : null}
// </div>
export default connect(mapStateToProps, mapDispatchToProps)(Task);
