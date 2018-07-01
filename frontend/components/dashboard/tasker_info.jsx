import React from 'react';
import { connect } from 'react-redux';
import EditLocation from './edit_location_container';
import EditCategories from './edit_categories_container';
import EditSchedule from './edit_schedule';
import EditSizes from './edit_sizes_container';
import { fetchUserInfo } from '../../actions/taskers_actions';

class TaskerInfo extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserInfo(this.props.userId);
  }

  render(){
    return (
      <div>
        <EditLocation />
        <EditCategories />
        <EditSchedule />
        <EditSizes />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const userId = state.session.id

  return {
    userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserInfo: (id) => dispatch(fetchUserInfo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskerInfo);
