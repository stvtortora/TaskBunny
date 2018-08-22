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
    if(!this.state.editMode){
      return (
        <div className='task_index'>
          <h3>{this.props.type}</h3>
          <div>{this.props.display}</div>
          <p onClick={this.handleClick}>Edit</p>
        </div>
      )
    }

    const search = this.props.type === 'Location' ? <LocationSearch type='location' show={true}/> : <CategorySearch type='category' show={true}/>
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
      <div className='task_index'>
        <h3>{this.props.type}</h3>
        <div>
          {categories}
          {search}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type='submit' value='Save'/>
        </form>
      </div>
    )
  }
}

export default EditInfo;
