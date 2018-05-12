import React from 'react';
import { connect } from 'react-redux';
import { addToTask } from '../../actions/entities_actions';
import Search from '../search/search';

class LocationSub extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //handle errors if blank!
    debugger
    this.props.addToTask( this.props.location )
  }

//if props.phase < 0
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <Search placeholder="Enter your location" />
        <input type='submit' value="Submit" />
      </form>
    )
  }

  //else display state.title
}

const mapStateToProps = (state) => {
  const location = state.entities.detailForm.location;
  const phase = state.entities.detailForm.phase;
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
