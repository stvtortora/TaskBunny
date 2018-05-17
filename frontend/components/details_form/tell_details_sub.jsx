import React from 'react';
import { addToTask, fetchTaskers } from '../../actions/entities_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';

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

    this.props.fetchTaskers(this.props.task_info).then(() => {
      this.props.addToTask(this.state);
    });
    this.props.history.push('/taskform/select_tasker');
  }

  render(){
    let form;
    if(this.props.showForm){
      form = (
        <form onSubmit={this.handleSubmit}>
          <p>Start the conversation and tell your Tasker what you need done. This helps us match you with the best ones for the job.</p>
          <textarea className="tell_details" placeholder="Provide a summary of what you need done." onChange={this.handleChange}></textarea>
          <div className='form_input_button'>
            <input type="submit" value="See Taskers & Prices"/>
          </div>
        </form>
      )
    }

    return (
      <section>
        <h3 className='sub_form_name'>TELL US THE DETAILS</h3>
        {form}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  const showForm = Boolean(state.entities.detailForm.showForm === 'tellDetails');
  const task_info = state.entities.currentTask;

  return {
    showForm,
    task_info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (details) => dispatch(addToTask(details)),
    fetchTaskers: (task_info) => dispatch(fetchTaskers(task_info))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TellDetails));
