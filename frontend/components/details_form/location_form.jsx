import React from 'react';
import { connect } from 'react-redux';
import { addToTask, updateShowForm } from '../../actions/entities_actions';
import LocationSearch from '../search/location_search_container';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    //handle error if bblank
    e.preventDefault();
    this.props.addToTask( {location: this.props.location} )
    this.props.updateShowForm('taskDetails');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <LocationSearch />
        <div className='form_input_button'>
          <input type='submit' value="Save" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const location = state.entities.detailForm.location.value;

  return {
    location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (param) => dispatch(addToTask(param)),
    updateShowForm: (formName) => dispatch(updateShowForm(formName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
