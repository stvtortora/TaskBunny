import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

class Tasker extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section>
        <div onClick={this.props.openModal}>View Schedule</div>
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
    openModal: () => dispatch(openModal())
  }
}

export default connect(null, mapDispatchToProps)(Tasker);
