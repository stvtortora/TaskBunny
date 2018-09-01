import React from 'react';
import EditInfo from './edit_info';
import { connect } from 'react-redux';
import { changeTasker } from '../../actions/taskers_actions';
import { createRegistration, destroyRegistration, removeRegistration } from '../../actions/registration_actions';

const mapStateToProps = state => {
  const categories = state.taskerInfo.categories;
  const userId = state.session.id;
  const type = 'Categories';
  const numCategories = Object.keys(categories).length
  const display = `${numCategories} ${numCategories > 1 ? 'categories' : 'category'}`;

  return {
    categories,
    userId,
    type,
    display,
    numCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRegistration: (registration_info) => dispatch(createRegistration('category_registrations', registration_info)),
    destroyRegistration: (id) => dispatch(destroyRegistration('category_registrations', id)),
    removeRegistration: (registration) => dispatch(removeRegistration(registration))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo);
