import React from 'react';
import merge from 'lodash/merge';


class EditVehiclesOrSizes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: false,
      toCreate: {},
      toDestroy: {}
    }
    this.options = this.options.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.updateResources = this.updateResources.bind(this);
    this.addSaved = this.addSaved.bind(this);
    this.addUnsaved = this.addUnsaved.bind(this);
    this.removeSaved = this.removeSaved.bind(this);
    this.removeUnsaved = this.removeUnsaved.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentDidMount(){
    this.props.fetchData()
  }

  options () {
    return Object.keys(this.props.options).map(optionId => {
      const option = this.props.options[optionId];
      const saved = this.props.registrationIds.includes(optionId);

      const className = (saved && !this.state.toDestroy[optionId]) || this.state.toCreate[optionId] ? 'selectedOption' : 'unselectedOption';

      let toggleMethod;
      if (saved) {
        toggleMethod = className === 'selectedOption' ? this.removeSaved : this.addSaved;
      } else {
        toggleMethod = className === 'selectedOption' ? this.removeUnsaved : this.addUnsaved;
      }

      return this.state.editMode ?
        <div className={className} id={option.id} onClick={() => toggleMethod(option)}>
          <div className='attribute-title'>
            {option.title[0].toUpperCase() + option.title.slice(1)}
          </div>
          <div className='attribute-hover'>
            {className === 'unselectedOption' ? '+' : 'x'}
          </div>
        </div> :
        className === 'selectedOption' ? <div className={`${className}-static`}>{option.title[0].toUpperCase() + option.title.slice(1)}</div> : null;
    });
  }

  removeSaved (resource) {
    const toDestroy = merge({}, this.state.toDestroy, {[resource.id]: resource});

    this.setState({toDestroy})
  }

  removeUnsaved (resource) {
    const toCreate = merge({}, this.state.toCreate);
    delete toCreate[resource.id];

    this.setState({toCreate});
  }

  addUnsaved (resource) {
    const toCreate = merge({}, this.state.toCreate, {[resource.id]: resource});

    this.setState({toCreate})
  }

  addSaved (resource) {
    const toDestroy = merge({}, this.state.toDestroy);
    delete toDestroy[resource.id];

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
          debugger
          let resource = resources[resourceKeys[i]];

          if (action === this.props.createRegistration) {
            action({size_id: resource.id});
          } else {
            action(resource.id);
          }
        }

        resolve();
      })
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode,
      toCreate: {},
      toDestroy: {}
    });
  }

  render(){
    const placeHolderText = this.props.title === 'Sizes' ? '+ Add your task size preferences' : '+ Add your vehicle capabilities';
    const options = this.options();
    const requirePlaceHolder = this.props.registrationIds.length === 0 && !this.state.editMode;

    return requirePlaceHolder ? <div onClick={this.toggleEditMode} className='placeholder-text'>{placeHolderText}</div> :
      <div className='tasker-attribute-container' id={this.state.editMode ? 'attribute-container-edit' : ''}>
        <div className='tasker-attribute-name'>{this.props.title}</div>
        <div className='size-vehicle-options'>
          {options}
        </div>
        <div className='save-edit-container'>
          <div onClick={this.state.editMode ? this.handleSave : this.toggleEditMode }>{this.state.editMode ? 'Save' : 'Edit'}</div>
          {this.state.editMode ? <div onClick={this.toggleEditMode }>Cancel</div> : null}
        </div>
      </div>
  }
}

export default EditVehiclesOrSizes;
