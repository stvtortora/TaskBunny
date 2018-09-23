import React from 'react';
import ReactDOM from 'react-dom';
import TaskerPhoto from '../tasker_attributes/tasker_photo';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import { fetchUserInfo, changeTasker, editTaskerLocation } from '../../actions/taskers_actions';
import {fetchSizes, fetchVehicles, createRegistration, destroyRegistration} from '../../actions/registration_actions';
import { editTaskerPhoto, uploadTaskerPhoto} from '../../actions/taskers_actions';
import {allLocations} from '../../actions/search_actions';
import merge from 'lodash/merge';
import * as FileUtil from '../../util/file_util';

class StepOne extends React.Component {
  constructor (props) {
    super(props)
    this.updateState = this.updateState.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.locations = this.locations.bind(this);
    this.options = this.options.bind(this);
    this.initializeState = this.initializeState.bind(this);
    this.updateRegistrations = this.updateRegistrations.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.myRef = React.createRef();
    this.state = {location: null, sizeIds: {}, vehicleIds: {}, imgUrl: this.props.imgUrl, imgFile: null, error: null}
  }

  componentDidMount () {
    this.props.fetchUserInfo(this.props.userId);
    this.props.allLocations();
    this.props.fetchSizes();
    this.props.fetchVehicles();
  }

  componentDidUpdate (prevProps) {
    if (this.props.sizeIds !== prevProps.sizeIds) {
      this.initializeState('sizeIds')
    }
    if (this.props.vehicleIds !== prevProps.vehicleIds) {
      this.initializeState('vehicleIds')
    }
    if (this.props.location !== prevProps.location) {
      this.setState({
        location: this.props.location
      })
    }
    if (this.props.imgUrl !== prevProps.imgUrl) {
      this.setState({
        imgUrl: this.props.imgUrl,
        imgFile: null
      })
    }
  }

  updateFile (e) {
    e.preventDefault()
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imgUrl: reader.result, imgFile: file});
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imgUrl: "", imgFile: null });
    }
  }

  uploadFile () {
    const file = this.state.imgFile;

    const formData = new FormData();
    formData.append("user[id]", this.props.userId);
    if (file) formData.append("user[image]", file);

    return this.props.uploadTaskerPhoto(formData).then(response => {
      this.props.editTaskerPhoto(response.image_url);
    });
  }

  updateLocation (e) {
    this.setState({
      location: JSON.parse(e.target.value)
    })
  }

  updateState (field, id) {
    return () => {
      const newSlice = merge({}, this.state[field]);
      if (this.state[field][id]) {
        delete newSlice[id];
      } else {
        newSlice[id] = id;
      }
      this.setState({
        [field]: newSlice
      })
    }
  }

  locations () {
    return Object.keys(this.props.locations).map((id) => {
      const location = this.props.locations[id];
      debugger
      return <option value={JSON.stringify(location)}>{location.title}</option>
    })
  }

  initializeState (field) {
    const slice = field === 'sizeIds' ? this.props.sizeIds : this.props.vehicleIds;
    Object.keys(slice).forEach((id) => {
      this.updateState(field, id)()
    })
  }

  options (field) {
    const options = field === 'sizeIds' ? this.props.sizes : this.props.vehicles;
    return Object.keys(options).map(id => {
      const option = options[id];
      const text = {
        'Small': 'For tasks that take under 1 hour.',
        'Medium': 'For tasks that take between 1 and 3 hours.',
        'Large': 'For tasks that take longer than 3 hours.',
        'none': 'For transporting small items.',
        'car': 'For transporting medium-sized items.',
        'truck': 'For transporting multiple large-sized items in a single trip.'
      }

      return (
            <div className='checkbox-option'>
              <div className='checkbox-header'>
                <input type='checkbox' checked={this.state[field][option.id] ? true : false} onClick={this.updateState(field, option.id)}/>
              </div>
              <div className = 'checkbox-text'>
                <div className='become-a-tasker-option'>{option.title[0].toUpperCase() + option.title.slice(1)}</div>
                <p>{text[option.title]}</p>
              </div>
            </div>
          )
    })
  }

  updateRegistrations (registrations1, registrations2, action, idName) {
    const ids = Object.keys(registrations1);

    return new Promise((resolve, reject) => {

      for (let i = 0; i < ids.length; i++) {
        const id = Number(ids[i]);
        if (!registrations2[id]) {
          if (idName) {
            action({[idName]: id})
          } else {
            action(id)
          }
        }
      }

      resolve();
    })
  }

  handleSubmit (e) {
    e.preventDefault();
    if(this.state.location) {

      this.updateRegistrations(this.state.sizeIds, this.props.sizeIds, this.props.createSizeRegistration, 'size_id')
      .then(() => {
        this.updateRegistrations(this.props.sizeIds, this.state.sizeIds, this.props.destroySizeRegistration, null).then(() => {
          this.updateRegistrations(this.state.vehicleIds, this.props.vehicleIds, this.props.createVehicleRegistration, 'vehicle_id').then(() => {
            this.updateRegistrations(this.props.vehicleIds, this.state.vehicleIds, this.props.destroyVehicleRegistration, null).then(() => {
              this.props.changeTasker({location_id: this.state.location.id}, this.props.userId).then(() => {
                this.uploadFile().then(() => {
                  this.props.history.push('/')
                })
              })
            })
          })
        })
      })
    } else {
      const domNode = ReactDOM.findDOMNode(this.myRef.current);
      domNode.scrollIntoView()
      this.setState({error: true})
    }
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
                  <div className='select-container'>
                    <select ref={this.myRef} className='select' id={this.state.error ? 'select-error' : ''} onChange={this.updateLocation} value={JSON.stringify(this.state.location)}>
                      <option></option>
                      {this.locations()}
                    </select>
                    {this.state.error ? <p id='select-error-message'>Location can't be blank.</p>: null}
                  </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StepOne));
