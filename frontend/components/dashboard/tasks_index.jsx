import React from 'react';
import Task from './task';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions/tasks_actions';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('fuck me asshole shitface bitch')
    this.props.fetchTasks();
  }

  render() {
    const tasks = this.props.taskIds.map(id => {
      return <Task key={id} id={id} />
    });

    const header = tasks.length > 0 ? <h3 className='your-tasks'>Upcoming Tasks:</h3> : <h3 className='your-tasks'>You haven't booked any tasks yet</h3>

    return (
      <div className='tasks-container'>
        {header}
        {tasks}
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
