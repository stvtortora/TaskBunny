import React from 'react';
import { connect } from 'react-redux';
import TaskerPhoto from './tasker_photo';
import EditDescription from './edit_description_container';
import EditRate from './edit_rate_container';
import EditLocation from './edit_location_container';
import EditCategories from './edit_categories_container';
import EditSchedule from './edit_schedule';
import EditSizes from './edit_sizes_container';
import EditVehicles from './edit_vehicles_container';
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
        <TaskerPhoto />
        <EditDescription />
        <EditRate />
        <EditLocation />
        <EditCategories />
        <EditSchedule />
        <EditSizes />
        <EditVehicles />
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
