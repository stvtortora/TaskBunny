import { connect } from 'react-redux';
import { fetchSizes } from '../../actions/registration_actions';
import { createRegistration, destroyRegistration } from '../../actions/registration_actions';
import EditableAttribute from './editable_attribute';
import React from 'react';

const mapStateToProps = (state) => {
  const options = state.taskerInfo.sizes;
  const registrationIds = state.session.sizesIds;
  const title = 'Sizes';

  return {
    options,
    registrationIds,
    title,
    idName: 'size_id',
    render: function () {
      const placeHolderText = this.props.title === 'Sizes' ? '+ Add your task size preferences' : '+ Add your vehicle capabilities';
      const options = this.options();
      const requirePlaceHolder = this.props.registrationIds.length === 0 && !this.state.editMode;

      return requirePlaceHolder ? <div className='placeholder-container'><div onClick={this.toggleEditMode} className='placeholder-text'>{placeHolderText}</div></div> :
        <div className='tasker-attribute-container' id={this.state.editMode ? 'attribute-container-edit' : ''}>
          <div className='tasker-attribute-name'>{this.props.title}</div>
          <div className={this.state.editMode ? 'attribute-edit' : 'attribute-show'}>
            <div className='size-vehicle-options'>
              {options}
            </div>
            <div className='save-edit-container'>
              <div id={this.state.editMode ? 'save-button' : ''} onClick={this.state.editMode ? this.handleSave : this.toggleEditMode }>{this.state.editMode ? 'Save' : 'Edit'}</div>
              {this.state.editMode ? <div onClick={this.toggleEditMode }>Cancel</div> : null}
            </div>
          </div>
        </div>
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchSizes()),
    createRegistration: (registration_info) => dispatch(createRegistration('size_registrations', registration_info)),
    destroyRegistration: (id) => dispatch(destroyRegistration('size_registrations', id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableAttribute);
