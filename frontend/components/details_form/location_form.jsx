import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/tasks_actions';
import { updateShowForm, invalidLocation } from '../../actions/form_actions';
import {allLocations} from '../../actions/search_actions';
import { dropDownItemSelected } from '../../actions/dropdown_actions';
import LocationSearch from '../search/location_search_container';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: null};
    this.locations = this.locations.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.allLocations();
  }

  locations () {
    const that = this;
    return Object.keys(this.props.locations).map((id) => {
      const location = this.props.locations[id];
      return <option selected={that.state.location && (that.state.location.id === location.id) ? true : false} value={JSON.stringify(location)}>{location.title}</option>
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.location) {
      this.props.addToTask( {location: this.state.location} )
      this.props.dropDownItemSelected(this.state.location);
      this.props.updateShowForm('taskDetails');
    } else {
      this.props.invalidLocation();
    }
  }

  updateLocation (e) {
    this.setState({
      location: JSON.parse(e.target.value)
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <ul className='error-message'>{this.props.locationErrors}</ul>
          <div className='select-container'>
            <select ref={this.myRef} className='select' onChange={this.updateLocation} value={JSON.stringify(this.state.location)}>
              <option>Select your location</option>
              {this.locations()}
            </select>
          </div>
          <div className='form_input_button'>
            <input type='submit' value="Save" />
          </div>
      </form>
    );
  }
}

// <LocationSearch type={null} show={true}/>
const mapStateToProps = (state) => {
  const location = state.entities.detailForm.location.value;
  const locationErrors = state.errors.formErrors;
  const locations = state.entities.search.results;

  return {
    location,
    locations,
    locationErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (param) => dispatch(addToTask(param)),
    updateShowForm: (formName) => dispatch(updateShowForm(formName)),
    invalidLocation: () => dispatch(invalidLocation()),
    allLocations: () => dispatch(allLocations()),
    dropDownItemSelected: (location) => dispatch(dropDownItemSelected(location))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
