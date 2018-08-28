import React from 'react';
import EditInfo from './edit_info';
import { connect } from 'react-redux';
import { changeTasker } from '../../actions/taskers_actions';
import { destroyRegistration } from '../../actions/registration_actions';

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
    destroyRegistration: (id) => dispatch(destroyRegistration('category_registrations', id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo);
