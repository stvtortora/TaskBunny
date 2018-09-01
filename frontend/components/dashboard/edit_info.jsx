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
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleNewResources = this.handleNewResources.bind(this);
    this.resourceTitles = this.resourceTitles.bind(this);
    this.state = {editMode: false, newResources: [], destroyResources: []};
  }

  resourceTitles (resources) {
    return Object.keys(resources).reduce((titles, categoryId) => {
      titles[resources[categoryId].title] = true;
      return titles;
    }, {});
  }

  componentDidUpdate (prevProps) {
    if (this.props.categories && Object.keys(this.props.categories).length && (prevProps.categories !== this.props.categories)) {

      const prevCategoryTitles = this.resourceTitles(prevProps.categories);

      const newResources = this.state.newResources.slice(0);
      Object.keys(this.props.categories).forEach((categoryId) => {
        if (!prevCategoryTitles[this.props.categories[categoryId].title]) {

          newResources.push(this.props.categories[categoryId]);
        }
      });

      this.setState({
        newResources
      })
    }
  }

  handleSave(){
    if (this.props.type === 'Location' && this.props.location) {
      this.props.changeTasker({location_id: this.props.location.id}, this.props.userId).then(() => {
        this.props.affirmLocationChange();
        this.toggleEditMode();
      });
    } else {
      this.handleNewResources(this.props.createRegistration, 'save', this.state.newResources)
      .then(() => {
        this.handleNewResources(this.props.destroyRegistration, 'save', this.state.destroyResources)
        .then(() => {
          this.setState({newResources: [], destroyResources: []});
          this.toggleEditMode();
        })
      })
    }
  }

  handleNewResources (action, type, resources) {

    return new Promise((resolve, reject) => {

      for (let i = 0; i < resources.length; i++) {
        let resource = resources[i];

        if (resource.unsaved || action === this.props.destroyRegistration) {

          this.props.removeRegistration(resource);
        }

        if (type === 'save') {
          if (action === this.props.createRegistration) {
            action({category_id: resource.id});

          } else {
            action(resource.id)
          }

        }
      }

      resolve();
    })
  }

  handleCancel () {
    if (this.props.type === 'Location') {
      this.props.cancelLocationChange();
    } else {
      debugger
      this.handleNewResources(null, 'cancel', this.state.newResources);
      this.handleNewResources(null, 'cancel', this.state.destroyResources)
      this.setState({newResources: [], destroyResources: []});
    }

    this.toggleEditMode();
  }

  handleRemove (resource) {
    return () => {
      const resourceTitles = this.resourceTitles(this.props.categories);

      if (!resource.unsaved) {
        const destroyResources = this.state.destroyResources.slice(0);
        destroyResources.push(resource);

        this.setState({
          destroyResources
        });
      }
    }
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode
    });
  }

  categoryDisplay () {
    return Object.keys(this.props.categories).map(id => {
      const category = this.props.categories[id];
      if (!this.state.destroyResources.includes(category)) {
        return (
          <div className='selected-category-container' id='attribute-container-edit'>
            <div className='attribute-title' onClick={this.handleRemove(category)}>{category.title}</div>
            <div className='attribute-hover'>x</div>
          </div>
        )
      }

      return null;
    });
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

    const search = this.props.type === 'Location' ? <LocationSearch toggleEditMode={this.toggleEditMode} type='location' show={true}/> : <CategorySearch toggleEditMode={this.toggleEditMode} type='category' show={true}/>
    let categories = null;

    if(this.props.type === 'Categories'){
      categories = this.categoryDisplay();
    }

    return (
      <div className='tasker-attribute-container' id='attribute-container-edit'>
        <div className='tasker-attribute-name'>{this.props.type}</div>
        <div className='tasker-attribute-content'>
          <div className='tasker-search-container'>
            {search}
          </div>
          <div className='tasker-category-list'>
            <div>
              {categories}
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
// <form onSubmit={this.handleSubmit}>
//   <input type='submit' value='Save'/>
// </form>

export default EditInfo;
