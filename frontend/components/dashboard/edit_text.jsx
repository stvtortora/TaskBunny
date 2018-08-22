import React from 'react';
import { connect } from 'react-redux';

class EditText extends React.Component{
  constructor(props){
    super(props);
    this.state = {text: '', editMode: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  handleChange() {
    return e => {
      this.setState({
        text: e.target.value
      });
    }
  }

  handleUpdate() {
    this.props.changeTasker(this.state, this.props.userId).then(response => {
      this.props.editState(this.state)
      this.toggleEditMode()
    })
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render(){
    const input = this.props.type === 'Rate' ? <input value={this.state.text} onChange={this.handleChange()}/> : <textarea value={this.state.text} onChange={this.handleChange()}></textarea>

    if (this.state.editMode) {
      return (
        <div>
          <h2 onChange>{this.props.type}</h2>
          {input}
          <div onClick={this.handleUpdate}>Save</div>
        </div>
      )
    }

    return (<div>
      <h2 onChange>{this.props.type}</h2>
      <div>{this.props.text}</div>
      <div onClick={this.toggleEditMode}>Edit</div>
    </div>)
  }
}

export default EditText;
