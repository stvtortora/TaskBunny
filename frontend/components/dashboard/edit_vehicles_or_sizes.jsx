import React from 'react';

class EditVehiclesOrSizes extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchData();
  }

  toggleSelection(e){
    let idName = this.props.title === 'Sizes' ? 'size_id' : 'vehicle_id';
    if(e.currentTarget.getAttribute('class') === 'unselectedTime'){
      this.props.createRegistration({ idName: e.currentTarget.getAttribute('id'), tasker_id: this.props.userId })
    }
  }

  render(){
    const options = Object.keys(this.props.options).map(optionId => {
      const option = this.props.options[optionId];
      debugger
      const className = this.props.registrationIds === option ? 'selectedOption' : 'unselectedUnselected';
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
