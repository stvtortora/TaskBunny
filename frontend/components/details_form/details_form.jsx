import React from 'react';
import LocationSub from './location_sub';

class DetailsForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    return (
      <section onClick={() => this.props.modDropdown(false)}>
        <LocationSub />
      </section>
    )
  }
}

export default DetailsForm;
