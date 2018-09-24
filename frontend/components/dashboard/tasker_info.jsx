import React from 'react';
import { connect } from 'react-redux';
import TaskerPhoto from '../tasker_attributes/tasker_photo';
import EditDescription from '../tasker_attributes/edit_description_container';
import EditRate from '../tasker_attributes/edit_rate_container';
import EditLocation from '../tasker_attributes/edit_location_container';
import EditCategories from '../tasker_attributes/edit_categories_container';
import EditSchedule from '../tasker_attributes/schedule_container';
import EditSizes from '../tasker_attributes/edit_sizes_container';
import EditVehicles from '../tasker_attributes/edit_vehicles_container';
import { fetchUserInfo } from '../../actions/taskers_actions';


class TaskerInfo extends React.Component{
  constructor(props){
    super(props);
    this.update = this.update.bind(this);
    this.info = {
      'Photo': <TaskerPhoto />,
      'About': <EditDescription />,
      'Location': <EditLocation />,
      'Rate': <EditRate />,
      'Categories': <EditCategories />,
      'Sizes': <EditSizes />,
      'Vehicles': <EditVehicles />,
      'Schedule': <EditSchedule />
    }
    this.state = {
      currentInfo: 'Photo'
    }
  }

  componentDidMount(){
    this.props.fetchUserInfo(this.props.userId);
  }

  update (e) {
    debugger
    this.setState({
      currentInfo: e.currentTarget.textContent
    })
  }

  render(){
    debugger
    return (
      <div className='tasker-dashboard-info'>
        <div className='tasker-info-options'>
          <div className='info-option' onClick={this.update}>Photo</div>
          <div className='info-option' onClick={this.update}>About</div>
          <div className='info-option' onClick={this.update}>Location</div>
          <div className='info-option' onClick={this.update}>Rate</div>
          <div className='info-option' onClick={this.update}>Categories</div>
          <div className='info-option' onClick={this.update}>Sizes</div>
          <div className='info-option' onClick={this.update}>Vehicles</div>
          <div className='info-option' onClick={this.update}>Schedule</div>
        </div>
        <div className='tasker-info-box'>
          {this.info[this.state.currentInfo]}
        </div>
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
