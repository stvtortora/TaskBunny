import React from 'react';
import { connect } from 'react-redux';
import { fetchSchedule } from '../../actions/entities_actions';

class Tasker extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    debugger
    return(
      <section className='tasker-box'>
        <div className='tasker-left'>
          <img src={window.staticImages.tasker_pic} />
        </div>
        <div className='tasker-information'>
          <div className='tasker-header'>
            <h3>{this.props.name}</h3>
            <p>${this.props.rate}/hr</p>
          </div>
          <span>
            <p className='how-i-can-help'>How I can help: </p>
            <p>{this.props.description}</p>
            <div className='custom-button' onClick={() => this.props.fetchSchedule(this.props.id)}>Select & Continue</div>
          </span>
        </div>
      </section>

    )
  }
}

const mapDispatchToProps = dispatch => {

  return {
    fetchSchedule: (taskerId) => dispatch(fetchSchedule(taskerId))
  }
}

export default connect(null, mapDispatchToProps)(Tasker);
