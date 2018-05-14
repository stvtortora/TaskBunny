import React from 'react';
import { connect } from 'react-redux';

class Edit extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.edit()
  }

  render() {
    const names = this.props.fields.map(field => {
      return <p>{field.title}</p>
    });

    return (
      <div>
        {names}
        <p onClick={this.handleClick}>Edit</p>
      </div>
    );
  }
}

export default Edit;
