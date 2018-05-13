import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/entities_actions';
import LocationSearch from '../search/location_search_container';

class LocationSub extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    //handle errors if blank!
    // debugger
    e.preventDefault();
    this.props.addToTask( this.props.location )
  }

  render() {
    //if props.location.title
    //return location title
    //else
    return (
      <form onSubmit={ this.handleSubmit }>
        <LocationSearch />
        <input type='submit' value="Submit" />
      </form>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationSub);
