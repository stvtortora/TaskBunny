import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/entities_actions';
import Search from '../search/search';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //handle errors if blank!
    this.props.addToTask( this.state )
  }

  return (
    <form onSubmit={ this.handleSubmit }>
      <Search placeholder="Enter your location">
      <input type='submit' value="Submit" />
    </form>

  )
}

const mapStateToProps = (state) => {
  // const locationId = state.entities.currentTask.location_id;
  // if(locationId) {
  //   const location = state.entities.locations[locationId].title;
  //   return {
  //     location
  //   };
  // };
  // return {};

  const location = state.entities.detailForm.location
  return {
    location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (param) => dispatch(addToTask(param));
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSub);
