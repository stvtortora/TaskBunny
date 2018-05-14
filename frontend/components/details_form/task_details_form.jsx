import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/entities_actions';

class TaskDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {size: '', vehicle: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addToTask(this.state);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>How Big is Your Task?</p>
          <label><input type="radio" value="Small - Est. 1 hr" checked={this.state.size === 'Small - Est. 1 hr'} onChange={this.handleChange('size')} />Small - Est. 1 hr</ label>
          <label><input type="radio" value="Medium - Est. 2-3 hrs" checked={this.state.size === 'Medium - Est. 2-3 hrs'} onChange={this.handleChange('size')} />Medium - Est. 2-3 hrs</ label>
          <label><input type="radio" value="Large - Est. 4+ hrs" checked={this.state.size === 'Large - Est. 4+ hrs'} onChange={this.handleChange('size')} />Large - Est. 4+ hrs</ label>
        </div>
        <div>
          <p>Vehicle Requirements</p>
          <label><input type="radio" value="Not needed for task" checked={this.state.vehicle === 'Not needed for task'} onChange={this.handleChange('vehicle')} />Not needed for task</label>
          <label><input type="radio" value="Task requires a car" checked={this.state.vehicle === 'Task requires a car'} onChange={this.handleChange('vehicle')} />Task requires a car</label>
          <label><input type="radio" value="Task requires a truck" checked={this.state.vehicle === 'Task requires a truck'} onChange={this.handleChange('vehicle')} />Task requires a truck</label>
        </div>
        <input type='submit' value="Continue"/>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (state) => dispatch(addToTask(state))
  };
}

export default connect(null, mapDispatchToProps)(TaskDetailsForm);
