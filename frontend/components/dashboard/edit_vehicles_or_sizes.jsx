import React from 'react';

class EditVehiclesOrSizes extends React.Component {
  constructor(props){
    super(props);
    this.toggleSelection = this.toggleSelection.bind(this);
  }

  componentDidMount(){
    this.props.fetchData();
  }

  toggleSelection (e) {
    let idName = this.props.title === 'Sizes' ? 'size_id' : 'vehicle_id';
    if(e.currentTarget.getAttribute('class') === 'unselectedOption'){
      this.props.createRegistration({ [idName]: e.currentTarget.getAttribute('id') })
    } else {
      this.props.destroyRegistration(Number(e.currentTarget.getAttribute('id')))
    }
  }

  render(){
    debugger
    const options = Object.keys(this.props.options).map(optionId => {
      const option = this.props.options[optionId];
      const className = this.props.registrationIds.includes(optionId) ? 'selectedOption' : 'unselectedOption';
      return <div className={className} id={option.id} onClick={this.toggleSelection}>{option.title}</div>
    });

    return(
      <div>
        <h3>{this.props.title}</h3>
        <div>
          {options}
        </div>
      </div>
    )
  }
}

export default EditVehiclesOrSizes;
