import React from 'react';
import { connect } from 'react-redux';
import { editTaskerPhoto, uploadTaskerPhoto} from '../../actions/taskers_actions';
import * as FileUtil from '../../util/file_util';



class TaskerPhoto extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      imgUrl: this.props.imgUrl,
      imgFile: null,
      editMode: false
    }

    this.updateFile = this.updateFile.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.imgUrl !== prevProps.imgUrl ||
       ((!this.state.editMode && prevState.editMode) && (this.props.imgUrl !== this.state.imgUrl))
    ) {
      this.setState({
        imgUrl: this.props.imgUrl,
        imgFile: null
      })
    }

    if (this.props.registering && this.state.editMode === false) {
      this.setState({editMode: true})
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
      return this.toggleEditMode();
    });
  }

  toggleEditMode(){
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    const displayMessage = this.props.imgUrl.includes('http://s3') ? 'Change photo' : '+ Add photo'
    return (
      <div>
        <img className='taskerImg'src={this.state.editMode ? this.state.imgUrl : this.props.imgUrl}/>
        <br/>
        <div className='taskerImg-nav-container'>
          {this.state.editMode || this.props.registering ? <input type="file" onChange={this.updateFile}/> : null}
          {this.props.registering ? null :
          <div>
            {this.state.editMode ? <div onClick={this.uploadFile} className='photo-text'>Save</div> : null}
            <div className={displayMessage === '+ Add photo' && !this.state.editMode ? 'placeholder-text' : 'photo-text'} onClick={this.toggleEditMode}>{this.state.editMode ? 'Cancel' : displayMessage}</div>
          </div>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const imgUrl = state.taskerInfo.imgUrl;
  const userId = state.session.id;

  return {
    imgUrl,
    userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadTaskerPhoto: (formData) => dispatch(uploadTaskerPhoto(formData)),
    editTaskerPhoto: (imgUrl) => dispatch(editTaskerPhoto(imgUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskerPhoto);
