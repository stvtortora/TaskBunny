import React from 'react';
import { connect } from 'react-redux';

class EditText extends React.Component{
  constructor(props){
    super(props);
    this.state = {text: '', editMode: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.editMode !== prevState.editMode) {
      this.setState({
        text: this.props.text
      })
    }
  }

  handleChange() {
    return e => {
      this.setState({
        text: e.target.value
      });
    }
  }

  handleSave () {
    this.props.changeTasker(this.state, this.props.userId).then(response => {
      this.props.editState(this.state)
      this.toggleEditMode()
    })
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode,
      text: ''
    });
  }

  render(){
    const input = this.props.type === 'Rate' ? <input id='rate' value={this.state.text} onChange={this.handleChange()} placeholder='Enter your hourly rate'/> :
    <textarea id='description' value={this.state.text} onChange={this.handleChange()} placeholder='Describe your services to prospective clients'></textarea>

    if (this.state.editMode) {
      return (
        <div className='tasker-attribute-container' id='attribute-container-edit'>
          <div className='tasker-attribute-name'>{this.props.type}</div>
          <div className='tasker-attribute-content'>
            {input}
          </div>
          <div className='save-edit-container'>
            <div onClick={this.handleSave}>Save</div>
            <div onClick={this.toggleEditMode}>Cancel</div>
          </div>
        </div>
      )
    }

    const placeHolderText = this.props.type === 'Rate' ? '+ Add your hourly rate' : '+ Add a description of your services';

    return this.props.text && this.props.text.length ?
      <div className='tasker-attribute-container'>
        <div className='tasker-attribute-name'>{this.props.type}</div>
        <div className='tasker-attribute-content' id='tasker-attribute-selection'>{this.props.text}</div>
        <div className='save-edit-container'>
          <div onClick={this.toggleEditMode}>{this.props.text && this.props.text.length ? 'Edit' : editPlaceHolder}</div>
        </div>
      </div> :
      <div onClick={this.toggleEditMode} className='placeholder-text'>{placeHolderText}</div>
  }
}

export default EditText;
