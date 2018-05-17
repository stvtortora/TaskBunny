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
      <section>
        <div onClick={() => this.props.fetchSchedule(this.props.id)}>View Schedule</div>
        <div>
          <h3>{this.props.name}</h3>
          <p>${this.props.rate}/hr</p>
          <span>
            <p>How I can help: <br/> {this.props.description}</p>
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
