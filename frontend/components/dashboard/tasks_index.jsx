import React from 'react';
import Task from './task';
import NavBar from '../nav_bar/nav_bar';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions/tasks_actions';

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

    const header = tasks.length > 0 ? <h3 className='your-tasks'>Upcoming Tasks:</h3> : <h3 className='your-tasks'>No booked tasks yet.</h3>

    return (
      <div>
        <NavBar />
        <div className='tasks-container'>
          {header}
          {tasks}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
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
