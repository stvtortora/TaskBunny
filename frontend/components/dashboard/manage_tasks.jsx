import React from 'react';
import TasksIndex from './tasks_index';

class ManageTasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {manageMode: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      manageMode: !this.state.manageMode
    });
  }

  render(){
    if(!this.state.manageMode){
      return (
        <div className='task_index'>
          <h3 onClick={this.handleClick}>Manage Tasks</h3>
        </div>
      )
    }

    return (
      <div>
        <p onClick={this.handleClick}>Close</p>
        <div className='task_index'>
          <TasksIndex id={this.props.user.id}/>
        </div>
      </div>
    )
  }
}
export default ManageTasks;
