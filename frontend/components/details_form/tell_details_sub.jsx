import React from 'react';
import { addToTask } from '../../actions/entities_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class TellDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {details: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      details: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addToTask(this.state);
    this.props.history.push('/taskform/select_tasker');
  }

  render(){
    return (
      <section>
        <h3>TELL US THE DETAILS</h3>
        <p>Start the conversation and tell your Tasker what you need done!</p>
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder="" onChange={this.handleChange}></textarea>
          <input type="submit" value="See Taskers & Prices"/>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (details) => dispatch(addToTask(details))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(TellDetails));
