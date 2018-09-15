import React from 'react';
import merge from 'lodash/merge';

class EditableAttribute extends React.Component {
  constructor(props){
    super(props);
    this.options = this.options.bind(this); this.categoryDisplay = this.categoryDisplay.bind(this); this.categoryDisplayHelper = this.categoryDisplayHelper.bind(this);
    this.resourceTitles = this.resourceTitles.bind(this); this.selectDay = this.selectDay.bind(this); this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this); this.updateResources = this.updateResources.bind(this); this.key = this.key.bind(this);
    this.firstResource = this.firstResource.bind(this); this.addResource = this.addResource.bind(this); this.addSaved = this.addSaved.bind(this);
    this.addUnsaved = this.addUnsaved.bind(this); this.removeSaved = this.removeSaved.bind(this); this.removeUnsaved = this.removeUnsaved.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this); this.days = this.days.bind(this); this.times = this.times.bind(this);
    this.state = {date: null, toCreate: {}, toDestroy: {}, editMode: false};
  }

  componentDidMount(){
    this.props.fetchData().then(response => {
      if (this.props.idName === 'time_slot_id') {
        this.setState({
          date: Object.keys(response.timeSlots.days)[0]
        });
      }
    });
  }

  days () {
    if (!(this.props.timeSlots.days && this.state.date)) {return null}
    return Object.keys(this.props.timeSlots.days).map(day => {
      const className = this.state.date === day ? 'selectedDay-tasker' : 'unselectedDay-tasker';
      return <div className={className} value={day} onClick={this.selectDay}>{day}</div>
    });
  }

  selectDay (e){
    this.setState({
      date: e.currentTarget.getAttribute('value')
    });
  }

  times () {
    if (!(this.props.timeSlots.days && this.state.date)) {return null}

    return this.props.timeSlots.days[this.state.date].map(time => {
        const saved = this.props.registrationIds.includes(time.id.toString());
        let className;
        let toggleMethod;

        if ((saved && !this.state.toDestroy[time.id]) || this.state.toCreate[time.id]){
          className = this.props.filledStatuses[time.id] ? 'filledTime' : 'selectedTime-tasker';
          toggleMethod = saved ? this.removeSaved : this.removeUnsaved;
        } else {
          className = 'unselectedTime-tasker';
          toggleMethod = saved ? this.addSaved : this.addUnsaved;
        }

        return (
          <div className={className} id={time.id} onClick={className === 'filledTime' ? null : () => toggleMethod(time)}>
              <div className={className === 'filledTime' ? 'filled-attribute' : 'attribute-title'}>
                {className === 'filledTime' ? 'Booked' : time.title}
              </div>
              <div className='attribute-hover'>{className === 'unselectedTime-tasker' ? '+' : 'x'}</div>
          </div>
        )
    });
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

  resourceTitles (resources) {
    return Object.keys(resources).reduce((titles, categoryId) => {
      titles[resources[categoryId].title] = true;
      return titles;
    }, {});
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

  key (resource) {
    return this.props.idName === 'category_id' || this.props.idName === 'location_id' ? resource.title : resource.id;
  }

  removeSaved (resource) {
    const toDestroy = merge({}, this.state.toDestroy, {[this.key(resource)]: resource});

    this.setState({toDestroy})
  }

  removeUnsaved (resource) {
    const toCreate = merge({}, this.state.toCreate);
    delete toCreate[this.key(resource)];

    this.setState({toCreate});
  }

  firstResource (resources) {
    return resources[Object.keys(resources)[0]];
  }

  addResource (resource) {
    if (this.props.type === 'Location') {
      const toCreate = this.firstResource(this.state.toCreate);
      if (toCreate) {
        this.removeUnsaved(toCreate);
      }
    }

    if (this.props.type ==='Category' && this.resourceTitles(this.props.categories)[resource.title]) {
        this.addSaved(resource);
    } else {
      debugger
        this.addUnsaved(resource);
    }
  }

  addUnsaved (resource) {
    debugger
    const toCreate = merge({}, this.state.toCreate, {[this.key(resource)]: resource});

    this.setState({toCreate})
  }

  addSaved (resource) {
    const toDestroy = merge({}, this.state.toDestroy);
    delete toDestroy[this.key(resource)];

    this.setState({toDestroy})
  }

  handleSave () {
    if (this.props.type === 'Location') {
      debugger
      const location = this.state.toCreate[Object.keys(this.state.toCreate)[0]];
      this.props.changeTasker({location_id: location.id}, this.props.userId).then(() => {
          this.props.editTaskerLocation(location);
          this.toggleEditMode();
      })
    } else {
      this.updateResources(this.state.toCreate, this.props.createRegistration).then(() => {
        this.updateResources(this.state.toDestroy, this.props.destroyRegistration).then(() => {
          this.toggleEditMode();
        })
      })
    }
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
            action({[this.props.idName]: resource.id});
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
    return this.props.render.call(this);
  }
}

export default EditableAttribute;
