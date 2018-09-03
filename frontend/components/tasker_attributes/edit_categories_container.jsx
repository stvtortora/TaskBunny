import React from 'react';
import EditableAttribute from './editable_attribute';
import LocationSearch from '../search/location_search_container';
import CategorySearch from '../search/category_search_container';
import { connect } from 'react-redux';
import { changeTasker } from '../../actions/taskers_actions';
import { createRegistration, destroyRegistration, removeRegistration } from '../../actions/registration_actions';

const mapStateToProps = state => {
  const categories = state.taskerInfo.categories;
  const userId = state.session.id;
  const type = 'Categories';
  const numCategories = Object.keys(categories).length
  const display = `${numCategories} ${numCategories > 1 ? 'categories' : 'category'}`;
  const idName = 'category_id';

  return {
    categories,
    userId,
    type,
    display,
    numCategories,
    render: function () {
      const placeHolderText = this.props.type === 'Location' ? '+ Add your location' : '+ Add your areas of expertise';
      const requirePlaceHolder = (this.props.type === 'Location' && !this.props.location) || (this.props.type === 'Categories' && this.props.numCategories === 0);

      if(!this.state.editMode){
        return requirePlaceHolder ? <div onClick={this.toggleEditMode} className='placeholder-text'>{placeHolderText}</div> :
          <div className='tasker-attribute-container'>
            <div className='tasker-attribute-name'>{this.props.type}</div>
            <div className='tasker-attribute-content' id='tasker-attribute-selection'>{this.props.display}</div>
            <div className='save-edit-container'>
              <div onClick={this.toggleEditMode}>Edit</div>
            </div>
          </div>
      }

      const search = this.props.type === 'Location' ? <LocationSearch addResource={this.addResource} type='location' show={true}/> : <CategorySearch addResource={this.addResource} type='category' show={true}/>

      return (
        <div className='tasker-attribute-container' id='attribute-container-edit'>
          <div className='tasker-attribute-name'>{this.props.type}</div>
          <div className='tasker-attribute-content'>
            <div className='tasker-search-container'>
              {search}
            </div>
            <div className='tasker-category-list'>
              <div>
                {this.categoryDisplay()}
              </div>
            </div>
          </div>
          <div className='save-edit-container'>
            <div onClick={this.handleSave}>Save</div>
            <div onClick={this.handleCancel}>Cancel</div>
          </div>
        </div>
      )
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRegistration: (registration_info) => dispatch(createRegistration('category_registrations', registration_info)),
    destroyRegistration: (id) => dispatch(destroyRegistration('category_registrations', id)),
    removeRegistration: (registration) => dispatch(removeRegistration(registration)),
    fetchData: () => new Promise((res, rej) => res())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableAttribute);
