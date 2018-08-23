import React from 'react';

class EditVehiclesOrSizes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: false
    }
    this.toggleSelection = this.toggleSelection.bind(this);
    this.options = this.options.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentDidMount(){
    this.props.fetchData()
  }

  toggleSelection (e) {
    let idName = this.props.title === 'Sizes' ? 'size_id' : 'vehicle_id';
    if(e.currentTarget.getAttribute('class') === 'unselectedOption'){
      this.props.createRegistration({ [idName]: e.currentTarget.getAttribute('id') })
    } else {
      debugger
      this.props.destroyRegistration(Number(e.currentTarget.getAttribute('id')))
    }
  }

  options () {
    return Object.keys(this.props.options).map(optionId => {
      const option = this.props.options[optionId];
      const className = this.props.registrationIds.includes(optionId) ? 'selectedOption' : 'unselectedOption';

      return this.state.editMode ?
        <div className={className} id={option.id} onClick={this.toggleSelection}>
          <div className='attribute-title'>
            {option.title[0].toUpperCase() + option.title.slice(1)}
          </div>
          <div className='attribute-hover'>
            {className === 'unselectedOption' ? '+' : 'x'}
          </div>
        </div> :
        <div className={`${className}-static`}>{option.title[0].toUpperCase() + option.title.slice(1)}</div>
    });
  }

  toggleEditMode () {
    this.setState({editMode: !this.state.editMode})
  }

  render(){
    const placeHolderText = this.props.title === 'Sizes' ? '+ Add your task size preferences' : '+ Add your vehicle capabilities';
    const options = this.options();
    const requirePlaceHolder = this.props.registrationIds.length === 0 && !this.state.editMode;

    return requirePlaceHolder ? <div onClick={this.toggleEditMode}>{placeHolderText}</div> :
      <div className='tasker-attribute-container'>
        <div className='tasker-attribute-name'>{this.props.title}</div>
        <div className='size-vehicle-options'>
          {options}
        </div>
        <div onClick={this.toggleEditMode}>{this.state.editMode ? 'Done' : 'Edit'}</div>
      </div>
  }
}

export default EditVehiclesOrSizes;
