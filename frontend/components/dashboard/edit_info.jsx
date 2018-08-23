import React from 'react';
import { connect } from 'react-redux';
import { changeTasker } from '../../actions/taskers_actions';
import LocationSearch from '../search/location_search_container';
import CategorySearch from '../search/category_search_container';

class EditInfo extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.state = {editMode: false};
  }

  handleClick(){
    this.toggleEditMode();
  }

  handleSubmit(){
    if(this.props.type === 'Location'){
      this.props.changeTasker({location_id: this.props.location.id}, this.props.userId).then(response => {
        this.toggleEditMode();
      });
    } else{
      this.toggleEditMode();
    }
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render(){
    const placeHolderText = this.props.type === 'Location' ? '+ Add your location' : '+ Add your areas of expertise';
    const requirePlaceHolder = !this.props.location || (this.props.categories && !Object.keys(this.props.categories).length);

    if(!this.state.editMode){
      return requirePlaceHolder ? <div onClick={this.handleClick}>{placeHolderText}</div> :
        <div className='tasker-attribute-container'>
          <div>{this.props.type}</div>
          <div>{this.props.display}</div>

          <div onClick={this.handleClick}>Edit</div>
        </div>
    }

    const search = this.props.type === 'Location' ? <LocationSearch toggleEditMode={this.toggleEditMode} type='location' show={true}/> : <CategorySearch toggleEditMode={this.toggleEditMode} type='category' show={true}/>
    let categories = null;

    if(this.props.type === 'Categories'){
      categories = Object.keys(this.props.categories).map(id => {
        const category = this.props.categories[id];
        return <div onClick={() => {
            this.props.destroyRegistration(id)
        }}>
          {category.title}
        </div>
      });
    }

    return (
      <div className='tasker-attribute-container'>
        <div>{this.props.type}</div>
        <div>
          {search}
          {categories}
        </div>
        <div className='save-edit-container'>
          <div onClick={this.handleSubmit}>Save</div>
          <div onClick={this.toggleEditMode}>Cancel</div>
        </div>
      </div>
    )
  }
}
// <form onSubmit={this.handleSubmit}>
//   <input type='submit' value='Save'/>
// </form>

export default EditInfo;
