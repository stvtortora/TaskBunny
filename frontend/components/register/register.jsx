import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import StepOne from './step_one';


class Register extends React.Component {
  constructor (props) {
    super(props);
    this.incrementForm = this.incrementForm.bind(this);
    this.steps = this.steps.bind(this);
    this.state = {
      step: 1,
    }
  }

  steps () {
    return {
          1: <StepOne incrementForm={this.incrementForm}/>,
        }
  }
  // 2: <StepTwo incrementForm={this.incrementForm}/>

  incrementForm () {
    this.setState({
      currentStep: this.state.currentStep++
    })
  }

  render () {
    return (
      <div>
        <NavBar/>
        <div className='become-a-tasker-form-container'>
          <h1 className='become-a-tasker-header'>Register to become a Tasker</h1>
          {this.steps()[this.state.step]}
        </div>
      </div>
    )
  }
}

export default Register;
