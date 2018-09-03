import React from 'react';
import EditableAttribute from './editable_attribute';
import LocationSearch from '../search/location_search_container';
import CategorySearch from '../search/category_search_container';
import { connect } from 'react-redux';
import { changeTasker, cancelLocationChange, affirmLocationChange, editTaskerLocation } from '../../actions/taskers_actions';

const mapStateToProps = state => {
  const location = state.taskerInfo.location;
  const userId = state.session.id;
  const type = 'Location';
  const display = location ? location.title : null;

  return {
    location,
    userId,
    type,
    display,
    idName: 'location_id',
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
    changeTasker: (info, taskerId) => dispatch(changeTasker(info, taskerId)),
    cancelLocationChange: () => dispatch(cancelLocationChange()),
    affirmLocationChange: () => dispatch(affirmLocationChange()),
    fetchData: () => new Promise((res, rej) => res()),
    editTaskerLocation: (data) => dispatch(editTaskerLocation(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableAttribute);
