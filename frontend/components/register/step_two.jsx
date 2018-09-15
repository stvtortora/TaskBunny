import React from 'react';
import TaskerPhoto from '../tasker_attributes/tasker_photo';
import {connect} from 'react-redux';
import { fetchUserInfo, changeTasker, editTaskerLocation } from '../../actions/taskers_actions';
import {fetchSizes, fetchVehicles, createRegistration, destroyRegistration} from '../../actions/registration_actions';
import { editTaskerPhoto, uploadTaskerPhoto} from '../../actions/taskers_actions';
import {allLocations} from '../../actions/search_actions';
import merge from 'lodash/merge';
import * as FileUtil from '../../util/file_util';

class StepTwo extends React.Component {
  constructor (props) {
    super(props)

  }

  componentDidMount () {
    this.props.fetchCategorySuggestions();
  }


  render () {
    if (this.props.vehicles) {
      return (

          <div className='become-a-tasker-form'>
            <h3 className='become-a-tasker-subheader'>Tell us about yourself</h3>
            <div>
              <div>
                <div className='taskerImg-container'>
                  <div>
                    <img className='taskerImg'src={this.state.imgUrl}/>
                    <br/>
                    <div className='taskerImg-nav-container'>
                      <input type="file" onChange={this.updateFile}/>
                    </div>
                  </div>
                  <p>Upload a clear, professional photo of only yourself to increase your likelihood of being hired.</p>
                </div>
              </div>
              <form onSubmit={this.handleSubmit} className='form-form'>
                <div>
                  <p className='become-tasker-form-text'>What metro would you like to work in?</p>
                  <select className='select' onChange={this.updateLocation} value={JSON.stringify(this.state.location)}>
                    <option></option>
                    {this.locations()}
                  </select>
                </div>
                <div>
                  <p className='become-tasker-form-text'>What size tasks are you available for?</p>
                  {this.options('sizeIds')}
                </div>
                <div>
                  <p className='become-tasker-form-text'>Do you have access to a vehicle that you can reliably use for tasks?</p>
                  {this.options('vehicleIds')}
                </div>
                <div className='submit-container'>
                  <button type='submit'>Continue</button>
                </div>
              </form>
            </div>
          </div>

      )
    }

    return null;
  }
}

const mapStateToProps = state => {
  const locations = state.entities.search.results;
  const imgUrl = state.taskerInfo.imgUrl;
  const sizes = state.taskerInfo.sizes;
  const vehicles = state.taskerInfo.vehicles;
  const userId = state.session.id
  const location = state.taskerInfo.location;
  const sizeIds = state.session.sizesIds.reduce((ids, id) => {
    const currId = Number(id);
    ids[currId] = currId;
    return ids;
  }, {})
  const vehicleIds = state.session.vehicleIds.reduce((ids, id) => {
    const currId = Number(id);
    ids[currId] = currId;
    return ids;
  }, {})

  return {
    imgUrl,
    locations,
    location,
    sizes,
    vehicles,
    userId,
    sizeIds,
    vehicleIds,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
    fetchSizes: () => dispatch(fetchSizes()),
    fetchVehicles: () => dispatch(fetchVehicles()),
    allLocations: () => dispatch(allLocations()),
    editTaskerLocation: (location) => dispatch(editTaskerLocation(location)),
    createSizeRegistration: (registration_info) => dispatch(createRegistration('size_registrations', registration_info)),
    createVehicleRegistration: (registration_info) => dispatch(createRegistration('vehicle_registrations', registration_info)),
    destroySizeRegistration: (id) => dispatch(destroyRegistration('size_registrations', id)),
    destroyVehicleRegistration: (id) => dispatch(destroyRegistration('vehicle_registrations', id)),
    changeTasker: (info, taskerId) => dispatch(changeTasker(info, taskerId)),
    uploadTaskerPhoto: (formData) => dispatch(uploadTaskerPhoto(formData)),
    editTaskerPhoto: (imgUrl) => dispatch(editTaskerPhoto(imgUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
