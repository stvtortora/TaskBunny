import React from 'react';
import Task from './task';
import NavBar from '../nav_bar/nav_bar';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions/tasks_actions';
import { signupTasker, logout } from '../../actions/session_actions';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  handleDemo () {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=,./<>?;':[{}]";

    for (var i = 0; i < 50; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this.props.logout().then(() => {
      this.props.signUp({name: 'Demo', username: text, password: 'password'}).then(() => {
        this.props.history.push('/register');
      });
    })

  }

  render() {
    const allTasks = this.props.taskIds.map(id => {
      return <Task key={id} id={id} />
    });
    const tasks = [];

    for (let i = 0; i < allTasks.length; i++) {
      const task = allTasks[allTasks.length - 1 - i];
      tasks.push(task);
    }

    const header = tasks.length > 0 ? <h3 className='your-tasks'>Your Tasks</h3> : <h3 className='your-tasks'>No booked tasks yet</h3>

    return (
      <div>
        <NavBar />
          {this.props.userType === 'Client' ? <div className='tasker-demo-link' onClick={this.handleDemo}>Next up: Become a tasker!</div> : null}
          <div className='tasks-container'>
            {header}
            {tasks.length > 0 ?
              <div className='tasks-box'>
                {tasks}
              </div> : null
            }
          </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const taskIds = state.session.taskIds;
  const userType = state.session.type;

  return {
    taskIds,
    userType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    signUp: (user) => dispatch(signupTasker(user)),
    logout: () => dispatch(logout()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksIndex));
