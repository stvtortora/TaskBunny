import React from 'react';
import { connect } from 'react-redux';

class Show extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateShowForm(this.props.formName);
  }

  render() {
    let displayNames;

    if(this.props.fields[0]){
      displayNames = this.props.fields.map(field => {
        return <p>{field}</p>
      });

      return (
        <span className="show_form">
          <div className="parameter_names">
            {displayNames}
          </div>
          <div id="edit_button">
            <p onClick={this.handleClick}>Edit</p>
          </div>
        </span>
      );

    }

    return null;
  }
}

export default Show;
