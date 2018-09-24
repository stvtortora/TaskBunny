import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/tasks_actions';
import { updateShowForm, invalidSize, invalidVehicle, validSize, validVehicle } from '../../actions/form_actions';

class TaskDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
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
    if (!this.state.size || !this.state.vehicle) {
      if (!this.state.size) {
        this.props.invalidSize();
      } else {
        this.props.validSize();
      }
      if (!this.state.vehicle) {
        this.props.invalidVehicle();
      } else {
        this.props.validVehicle()
      }
    } else {
      this.props.addToTask(this.state);
      this.props.updateShowForm('tellDetails');
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <h3 className="form_question">How Big is Your Task?</h3>
          <div className='error-message'>{this.props.sizeErrors}</div>
          <div className="size_options">
            <label><input type="radio" value="small" checked={this.state.size === 'small'} onChange={this.handleChange('size')} />Small - Est. 1 hr</ label>
            <label><input type="radio" value="medium" checked={this.state.size === 'medium'} onChange={this.handleChange('size')} />Medium - Est. 2-3 hrs</ label>
            <label><input type="radio" value="large" checked={this.state.size === 'large'} onChange={this.handleChange('size')} />Large - Est. 4+ hrs</ label>
          </div>
        </div>
        <div>
          <h3 className="form_question">Vehicle Requirements</h3>
          <div className='error-message'>{this.props.vehicleErrors}</div>
          <div className="vehicle_options">
            <label><input type="radio" value="none" checked={this.state.vehicle === 'none'} onChange={this.handleChange('vehicle')} />Not needed for task</label>
            <label><input type="radio" value="car" checked={this.state.vehicle === 'car'} onChange={this.handleChange('vehicle')} />Task requires a car</label>
            <label><input type="radio" value="truck" checked={this.state.vehicle === 'truck'} onChange={this.handleChange('vehicle')} />Task requires a truck</label>
          </div>
          </div>
        <div className='form_input_button'>
          <input type='submit' value="Save"/>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state.entities.currentTask.size ? state.entities.currentTask : {size: '', vehicle: ''},
    sizeErrors: state.errors.sizeErrors[0],
    vehicleErrors: state.errors.vehicleErrors[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (state) => dispatch(addToTask(state)),
    updateShowForm: (formName) => dispatch(updateShowForm(formName)),
    invalidSize: () => dispatch(invalidSize()),
    invalidVehicle: () => dispatch(invalidVehicle()),
    validSize: () => dispatch(validSize()),
    validVehicle: () => dispatch(validVehicle())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailsForm);
