import React from 'react';
import { connect } from 'react-redux';
import { changeTasker } from '../../actions/taskers_actions';
import LocationSearch from '../search/location_search_container';
import CategorySearch from '../search/category_search_container';
import merge from 'lodash/merge';

class EditInfo extends React.Component {
  constructor(props){
    super(props);
    this.categoryDisplay = this.categoryDisplay.bind(this);
    this.categoryDisplayHelper = this.categoryDisplayHelper.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateResources = this.updateResources.bind(this);
    this.resourceTitles = this.resourceTitles.bind(this);
    this.addResource = this.addResource.bind(this);
    this.addSaved = this.addSaved.bind(this);
    this.addUnsaved = this.addUnsaved.bind(this);
    this.removeSaved = this.removeSaved.bind(this);
    this.removeUnsaved = this.removeUnsaved.bind(this);
    this.state = {editMode: false, toCreate: {}, toDestroy: {}};
  }

  resourceTitles (resources) {
    return Object.keys(resources).reduce((titles, categoryId) => {
      titles[resources[categoryId].title] = true;
      return titles;
    }, {});
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode,
      toCreate: {},
      toDestroy: {}
    });
  }

  categoryDisplay () {
    if (this.props.type !== 'Categories') { return null }

    const saved = this.categoryDisplayHelper(this.props.categories, this.removeSaved);
    const unsaved = this.categoryDisplayHelper(this.state.toCreate, this.removeUnsaved);

    return saved.concat(unsaved);
  }

  categoryDisplayHelper (categories, removeMethod) {
    return Object.keys(categories).map(id => {
      const category = categories[id];

      if (!this.resourceTitles(this.state.toDestroy)[category.title]) {
        return (
          <div className='selected-category-container' id='attribute-container-edit'>
            <div className='attribute-title' onClick={() => removeMethod(category)}>{category.title}</div>
            <div className='attribute-hover'>x</div>
          </div>
        )
      }

      return null;
    });
  }

  removeSaved (category) {
    const toDestroy = merge({}, this.state.toDestroy, {[category.title]: category});

    this.setState({toDestroy})
    debugger
  }

  removeUnsaved (category) {

    const toCreate = merge({}, this.state.toCreate);
    delete toCreate[category.title];

    this.setState({toCreate});
  }

  addResource (category) {
    if (this.resourceTitles(this.props.categories)[category.title]) {
      this.addSaved(category);
    } else {
      this.addUnsaved(category);
    }
  }

  addUnsaved (category) {
    const toCreate = merge({}, this.state.toCreate, {[category.title]: category});

    this.setState({toCreate})
  }

  addSaved (category) {
    const toDestroy = merge({}, this.state.toDestroy);
    delete toDestroy[category.title];

    this.setState({toDestroy})
  }

  handleSave () {
    this.updateResources(this.state.toCreate, this.props.createRegistration).then(() => {
      this.updateResources(this.state.toDestroy, this.props.destroyRegistration).then(() => {
        this.toggleEditMode();
      })
    })
  }

  handleCancel () {
    this.toggleEditMode();
  }

  updateResources (resources, action) {
    return new Promise((resolve, reject) => {
        const resourceKeys = Object.keys(resources);

        for (let i = 0; i < resourceKeys.length; i++) {
          let resource = resources[resourceKeys[i]];

          if (action === this.props.createRegistration) {
            action({category_id: resource.id});
          } else {
            action(resource.id);
          }
        }

        resolve();
      })
  }

  render(){
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

export default EditInfo;
