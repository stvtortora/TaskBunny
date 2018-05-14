import React from 'react';
import { connect } from 'react-redux';
import { editLocation } from '../../actions/entities_actions';
import Edit from './edit';

const mapStateToProps = (state) => {
  const fields = [state.entities.detailForm.location];

  return {
    fields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: () => dispatch(editLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
