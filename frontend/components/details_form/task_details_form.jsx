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
          <label><input type="radio" value="small" checked={this.state.size === 'small'} onChange={this.handleChange('size')} />Small - Est. 1 hr</ label>
          <label><input type="radio" value="medium" checked={this.state.size === 'medium'} onChange={this.handleChange('size')} />Medium - Est. 2-3 hrs</ label>
          <label><input type="radio" value="large" checked={this.state.size === 'large'} onChange={this.handleChange('size')} />Large - Est. 4+ hrs</ label>
        </div>
        <div>
          <p>Vehicle Requirements</p>
          <label><input type="radio" value="none" checked={this.state.vehicle === 'none'} onChange={this.handleChange('vehicle')} />Not needed for task</label>
          <label><input type="radio" value="car" checked={this.state.vehicle === 'car'} onChange={this.handleChange('vehicle')} />Task requires a car</label>
          <label><input type="radio" value="truck" checked={this.state.vehicle === 'truck'} onChange={this.handleChange('vehicle')} />Task requires a truck</label>
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
