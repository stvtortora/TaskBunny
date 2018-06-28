import React from 'react';
import EditInfo from './edit_info';
import { connect } from 'react-redux';
import { changeTasker } from '../../actions/taskers_actions';
import { destroyRegistration } from '../../actions/registration_actions';

const mapStateToProps = state => {
  const categories = state.taskerInfo.categories;
  const userId = state.session.id;
  const type = 'Categories';
  const display = Object.keys(categories).map(category => {
    return <div>{category.title}</div>
  });

  return {
    categories,
    userId,
    type,
    display
  }
}

const mapDispatchToProps = dispatch => {
  return {
    destroyRegistration: (id) => dispatch(destroyRegistration('category_registrations', id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo);
