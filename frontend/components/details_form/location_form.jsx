import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/tasks_actions';
import { updateShowForm, invalidLocation } from '../../actions/form_actions';
import LocationSearch from '../search/location_search_container';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.location) {
      this.props.addToTask( {location: this.props.location} )
      this.props.updateShowForm('taskDetails');
    } else {
      this.props.invalidLocation();
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <LocationSearch type={null}/>
        <ul className='error-message'>{this.props.locationErrors}</ul>
        <div className='form_input_button'>
          <input type='submit' value="Save" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const location = state.entities.detailForm.location.value;
  const locationErrors = state.errors.formErrors;

  return {
    location,
    locationErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (param) => dispatch(addToTask(param)),
    updateShowForm: (formName) => dispatch(updateShowForm(formName)),
    invalidLocation: () => dispatch(invalidLocation())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
