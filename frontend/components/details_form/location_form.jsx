import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/entities_actions';
import LocationSearch from '../search/location_search_container';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    //handle error if bblank
    debugger
    e.preventDefault();
    this.props.addToTask( {location_id: this.props.location.id} )
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <LocationSearch />
        <input type='submit' value="Continue" />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const location = state.entities.detailForm.location;
  return {
    location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (param) => dispatch(addToTask(param))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
