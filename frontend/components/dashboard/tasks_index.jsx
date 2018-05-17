import React from 'react';
import Task from './task';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions/entities_actions';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const tasks = this.props.taskIds.map(id => {
      return <Task key={id} id={id} />
    });

    const display = tasks.length > 0 ? tasks : <p>You haven't booked any tasks yet</p>

    return (
      <div>
        {display}
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  debugger
  const taskIds = state.session.taskIds;
  return {
    taskIds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex);
