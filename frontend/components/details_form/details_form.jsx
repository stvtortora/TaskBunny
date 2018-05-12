import React from 'react';

class DetailsForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchLocations();
  }

  render() {
    return (
      <h1>you're at the details form!</h1>
    )
  }
}

export default DetailsForm;
