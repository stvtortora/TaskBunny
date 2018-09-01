import React from 'react';
import { connect } from 'react-redux';
import TaskerPhoto from '../tasker_attributes/tasker_photo';
import EditDescription from '../tasker_attributes/edit_description_container';
import EditRate from '../tasker_attributes/edit_rate_container';
import EditLocation from '../tasker_attributes/edit_location_container';
import EditCategories from '../tasker_attributes/edit_categories_container';
import EditSchedule from '../tasker_attributes/edit_schedule';
// import EditSizes from '../tasker_attributes/edit_sizes_container';
// import EditVehicles from '../tasker_attributes/edit_vehicles_container';
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
      <div className='tasker-dashboard-info'>
        <TaskerPhoto />
        <div className='tasker-info-box'>
          <EditDescription />
          <EditLocation />
          <EditRate />
          <EditCategories />
          <EditSchedule />
        </div>
      </div>
    )
  }
}

// <EditSizes />
// <EditVehicles />
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
