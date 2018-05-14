import React from 'react';
import { connect } from 'react-redux';
import { editLocation } from '../../actions/entities_actions';

class Location extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.editLocation()
  }

  render() {
    return (
      <div>
        <p>{this.props.location.title}</p>
        <p onClick={this.handleClick}>Edit</p>
      </div>
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
    editLocation: () => dispatch(editLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
