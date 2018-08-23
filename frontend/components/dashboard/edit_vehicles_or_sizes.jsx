import React from 'react';

class EditVehiclesOrSizes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showOptions: false
    }
    this.toggleSelection = this.toggleSelection.bind(this);
    this.options = this.options.bind(this);
    this.noneSelected = this.noneSelected.bind(this);
    this.toggleShowOptions = this.toggleShowOptions.bind(this);
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

      return <div className={className} id={option.id} onClick={this.toggleSelection}>{option.title}</div>
    });
  }

  toggleShowOptions () {
    this.setState({showOptions: !this.state.showOptions})
  }

  noneSelected (options) {
    if (!options.length) {
      debugger
      return false
    }

    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      debugger
      if (option.props.className === 'selectedOption') {
        return false;
      }
    }

    return true;
  }

  render(){
    const placeHolderText = this.props.title === 'Sizes' ? '+ Add your task size preferences' : '+ Add your vehicle capabilities';
    const options = this.options();
    const requirePlaceHolder = this.noneSelected(options) && !this.state.showOptions;

    return requirePlaceHolder ? <div onClick={this.toggleShowOptions}>{placeHolderText}</div> :
      <div>
        <h3>{this.props.title}</h3>
        <div>
          {options}
        </div>
        {this.noneSelected(options) ? <div onClick={this.toggleShowOptions}>Cancel</div> : null}
      </div>
  }
}

export default EditVehiclesOrSizes;
